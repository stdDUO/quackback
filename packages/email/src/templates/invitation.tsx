import { Button, Heading, Link, Section, Text } from '@react-email/components'
import { EmailLayout, TransactionalFooter } from './email-layout'
import { typography, button, utils } from './shared-styles'

interface InvitationEmailProps {
  invitedByName: string
  inviteeName?: string
  organizationName: string
  inviteLink: string
  logoUrl?: string
}

export function InvitationEmail({
  invitedByName,
  inviteeName,
  organizationName,
  inviteLink,
  logoUrl,
}: InvitationEmailProps) {
  return (
    <EmailLayout
      preview={`Convite para entrar em ${organizationName} no Quackback`}
      logoUrl={logoUrl}
      logoAlt={organizationName}
    >
      {/* Content */}
      <Heading style={typography.h1}>
        {inviteeName ? `Olá, ${inviteeName}. Você recebeu um convite!` : 'Você recebeu um convite!'}
      </Heading>
      <Text style={typography.text}>
        <strong>{invitedByName}</strong> convidou você para entrar em{' '}
        <strong>{organizationName}</strong> no Quackback.
      </Text>

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
