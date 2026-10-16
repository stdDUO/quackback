import { Button, Heading, Link, Section, Text } from '@react-email/components'
import { EmailLayout, TransactionalFooter } from './email-layout'
import { typography, button, utils } from './shared-styles'

interface PasswordResetEmailProps {
  resetLink: string
  logoUrl?: string
}

export function PasswordResetEmail({ resetLink, logoUrl }: PasswordResetEmailProps) {
  return (
    <EmailLayout preview="Redefina sua senha do Quackback" logoUrl={logoUrl}>
      {/* Content */}
      <Heading style={{ ...typography.h1, textAlign: 'center' }}>Redefina sua senha</Heading>
      <Text style={{ ...typography.text, textAlign: 'center' }}>
        Clique no botão abaixo para definir uma nova senha. Este link expira em 24 horas.
      </Text>

      {/* CTA Button */}
      <Section style={{ textAlign: 'center', marginTop: '32px', marginBottom: '32px' }}>
        <Button style={button.primary} href={resetLink}>
          Redefinir senha
        </Button>
      </Section>

      {/* Fallback Link */}
      <Text style={typography.textSmall}>
        Ou copie e cole este link no navegador:{' '}
        <Link href={resetLink} style={utils.link}>
          {resetLink}
        </Link>
      </Text>

      {/* Footer */}
      <TransactionalFooter>
        Se você não pediu a redefinição de senha, pode ignorar este e-mail.
      </TransactionalFooter>
    </EmailLayout>
  )
}
