import { Button, Heading, Section, Text } from '@react-email/components'
import { EmailLayout, NotificationFooter } from './email-layout'
import { typography, button, colors } from './shared-styles'

interface FeedbackLinkedEmailProps {
  recipientName?: string
  postTitle: string
  postUrl: string
  workspaceName: string
  unsubscribeUrl: string
  preferencesUrl?: string
  attributedByName?: string
  logoUrl?: string
}

export function FeedbackLinkedEmail({
  recipientName,
  postTitle,
  postUrl,
  workspaceName,
  unsubscribeUrl,
  preferencesUrl,
  attributedByName,
  logoUrl,
}: FeedbackLinkedEmailProps) {
  const greeting = recipientName ? `Agradecemos, ${recipientName}!` : 'Agradecemos!'
  const attribution = attributedByName
    ? ` ${attributedByName}, da equipe de ${workspaceName}, vinculou seu feedback a um post.`
    : ` Seu feedback foi vinculado a um post em ${workspaceName}.`

  return (
    <EmailLayout
      preview={`Seu feedback foi vinculado a "${postTitle}"`}
      logoUrl={logoUrl}
      logoAlt={workspaceName}
    >
      {/* Content */}
      <Heading style={typography.h1}>Seu feedback está sendo acompanhado!</Heading>
      <Text style={typography.text}>
        {greeting}
        {attribution} Você vai receber atualizações quando o status mudar ou quando houver novos
        comentários.
      </Text>

      {/* Post Title */}
      <Section
        style={{
          backgroundColor: colors.surfaceMuted,
          borderRadius: '8px',
          padding: '16px 20px',
          marginBottom: '24px',
        }}
      >
        <Text style={{ ...typography.text, marginTop: '0', marginBottom: '0', fontWeight: '600' }}>
          {postTitle}
        </Text>
      </Section>

      {/* CTA Button */}
      <Section style={{ textAlign: 'center', marginTop: '32px', marginBottom: '32px' }}>
        <Button style={button.primary} href={postUrl}>
          Ver feedback
        </Button>
      </Section>

      {/* Footer */}
      <NotificationFooter
        reason="Você recebeu este e-mail porque seu feedback foi atribuído a este post."
        unsubscribeUrl={unsubscribeUrl}
        preferencesUrl={preferencesUrl}
      />
    </EmailLayout>
  )
}
