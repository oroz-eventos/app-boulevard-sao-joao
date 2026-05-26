import { useEffect, useMemo, useRef, useState } from 'react'
import { PanResponder, Platform, Pressable, StyleSheet, View } from 'react-native'
import { Minus, MonitorPlay, MicrophoneStage, Plus, Storefront } from 'phosphor-react-native'
import Svg, { Path, Rect } from 'react-native-svg'
import type { MapFilterId, MapMarker } from '../types'
import { useMapaPalette } from '../hooks/useMapaPalette'
import { radius } from '@/theme/tokens'

const MAP_WIDTH = 1320
const MAP_HEIGHT = 1840
const DATA_WIDTH = 1000
const DATA_HEIGHT = 1400
const MIN_ZOOM = 0.55
const MAX_ZOOM = 2.8
const ZOOM_STEP = 0.26
const MARKER_BUBBLE_SIZE = 42

type TouchPoint = {
  x: number
  y: number
}

type GestureState =
  | {
      mode: 'idle'
    }
  | {
      mode: 'pan'
      startTouch: TouchPoint
      startOffset: { x: number; y: number }
    }
  | {
      mode: 'pinch'
      startZoom: number
      startDistance: number
      worldCenter: TouchPoint
    }

type MapaCanvasProps = {
  markers: MapMarker[]
  activeFilter: MapFilterId
  activeMarkerId?: string | null
  onSelectMarker: (marker: MapMarker) => void
}

