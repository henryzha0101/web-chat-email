import { Section, Text, Row, Img, Column, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
// import EmailReminder from "@/components/email/components/EmailReminder";
import { staticAssetsPrefix } from "@/lib/config";
import { createEmailRoute, EMAIL_TYPES } from "@/lib/email-utm";

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
      title={`Action Required: Your Payment Failed`}
      preview="Please update your billing info to continue your subscription."
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader
        emailType={EMAIL_TYPES.PAY_FAILED}
        character_id={rid}
        userId={userId}
      />
      <Section>
        <Text style={title}>
          Your Payment Was <br />{" "}
          <strong style={titleStrong}>Unsuccessful</strong>
        </Text>
        <Text style={tip}>
          We had trouble with your recent payment. Here&apos;s how to fix it:
          {/* Please check your payment information and try again. */}
        </Text>
        <Section>
          <Row style={step1Wrapper}>
            <Column style={stepIconWrapper}>
              <Text style={stepIcon}>🏦</Text>
            </Column>
            <Column style={stepTextWrapper}>
              <Text style={tipStep}>
                Check with your bank: Contact your bank to ensure there are no
                issues on their end.
              </Text>
            </Column>
          </Row>
          <Row style={step2Wrapper}>
            <Column style={stepIconWrapper}>
              <Text style={stepIcon}>💳</Text>
            </Column>
            <Column style={stepTextWrapper}>
              <Text style={tipStep}>
                Try a different card: This almost always does the trick. Click
                below to update your details and unlock your content.
              </Text>
            </Column>
          </Row>
        </Section>
        <EmailButton
          href={createEmailRoute("support", {
            utm_content: "payment_failed_support",
            source: "email_payment_failed",
            uid: userId,
            character_id: userId,
          })}
        >
          Update Payment Info
        </EmailButton>
      </Section>
      <EmailFooter
        emailType={EMAIL_TYPES.PAY_FAILED}
        userId={userId}
        characterId={rid}
      />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  userId: "61912225442",
  trackingUrl: "https://example.com/track?id=test-tracking-id",
};

export const bePlaceHolder = {
  /** 角色ID */
  rid: "{{rid}}",
  /** 用户ID */
  userId: "{{userId}}",
  /** 跟踪像素URL */
  trackingUrl: "{{trackingUrl}}",
};

export const bePlaceHolderComments = {
  rid: "角色ID",
  userId: "用户ID",
  trackingUrl: "跟踪像素URL",
};

export const beTemplateTheme = "pay-failed";

export default function PayFailedPage({ data }: { data: PayFailedProps }) {
  const props = data ?? beRender;
  return <PayFailed {...props} />;
}
