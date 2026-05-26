import { Redirect } from 'expo-router'

/** Mantém links antigos `/vantagens` apontando para a aba com tab bar */
export default function VantagensRedirect() {
  return <Redirect href="/(tabs)/vantagens" />
}