export function MapaCanvas({
  markers,
  activeFilter,
  activeMarkerId = null,
  onSelectMarker,
}: MapaCanvasProps) {
  const palette = useMapaPalette()
  const [viewport, setViewport] = useState({ width: 0, height: 0 })
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const offsetRef = useRef(offset)
  const zoomRef = useRef(zoom)
  const gestureRef = useRef<GestureState>({ mode: 'idle' })

  const filteredMarkers = useMemo(
    () => markers.filter((marker) => activeFilter === 'todos' || marker.kind === activeFilter),
    [activeFilter, markers]
  )

  const baseScale =
    viewport.width > 0 && viewport.height > 0
      ? Math.max(viewport.width / MAP_WIDTH, viewport.height / MAP_HEIGHT)
      : 1

  const totalScale = baseScale * zoom
  const renderedWidth = MAP_WIDTH * totalScale
  const renderedHeight = MAP_HEIGHT * totalScale

  useEffect(() => {
    zoomRef.current = zoom
  }, [zoom])

  const getBounds = (nextZoom = zoom) => {
    const nextScale = baseScale * nextZoom
    const nextWidth = MAP_WIDTH * nextScale
    const nextHeight = MAP_HEIGHT * nextScale

    const centeredX = (viewport.width - nextWidth) / 2
    const centeredY = (viewport.height - nextHeight) / 2

    return {
      minX: nextWidth <= viewport.width ? centeredX : viewport.width - nextWidth,
      maxX: nextWidth <= viewport.width ? centeredX : 0,
      minY: nextHeight <= viewport.height ? centeredY : viewport.height - nextHeight,
      maxY: nextHeight <= viewport.height ? centeredY : 0,
    }
  }

  const clampOffset = (raw: { x: number; y: number }, nextZoom = zoom) => {
    const bounds = getBounds(nextZoom)
    return {
      x: Math.min(bounds.maxX, Math.max(bounds.minX, raw.x)),
      y: Math.min(bounds.maxY, Math.max(bounds.minY, raw.y)),
    }
  }

  useEffect(() => {
    if (!viewport.width || !viewport.height) return
    const centered = clampOffset(
      {
        x: (viewport.width - MAP_WIDTH * baseScale * zoom) / 2,
        y: (viewport.height - MAP_HEIGHT * baseScale * zoom) / 2,
      },
      zoom
    )
    setOffset(centered)
    offsetRef.current = centered
  }, [baseScale, viewport.height, viewport.width, zoom])

  const updateZoom = (delta: number, focalPoint?: TouchPoint) => {
    if (!viewport.width || !viewport.height) return

    const currentZoom = zoomRef.current
    const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number((currentZoom + delta).toFixed(2))))
    if (nextZoom === currentZoom) return

    const currentScale = baseScale * currentZoom
    const nextScale = baseScale * nextZoom
    const focus = focalPoint ?? { x: viewport.width / 2, y: viewport.height / 2 }
    const worldCenterX = (focus.x - offsetRef.current.x) / currentScale
    const worldCenterY = (focus.y - offsetRef.current.y) / currentScale

    const nextOffset = clampOffset(
      {
        x: focus.x - worldCenterX * nextScale,
        y: focus.y - worldCenterY * nextScale,
      },
      nextZoom
    )

    setZoom(nextZoom)
    setOffset(nextOffset)
    offsetRef.current = nextOffset
  }

  const getTouchPoint = (touch: { locationX?: number; locationY?: number; pageX?: number; pageY?: number }): TouchPoint => ({
    x: touch.locationX ?? touch.pageX ?? 0,
    y: touch.locationY ?? touch.pageY ?? 0,
  })

  const getTouchDistance = (touches: TouchPoint[]) =>
    Math.hypot(touches[0].x - touches[1].x, touches[0].y - touches[1].y)

  const getTouchCenter = (touches: TouchPoint[]): TouchPoint => ({
    x: (touches[0].x + touches[1].x) / 2,
    y: (touches[0].y + touches[1].y) / 2,
  })

  const startGesture = (touchesInput: Array<{ locationX?: number; locationY?: number; pageX?: number; pageY?: number }>) => {
    const touches = touchesInput.map(getTouchPoint)
    if (touches.length >= 2) {
      const center = getTouchCenter(touches)
      const currentScale = baseScale * zoomRef.current
      gestureRef.current = {
        mode: 'pinch',
        startZoom: zoomRef.current,
        startDistance: Math.max(1, getTouchDistance(touches)),
        worldCenter: {
          x: (center.x - offsetRef.current.x) / currentScale,
          y: (center.y - offsetRef.current.y) / currentScale,
        },
      }
      return
    }

    if (touches.length === 1) {
      gestureRef.current = {
        mode: 'pan',
        startTouch: touches[0],
        startOffset: offsetRef.current,
      }
      return
    }

    gestureRef.current = { mode: 'idle' }
  }

  const handleGestureMove = (
    touchesInput: Array<{ locationX?: number; locationY?: number; pageX?: number; pageY?: number }>
  ) => {
    const touches = touchesInput.map(getTouchPoint)
    if (!touches.length) {
      gestureRef.current = { mode: 'idle' }
      return
    }

    if (touches.length >= 2) {
      if (gestureRef.current.mode !== 'pinch') {
        startGesture(touchesInput)
      }

      const pinchGesture = gestureRef.current.mode === 'pinch' ? gestureRef.current : null
      if (!pinchGesture) return

      const center = getTouchCenter(touches)
      const distance = Math.max(1, getTouchDistance(touches))
      const rawZoom = pinchGesture.startZoom * (distance / pinchGesture.startDistance)
      const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, rawZoom))
      const nextScale = baseScale * nextZoom
      const nextOffset = clampOffset(
        {
          x: center.x - pinchGesture.worldCenter.x * nextScale,
          y: center.y - pinchGesture.worldCenter.y * nextScale,
        },
        nextZoom
      )

      setZoom(nextZoom)
      zoomRef.current = nextZoom
      setOffset(nextOffset)
      offsetRef.current = nextOffset
      return
    }

    if (gestureRef.current.mode !== 'pan') {
      startGesture(touchesInput)
    }

    const panGesture = gestureRef.current.mode === 'pan' ? gestureRef.current : null
    if (!panGesture) return

    const nextOffset = clampOffset(
      {
        x: panGesture.startOffset.x + (touches[0].x - panGesture.startTouch.x),
        y: panGesture.startOffset.y + (touches[0].y - panGesture.startTouch.y),
      },
      zoomRef.current
    )
    setOffset(nextOffset)
    offsetRef.current = nextOffset
  }

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onStartShouldSetPanResponderCapture: (event) =>
          ((event.nativeEvent.touches as Array<unknown> | undefined)?.length ?? 0) > 1,
        onMoveShouldSetPanResponder: (_, gesture) =>
          (gesture.numberActiveTouches ?? 0) > 1 || Math.abs(gesture.dx) + Math.abs(gesture.dy) > 2,
        onMoveShouldSetPanResponderCapture: (_, gesture) =>
          (gesture.numberActiveTouches ?? 0) > 1 || Math.abs(gesture.dx) + Math.abs(gesture.dy) > 2,
        onPanResponderGrant: (event) => {
          startGesture((event.nativeEvent.touches as Array<{ locationX?: number; locationY?: number }>) ?? [])
        },
        onPanResponderMove: (event) => {
          handleGestureMove(
            (event.nativeEvent.touches as Array<{ locationX?: number; locationY?: number }>) ?? []
          )
        },
        onPanResponderRelease: () => {
          gestureRef.current = { mode: 'idle' }
        },
        onPanResponderTerminate: () => {
          gestureRef.current = { mode: 'idle' }
        },
        onPanResponderTerminationRequest: () => false,
      }),
    [baseScale, viewport.height, viewport.width]
  )

  const webGestureProps =
    Platform.OS === 'web'
      ? ({
          onWheel: (event: any) => {
            if (!viewport.width || !viewport.height) return
            event.preventDefault?.()

            const nativeEvent = event.nativeEvent ?? event
            const deltaY = nativeEvent.deltaY ?? 0
            const locationX = nativeEvent.locationX ?? nativeEvent.offsetX ?? viewport.width / 2
            const locationY = nativeEvent.locationY ?? nativeEvent.offsetY ?? viewport.height / 2
            const direction = deltaY < 0 ? 1 : -1

            updateZoom(direction * (ZOOM_STEP / 1.6), { x: locationX, y: locationY })
          },
        } as any)
      : {}

  return (
    <View style={styles.root}>
      <View
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout
          setViewport({ width, height })
        }}
        {...webGestureProps}
        {...panResponder.panHandlers}
        style={[
          styles.viewport,
          Platform.OS === 'web' ? ({ touchAction: 'none' } as any) : null,
        ]}
      >
        <View
          style={[
            styles.mapSurface,
            {
              width: renderedWidth,
              height: renderedHeight,
              transform: [{ translateX: offset.x }, { translateY: offset.y }],
            },
          ]}
        >
          <Svg width={renderedWidth} height={renderedHeight} viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}>
            <Rect x="0" y="0" width={MAP_WIDTH} height={MAP_HEIGHT} fill={palette.mapBase} />

            <Rect x="52" y="120" width="250" height="270" rx="22" fill={palette.mapBlock} />
            <Rect x="380" y="92" width="320" height="330" rx="22" fill={palette.mapBlock} />
            <Rect x="790" y="130" width="280" height="270" rx="22" fill={palette.mapBlock} />
            <Rect x="88" y="520" width="280" height="260" rx="22" fill={palette.mapBlock} />
            <Rect x="720" y="580" width="320" height="270" rx="22" fill={palette.mapBlock} />
            <Rect x="130" y="960" width="320" height="280" rx="22" fill={palette.mapBlock} />
            <Rect x="720" y="1010" width="290" height="250" rx="22" fill={palette.mapBlock} />
            <Rect x="820" y="1340" width="250" height="180" rx="22" fill={palette.mapBlock} />

            <Rect x="-60" y="420" width="1320" height="132" rx="44" fill={palette.mapRoad} />
            <Rect x="-20" y="860" width="1240" height="128" rx="44" fill={palette.mapRoad} />
            <Path
              d="M420 -60 H540 V1740 H420 Z"
              fill={palette.mapRoad}
              transform="rotate(6 480 840)"
            />
            <Path
              d="M890 -60 H1010 V1740 H890 Z"
              fill={palette.mapRoad}
              transform="rotate(-7 950 840)"
            />
          </Svg>

          {filteredMarkers.map((marker) => {
            const color = palette.marker[marker.kind]
            const isSelected = activeMarkerId === marker.id
            const left = (marker.x / DATA_WIDTH) * renderedWidth - 28
            const top = (marker.y / DATA_HEIGHT) * renderedHeight - 56

            const Icon =
              marker.kind === 'palcos'
                ? MicrophoneStage
                : marker.kind === 'comercios'
                  ? Storefront
                  : MonitorPlay

            return (
              <Pressable
                key={marker.id}
                onPress={() => onSelectMarker(marker)}
                accessibilityRole="button"
                accessibilityLabel={marker.title}
                style={[
                  styles.markerWrap,
                  {
                    left,
                    top,
                  },
                ]}
              >
                <View style={styles.markerShell}>
                  {isSelected ? (
                    <View
                      style={[styles.markerHalo, { backgroundColor: palette.markerSelectedRing }]}
                    />
                  ) : null}
                  <View style={[styles.markerBubble, { backgroundColor: color }]}>
                    <Icon size={17} color={palette.markerIcon} weight="bold" />
                  </View>
                  <View style={[styles.markerTail, { backgroundColor: color }]} />
                </View>
              </Pressable>
            )
          })}
        </View>

        <View style={styles.zoomControls}>
          <Pressable
            onPress={() => updateZoom(ZOOM_STEP)}
            accessibilityRole="button"
            accessibilityLabel="Aumentar zoom"
            style={[styles.zoomButton, { backgroundColor: palette.zoomBg, borderColor: palette.zoomBorder }]}
          >
            <Plus size={16} color={palette.title} weight="bold" />
          </Pressable>
          <Pressable
            onPress={() => updateZoom(-ZOOM_STEP)}
            accessibilityRole="button"
            accessibilityLabel="Diminuir zoom"
            style={[styles.zoomButton, { backgroundColor: palette.zoomBg, borderColor: palette.zoomBorder }]}
          >
            <Minus size={16} color={palette.title} weight="bold" />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  viewport: {
    flex: 1,
    overflow: 'hidden',
  },
  mapSurface: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  markerWrap: {
    position: 'absolute',
    width: 56,
    height: 66,
    alignItems: 'center',
  },
  markerShell: {
    width: 56,
    height: 66,
    alignItems: 'center',
    position: 'relative',
  },
  markerHalo: {
    position: 'absolute',
    top: -4,
    left: 3,
    width: 50,
    height: 50,
    borderRadius: radius.full,
    opacity: 0.98,
  },
  markerBubble: {
    width: MARKER_BUBBLE_SIZE,
    height: MARKER_BUBBLE_SIZE,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.16,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  markerTail: {
    position: 'absolute',
    top: 29,
    left: 21,
    width: 14,
    height: 14,
    transform: [{ rotate: '45deg' }],
    borderBottomRightRadius: 4,
  },
  zoomControls: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    gap: 10,
  },
  zoomButton: {
    width: 42,
    height: 42,
    borderRadius: radius.full,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
