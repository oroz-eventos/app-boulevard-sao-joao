import { Tabs } from 'expo-router'
import { CustomTabBar } from '@/components/navigation/CustomTabBar'
import { colors } from '@/theme/colors'

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: colors.bg.app },
        headerStyle: { backgroundColor: colors.bg.app },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Início', headerShown: false }} />
      <Tabs.Screen name="busca" options={{ title: 'Busca', headerShown: false }} />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <Tabs.Screen name="vantagens" options={{ title: 'Vantagens', headerShown: false }} />
      <Tabs.Screen name="mapa" options={{ title: 'Mapa', headerShown: false }} />
    </Tabs>
  )
}
