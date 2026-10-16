import { Heading, Text } from '@react-email/components'
import { EmailLayout, TransactionalFooter } from './email-layout'
import { typography } from './shared-styles'

interface SignupNotAllowedEmailProps {
  workspaceName?: string
  logoUrl?: string
}

/**
 * Why no sign-in link arrived.
 *
 * The workspace refuses to open an account for this address, and the HTTP
 * response deliberately does not say so: an endpoint that answered differently
 * per address would tell any unauthenticated caller which addresses hold
 * accounts here. The inbox is the one channel that reaches only the person the
 * answer is about, so the refusal is delivered here instead.
 *
 * Carries no link and no code. There is nothing to grant, which is the point:
 * a message with no capability in it can be mailed to an address nobody has
 * proven they own.
 */
export function SignupNotAllowedEmail({ workspaceName, logoUrl }: SignupNotAllowedEmailProps) {
  const where = workspaceName ? `${workspaceName}` : 'este workspace'
  return (
    <EmailLayout preview="Sobre seu pedido de acesso" logoUrl={logoUrl} showPoweredBy={false}>
      <Heading style={{ ...typography.h1, textAlign: 'center' }}>
        Não há conta para este endereço
      </Heading>
      <Text style={{ ...typography.text, textAlign: 'center' }}>
        Alguém pediu um link de acesso para este endereço de e-mail em {where}.
      </Text>
      <Text style={{ ...typography.text, textAlign: 'center' }}>
        Não existe uma conta aqui para este endereço, e {where} não está aceitando novas contas.
        Peça a um administrador para convidar você e depois entre com o endereço do convite.
      </Text>

      <TransactionalFooter>
        Se você não pediu isso, pode ignorar este e-mail. Nenhuma conta foi criada e nada foi
        alterado.
      </TransactionalFooter>
    </EmailLayout>
  )
}
