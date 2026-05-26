import { useMemo, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StandaloneBottomBar } from '@/components/navigation/StandaloneBottomBar'
import {
  PROGRAMACAO_DAYS,
  PROGRAMACAO_DEFAULT_DAY_ID,
  PROGRAMACAO_EVENTS,
  PROGRAMACAO_MONTH_TITLE,
} from '../data/mock'
import { useProgramacaoPalette } from '../hooks/useProgramacaoPalette'
import { ProgramacaoEventCard } from './ProgramacaoEventCard'
import { ProgramacaoTicker } from './ProgramacaoTicker'
import { fontFamily } from '@/theme/typography'
import { spacing } from '@/theme/tokens'

const TAB_BAR_HEIGHT = 56

export function ProgramacaoScreen() {
  const insets = useSafeAreaInsets()
  const palette = useProgramacaoPalette()
  const [activeDayId, setActiveDayId] = useState(PROGRAMACAO_DEFAULT_DAY_ID)

  const activeDay = PROGRAMACAO_DAYS.find((day) => day.id === activeDayId) ?? PROGRAMACAO_DAYS[0]

  const events = useMemo(
    () => PROGRAMACAO_EVENTS.filter((event) => event.dayId === activeDayId),
    [activeDayId]
  )

  return (
    <View style={[styles.root, { backgroundColor: palette.pageBg }]}>
      <View style={{ paddingTop: insets.top }}>
        <ProgramacaoTicker />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: TAB_BAR_HEIGHT + Math.max(insets.bottom, 8) + spacing.sectionGap,
        }}
      >
        <View style={styles.headerBlock}>
          <Text style={[styles.eyebrow, { color: palette.title }]}>PROGRAMAÇÃO</Text>
          <Text style={[styles.monthTitle, { color: palette.month }]}>{PROGRAMACAO_MONTH_TITLE}</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.daysRow}>
            {PROGRAMACAO_DAYS.map((day) => {
              const isActive = day.id === activeDayId
              return (
                <Pressable
                  key={day.id}
                  onPress={() => setActiveDayId(day.id)}
                  accessibilityRole="button"
                  accessibilityLabel={`Selecionar ${day.fullLabel}`}
                  style={[
                    styles.dayCard,
                    {
                      backgroundColor: isActive ? palette.dateChipActiveBg : palette.dateChipBg,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.dayWeek,
                      { color: isActive ? palette.dateChipActiveText : palette.dateChipText },
                    ]}
                  >
                    {day.weekdayShort}
                  </Text>
                  <Text
                    style={[
                      styles.dayNumber,
                      { color: isActive ? palette.dateChipActiveText : palette.dateChipText },
                    ]}
                  >
                    {day.dayNumber}
                  </Text>
                  <Text
                    style={[
                      styles.dayMonth,
                      { color: isActive ? palette.dateChipActiveText : palette.dateChipText },
                    ]}
                  >
                    {day.monthShort}
                  </Text>
                </Pressable>
              )
            })}
          </ScrollView>
        </View>

        <View style={[styles.sectionHeader, { backgroundColor: palette.sectionBg }]}>
          <Text style={[styles.sectionHeaderText, { color: palette.sectionText }]}>
            {activeDay.fullLabel}
          </Text>
        </View>

        <View style={styles.eventsColumn}>
          {events.length > 0 ? (
            events.map((event) => <ProgramacaoEventCard key={event.id} event={event} />)
          ) : (
            <View style={styles.emptyState}>
              <Text style={[styles.emptyTitle, { color: palette.title }]}>Nada programado aqui</Text>
              <Text style={[styles.emptyBody, { color: palette.body }]}>
                Troque a data ou a aba para ver mais eventos da programação.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <StandaloneBottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerBlock: {
    paddingHorizontal: spacing.screenX,
    paddingTop: 18,
    paddingBottom: 18,
    gap: 16,
  },
  eyebrow: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  monthTitle: {
    fontFamily: fontFamily.display,
    fontSize: 48,
    lineHeight: 52,
    letterSpacing: 0.5,
  },
  daysRow: {
    gap: 12,
    paddingRight: 12,
  },
  dayCard: {
    width: 68,
    height: 78,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  dayWeek: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  dayNumber: {
    fontFamily: fontFamily.display,
    fontSize: 34,
    lineHeight: 36,
  },
  dayMonth: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  sectionHeader: {
    paddingHorizontal: spacing.screenX,
    paddingVertical: 10,
  },
  sectionHeaderText: {
    fontFamily: fontFamily.mono,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.8,
  },
  eventsColumn: {
    gap: 18,
  },
  emptyState: {
    paddingHorizontal: spacing.screenX,
    paddingTop: 24,
    gap: 6,
  },
  emptyTitle: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
  },
  emptyBody: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
  },
})
