# Boulevard São João

Protótipo mobile (Android + iOS) com **Expo**, **TypeScript** e **Tamagui**.

## Stack

- [Expo SDK 55](https://docs.expo.dev/) + [Expo Router](https://docs.expo.dev/router/introduction/)
- [Tamagui](https://tamagui.dev/) — design system mobile-first com compiler
- Tokens de marca + temas **light / dark** (inclui modo sistema)
- New Architecture habilitada (iOS/Android)

## Estrutura

```
app/                    # Rotas (Expo Router)
src/
  components/ui/        # Screen, Card, AppButton, ThemeToggle
  constants/            # Nome do app, chaves de storage
  features/             # Módulos de produto (adicionar aqui)
  hooks/                # useThemePreference
  providers/            # ThemePreferenceProvider
  theme/                # tokens.ts + themes.ts
components/             # Provider global (Tamagui + Toast)
tamagui.config.ts       # Config Tamagui + temas Boulevard
```

## Começar

```bash
npm install
npm start
```

- **iOS:** `npm run ios` (simulador) ou Expo Go
- **Android:** `npm run android`
- **Web:** `npm run web`

Na primeira execução, use `npm start` (já limpa cache com `-c`).

## Tema

- Paleta inspirada no Boulevard: verde floresta (`brand`), areia (`accent`), fundo cream (light)
- Alternar tema: botão no canto da tela inicial (Sistema → Claro → Escuro)
- Preferência persistida em AsyncStorage

Tokens customizados em `src/theme/`. Use nos componentes Tamagui como `$brand`, `$surface`, `$muted`, etc.

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm start` | Dev server (cache limpo) |
| `npm run typecheck` | Verificação TypeScript |
| `npm run ios` / `android` | Build nativo local |

## Próximos passos sugeridos

1. `src/features/` — auth, lojas, mapa
2. API client (fetch + React Query ou similar)
3. Error boundary + analytics (Sentry)
4. EAS Build para stores
