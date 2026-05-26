import { Button, type ButtonProps } from 'tamagui'

type ButtonIntent = 'primary' | 'secondary' | 'ghost'

type AppButtonProps = Omit<ButtonProps, 'variant'> & {
  intent?: ButtonIntent
}

export function AppButton({ intent = 'primary', ...props }: AppButtonProps) {
  if (intent === 'secondary') {
    return (
      <Button
        size="$4"
        bg="$accent"
        hoverStyle={{ bg: '$accentHover' }}
        {...props}
      />
    )
  }

  if (intent === 'ghost') {
    return (
      <Button
        size="$4"
        chromeless
        borderWidth={1}
        borderColor="$brand"
        {...props}
      />
    )
  }

  return (
    <Button
      size="$4"
      bg="$brand"
      hoverStyle={{ bg: '$brandHover' }}
      pressStyle={{ bg: '$brandPress' }}
      {...props}
    />
  )
}
