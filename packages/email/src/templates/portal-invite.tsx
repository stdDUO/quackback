import { Button, Heading, Link, Section, Text } from '@react-email/components'
import { EmailLayout, TransactionalFooter } from './email-layout'
import { typography, button, utils } from './shared-styles'

interface PortalInviteEmailProps {
  workspaceName: string
  inviteLink: string
  logoUrl?: string
  personalMessage?: string
}

export function PortalInviteEmail({
  workspaceName,
  inviteLink,
  logoUrl,
  personalMessage,
}: PortalInviteEmailProps) {
  return (
    <EmailLayout
      preview={`Convite para acessar o portal de ${workspaceName}`}
      logoUrl={logoUrl}
      logoAlt={workspaceName}
    >
      {/* Content */}
      <Heading style={typography.h1}>Você recebeu um convite!</Heading>
      <Text style={typography.text}>
        Você recebeu um convite para acessar o portal de <strong>{workspaceName}</strong>. Clique
        abaixo para aceitar e entrar.
      </Text>

      {personalMessage && (
        <Section
          style={{
            backgroundColor: '#f6f8fa',
            borderLeft: '3px solid #d0d7de',
            padding: '12px 16px',
            marginTop: '24px',
            marginBottom: '8px',
            borderRadius: '4px',
          }}
        >
          <Text style={{ ...typography.textSmall, margin: 0, fontStyle: 'italic' }}>
            {personalMessage}
          </Text>
        </Section>
      )}

      {/* CTA Button */}
      <Section style={{ textAlign: 'center', marginTop: '32px', marginBottom: '32px' }}>
        <Button style={button.primary} href={inviteLink}>
          Aceitar convite
        </Button>
      </Section>

      {/* Fallback Link */}
      <Text style={typography.textSmall}>
        Ou copie e cole este link no navegador:{' '}
        <Link href={inviteLink} style={utils.link}>
          {inviteLink}
        </Link>
      </Text>

      {/* Footer */}
      <TransactionalFooter>
        Se você não esperava este convite, pode ignorar este e-mail.
      </TransactionalFooter>
    </EmailLayout>
  )
}
