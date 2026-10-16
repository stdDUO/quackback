import { Button, Heading, Hr, Section, Text } from '@react-email/components'
import { EmailLayout, TransactionalFooter } from './email-layout'
import { typography, button, utils } from './shared-styles'

interface MagicLinkEmailProps {
  signInUrl: string
  code: string
  logoUrl?: string
}

/**
 * Sign-in email containing both a one-click magic link and a 6-digit code.
 *
 * The link is the lower-friction path on desktop; the code is the
 * cross-device fallback (start on desktop, open email on phone — type
 * the code on the device that started the flow). Either consumes the
 * verification record on the server, so the user can pick whichever is
 * convenient.
 */
export function MagicLinkEmail({ signInUrl, code, logoUrl }: MagicLinkEmailProps) {
  return (
    <EmailLayout preview="Seu link de acesso" logoUrl={logoUrl}>
      <Heading style={{ ...typography.h1, textAlign: 'center' }}>Entrar no Quackback</Heading>
      <Text style={{ ...typography.text, textAlign: 'center' }}>
        Clique no botão abaixo para concluir o acesso.
      </Text>

      <Section style={{ textAlign: 'center', marginTop: '32px', marginBottom: '32px' }}>
        <Button style={button.primary} href={signInUrl}>
          Entrar
        </Button>
      </Section>

      <Hr style={{ margin: '32px 0', borderColor: '#e5e7eb' }} />

      <Text style={{ ...typography.text, textAlign: 'center' }}>
        Ou digite este código na tela de acesso:
      </Text>

      <Section style={utils.codeBox}>
        <Text style={utils.code}>{code}</Text>
      </Section>

      <Text style={{ ...typography.textSmall, textAlign: 'center' }}>
        O link e o código expiram em 10 minutos.
      </Text>

      <TransactionalFooter>Se você não pediu isso, pode ignorar este e-mail.</TransactionalFooter>
    </EmailLayout>
  )
}
