import { Heading, Section, Text } from '@react-email/components'
import { EmailLayout, TransactionalFooter } from './email-layout'
import { typography, utils } from './shared-styles'

interface VerifyAddressEmailProps {
  code: string
  workspaceName?: string
  logoUrl?: string
}

/**
 * Proves control of an address someone is adding to, or moving, their account.
 *
 * Deliberately NOT the sign-in template. That one is headed "Entrar no
 * Quackback", and showing it to someone who just asked to change their address
 * reads as a phishing attempt — the action they took and the mail they received
 * would not match. Same code presentation, different sentence.
 *
 * There is no link. The person is already in the app, on the page that asked
 * for the address, so a code they type back keeps them in that context and
 * gives a cross-device link no chance to be intercepted.
 */
export function VerifyAddressEmail({ code, workspaceName, logoUrl }: VerifyAddressEmailProps) {
  const where = workspaceName ? ` da ${workspaceName}` : ''
  return (
    <EmailLayout preview={`Seu código de verificação${where}`} logoUrl={logoUrl}>
      <Heading style={{ ...typography.h1, textAlign: 'center' }}>Confirme seu e-mail</Heading>
      <Text style={{ ...typography.text, textAlign: 'center' }}>
        Digite este código{where} para confirmar este endereço. Ele expira em 10 minutos.
      </Text>
      <Section style={utils.codeBox}>
        <Text style={utils.code}>{code}</Text>
      </Section>
      <Text style={{ ...typography.footer, textAlign: 'center' }}>
        Se você não pediu isso, ignore. Nada muda sem o código.
      </Text>
      <TransactionalFooter>
        Você está recebendo este e-mail porque alguém informou este endereço em uma conta. Ele não
        será usado até ser confirmado.
      </TransactionalFooter>
    </EmailLayout>
  )
}
