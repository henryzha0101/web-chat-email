// import Template from "@/components/email/template/verify-email/index";

import { Section, Text } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
// import EmailReminder from "@/components/email/components/EmailReminder";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
import { createVerifyEmailLink, EMAIL_TYPES } from "@/lib/email-utm";

const confirmText = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 48,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  margin: "40px 0 0",
};

const neuronsText = {
  color: "#9333EA",
  fontFamily: "Roboto",
  fontSize: 48,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "48px",
  margin: "0 0 24px",
};

const secureText = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 20,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "0 0 32px",
};

interface VerifyEmailProps {
  rid: string;
  userId: string;
  trackingUrl?: string;
}

export const VerifyEmail = ({ rid, userId, trackingUrl }: VerifyEmailProps) => {
  return (
    <EmailContainer
      title="One last step to get your bonus..."
      preview="Activate your account and get your bonus neurons."
      bodyStyle={{
        width: "658px",
      }}
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader
        emailType={EMAIL_TYPES.VERIFY}
        character_id={rid}
        userId={userId}
      />
      <Section>
        <Text style={confirmText}>Activate Your Account</Text>
        <Text style={neuronsText}>and claim your welcome bonus! </Text>
        <Text style={secureText}>
          Click the button to confirm your email, secure your account, and start
          chatting with your free 10 neurons.
        </Text>
        <EmailButton href={createVerifyEmailLink(rid, userId)}>
          Activate &amp; Claim Bonus
        </EmailButton>
        {/* <EmailReminder /> */}
      </Section>

      <EmailFooter
        emailType={EMAIL_TYPES.VERIFY}
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

export default function VerifyEmailPage({ data }: { data: VerifyEmailProps }) {
  const props = data ?? beRender;
  return <VerifyEmail {...props} />;
}
