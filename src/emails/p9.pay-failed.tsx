import { Section, Text, Row, Img, Column, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
// import EmailReminder from "@/components/email/components/EmailReminder";
import { routes, staticAssetsPrefix, websiteName } from "@/lib/config";

const title = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 48,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  margin: "40px 0 0 0",
};

const titleStrong = {
  color: "#9333EA",
};

const tip = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 20,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "24px 0 20px 0",
};

const step1Wrapper = {
  margin: "0 0 22px 0",
};

const step2Wrapper = {
  margin: "0 0 32px 0",
};

const stepIconWrapper = {
  verticalAlign: "sub",
};
const stepIcon = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 20,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "0 0 0 0",
};

const stepTextWrapper = {
  padding: "0 0 0 20px",
};

const tipStep = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 20,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "0 0 0 0",
};

interface PayFailedProps {
  rid: string;
  userId: string;
  trackingUrl?: string;
}

export const PayFailed = ({ rid, userId, trackingUrl }: PayFailedProps) => {
  return (
    <EmailContainer
      title={`Looks like your payment has been rejected`}
      preview="Important: Your recent payment has been declined. Please take action."
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader />
      <Section>
        <Text style={title}>
          Unfortunately your <br />{" "}
          <strong style={titleStrong}>payment has been declined</strong>
        </Text>
        <Text style={tip}>
          Let’s start with these troubleshooting steps:
          {/* Please check your payment information and try again. */}
        </Text>
        <Section>
          <Row style={step1Wrapper}>
            <Column style={stepIconWrapper}>
              <Text style={stepIcon}>🏦</Text>
            </Column>
            <Column style={stepTextWrapper}>
              <Text style={tipStep}>
                Contact your bank to understand what happened and take action.
              </Text>
            </Column>
          </Row>
          <Row style={step2Wrapper}>
            <Column style={stepIconWrapper}>
              <Text style={stepIcon}>💳</Text>
            </Column>
            <Column style={stepTextWrapper}>
              <Text style={tipStep}>
                Provide an alternative payment method. This is often the best
                way to fix payment issues. Simply click below to update your
                payment and enjoy {websiteName}
              </Text>
            </Column>
          </Row>
        </Section>
        <EmailButton href={`${routes.support}`}>
          Change Billing Info
        </EmailButton>
      </Section>
      <EmailFooter userId={userId} />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  userId: "61912225442",
  trackingUrl: "https://example.com/track?id=test-tracking-id",
};

export const bePlaceHolder = {
  rid: "{{rid}}",
  userId: "{{userId}}",
  trackingUrl: "{{trackingUrl}}",
};

export default function PayFailedPage({ data }: { data: PayFailedProps }) {
  const props = data ?? beRender;
  return <PayFailed {...props} />;
}
