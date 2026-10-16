import { Heading, Section, Text } from '@react-email/components'
import { EmailLayout, TransactionalFooter } from './email-layout'
import { typography } from './shared-styles'

interface RecoveryCodeUsedEmailProps {
  workspaceName?: string
  ipAddress?: string | null
  userAgent?: string | null
  occurredAt: string
  logoUrl?: string
}

/**
 * Security alert sent after a recovery code is consumed. Mirrors the
 * "new sign-in from unrecognised device" pattern most platforms send
 * — the recipient is the one whose code was used, so the email is
 * their canary against unauthorised access.
 */
export function RecoveryCodeUsedEmail({
  workspaceName,
  ipAddress,
  userAgent,
  occurredAt,
  logoUrl,
}: RecoveryCodeUsedEmailProps) {
  const enteredWhere = workspaceName ? ` no workspace ${workspaceName}` : ''
  const accountWhere = workspaceName ? ` do workspace ${workspaceName}` : ''
  return (
    <EmailLayout
      preview={`Um código de recuperação foi usado para entrar${enteredWhere}`}
      logoUrl={logoUrl}
    >
      <Heading style={{ ...typography.h1, textAlign: 'center' }}>
        Um código de recuperação foi usado
      </Heading>
      <Text style={{ ...typography.text, textAlign: 'center' }}>
        Alguém entrou na sua conta{accountWhere} usando um dos seus códigos de recuperação salvos.
      </Text>

      <Section style={{ marginTop: '24px', marginBottom: '24px' }}>
        <Text style={typography.textSmall}>
          <strong>Quando:</strong> {occurredAt}
        </Text>
        {ipAddress ? (
          <Text style={typography.textSmall}>
            <strong>Endereço IP:</strong> {ipAddress}
          </Text>
        ) : null}
        {userAgent ? (
          <Text style={typography.textSmall}>
            <strong>Dispositivo:</strong> {userAgent}
          </Text>
        ) : null}
      </Section>

      <Text style={typography.text}>
        Se foi você, não precisa fazer nada. O código já foi usado e não pode ser reutilizado.
      </Text>
      <Text style={typography.text}>
        Se não foi você, entre e troque seus códigos de recuperação agora. Quem usou o código tem
        uma sessão ativa. Encerre essa sessão nas configurações de segurança.
      </Text>

      <TransactionalFooter>
        Você está recebendo este e-mail porque um código de recuperação da sua conta acabou de ser
        usado. Estes alertas são obrigatórios e não podem ser desativados.
      </TransactionalFooter>
    </EmailLayout>
  )
}
