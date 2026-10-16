import { Heading, Hr, Link, Section, Text } from '@react-email/components'
import { EmailLayout, TransactionalFooter } from './email-layout'
import { typography, utils } from './shared-styles'

interface NewSignInEmailProps {
  workspaceName?: string
  occurredAt: string
  ipAddress?: string | null
  userAgent?: string | null
  location?: string | null
  settingsUrl?: string | null
  /** When true, skip the password CTA — the profile page hides PasswordForm. */
  ssoEnforced?: boolean
  logoUrl?: string
}

/**
 * "New device" sign-in notification — sent when an additional signed
 * device cookie is seen for the recipient's account. Browser/OS, IP
 * and location are shown as context; they are not the device identity.
 * The user is already signed in by the time this lands; the alert is
 * purely informational with a recovery path if it wasn't them.
 */
export function NewSignInEmail({
  workspaceName,
  occurredAt,
  ipAddress,
  userAgent,
  location,
  settingsUrl,
  ssoEnforced,
  logoUrl,
}: NewSignInEmailProps) {
  return (
    <EmailLayout preview="Detectamos um novo acesso na sua conta" logoUrl={logoUrl}>
      <Heading style={typography.h1}>Novo acesso à sua conta</Heading>
      <Text style={typography.text}>
        {workspaceName
          ? `Alguém acabou de entrar na sua conta de ${workspaceName} em um dispositivo que ainda não tínhamos visto.`
          : 'Alguém acabou de entrar na sua conta em um dispositivo que ainda não tínhamos visto.'}
      </Text>

      <Section style={utils.codeBox}>
        <Text style={typography.text}>
          <strong>Quando:</strong> {occurredAt}
        </Text>
        {ipAddress ? (
          <Text style={typography.text}>
            <strong>IP:</strong> {ipAddress}
          </Text>
        ) : null}
        {location ? (
          <Text style={typography.text}>
            <strong>Local:</strong> {location}
          </Text>
        ) : null}
        {userAgent ? (
          <Text style={typography.text}>
            <strong>Dispositivo:</strong> {userAgent}
          </Text>
        ) : null}
      </Section>

      <Hr style={{ margin: '24px 0', borderColor: '#e5e7eb' }} />

      <Text style={typography.text}>
        {ssoEnforced ? (
          'Se foi você, não precisa fazer nada. Se não foi, altere sua senha no provedor de identidade e peça a um administrador do workspace para encerrar as outras sessões.'
        ) : (
          <>
            Se foi você, não precisa fazer nada. Se não foi,{' '}
            {settingsUrl ? (
              <>
                <Link href={settingsUrl} style={utils.link}>
                  defina ou altere sua senha
                </Link>{' '}
                nas configurações do perfil. Isso encerra as outras sessões.
              </>
            ) : (
              'defina ou altere sua senha nas configurações do perfil. Isso encerra as outras sessões.'
            )}
          </>
        )}
      </Text>

      <TransactionalFooter>
        Você está recebendo este e-mail porque detectamos um novo acesso na sua conta. Estes alertas
        são obrigatórios e não podem ser desativados.
      </TransactionalFooter>
    </EmailLayout>
  )
}
