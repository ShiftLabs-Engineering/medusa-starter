import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components'
import EmailLayout, { EmailLayoutProps } from './components/EmailLayout'

interface EftPaymentInstructionsEmailProps extends EmailLayoutProps {
  reference: string
  amount: number
  currency_code: string
  order?: {
    id?: string
    display_id?: string
    items?: Array<{
      title: string
      quantity: number
      unit_price: number
    }>
  }
  customer?: {
    first_name?: string
    last_name?: string
    email?: string
  }
  bankDetails?: {
    accountName: string
    accountNumber: string
    bankName: string
    branchCode: string
  } | null
}

const EftPaymentInstructionsEmail = ({
  reference,
  amount,
  currency_code,
  order,
  customer,
  bankDetails,
  ...layoutProps
}: EftPaymentInstructionsEmailProps) => {
  const customerName = customer?.first_name
    ? `${customer.first_name} ${customer.last_name || ''}`.trim()
    : customer?.email || 'Valued Customer'

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency_code.toUpperCase(),
  }).format(amount / 100) // Assuming amount is in cents

  return (
    <EmailLayout {...layoutProps}>
      <Html>
        <Head />
        <Preview>EFT Payment Instructions - Reference: {reference}</Preview>
        <Body style={main}>
          <Container style={container}>
            <Heading style={h1}>Payment Instructions</Heading>

            <Text style={text}>Dear {customerName},</Text>

            <Text style={text}>
              Thank you for your order! To complete your payment, please follow
              the instructions below:
            </Text>

            <Section style={paymentDetailsSection}>
              <Heading style={h2}>Payment Details</Heading>
              <Text style={detailText}>
                <strong>Payment Reference:</strong> {reference}
              </Text>
              <Text style={detailText}>
                <strong>Amount:</strong> {formattedAmount}
              </Text>
              {order?.display_id && (
                <Text style={detailText}>
                  <strong>Order Number:</strong> {order.display_id}
                </Text>
              )}
            </Section>

            <Hr style={hr} />

            {bankDetails && (
              <Section style={bankDetailsSection}>
                <Heading style={h2}>Bank Details</Heading>
                <Text style={detailText}>
                  <strong>Account Name:</strong> {bankDetails.accountName}
                </Text>
                <Text style={detailText}>
                  <strong>Account Number:</strong> {bankDetails.accountNumber}
                </Text>
                <Text style={detailText}>
                  <strong>Bank Name:</strong> {bankDetails.bankName}
                </Text>
                <Text style={detailText}>
                  <strong>Branch Code:</strong> {bankDetails.branchCode}
                </Text>
              </Section>
            )}

            <Hr style={hr} />

            <Section style={instructionsSection}>
              <Heading style={h2}>How to Pay</Heading>
              <Text style={text}>
                1. Log into your online banking or visit your bank branch
              </Text>
              <Text style={text}>
                2. Make an Electronic Funds Transfer (EFT) payment
                {bankDetails ? ' to the account details above' : ''}
              </Text>
              <Text style={text}>
                3. Use the payment reference: <strong>{reference}</strong>
              </Text>
              <Text style={text}>
                4. Transfer the exact amount: <strong>{formattedAmount}</strong>
              </Text>
              <Text style={text}>
                5. Your order will be processed once payment is received
              </Text>
            </Section>

            <Hr style={hr} />

            {order?.items && order.items.length > 0 && (
              <Section style={orderSection}>
                <Heading style={h2}>Order Summary</Heading>
                {order.items.map((item, index) => (
                  <Text key={index} style={itemText}>
                    {item.quantity}x {item.title} -{' '}
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: currency_code.toUpperCase(),
                    }).format((item.unit_price * item.quantity) / 100)}
                  </Text>
                ))}
              </Section>
            )}

            <Hr style={hr} />

            <Text style={text}>
              <strong>Important:</strong> Please ensure you include the payment
              reference
              <strong> {reference} </strong> when making your payment. This
              helps us identify and process your payment quickly.
            </Text>

            <Text style={text}>
              If you have any questions about your payment or order, please
              don't hesitate to contact us.
            </Text>

            <Text style={text}>Thank you for your business!</Text>
          </Container>
        </Body>
      </Html>
    </EmailLayout>
  )
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  borderRadius: '5px',
  boxShadow: '0 5px 10px rgba(20,50,70,.2)',
  marginTop: '20px',
  maxWidth: '600px',
  padding: '68px 0 130px',
}

const h1 = {
  color: '#333',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#333',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '20px 0 10px',
  padding: '0',
}

const text = {
  color: '#333',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '16px 0',
  padding: '0 40px',
}

const detailText = {
  ...text,
  margin: '8px 0',
}

const itemText = {
  ...text,
  margin: '4px 0',
}

const paymentDetailsSection = {
  backgroundColor: '#f8f9fa',
  border: '1px solid #e9ecef',
  borderRadius: '4px',
  margin: '20px 40px',
  padding: '20px',
}

const bankDetailsSection = {
  backgroundColor: '#fff3cd',
  border: '1px solid #ffeaa7',
  borderRadius: '4px',
  margin: '20px 40px',
  padding: '20px',
}

const instructionsSection = {
  margin: '20px 0',
}

const orderSection = {
  margin: '20px 0',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}

export default EftPaymentInstructionsEmail
