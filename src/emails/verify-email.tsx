// import Template from "@/components/email/template/verify-email/index";

import { Section, Text } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import { websiteName, routes } from "@/lib/config";

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

const reminderText = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 18,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "32px 0 0",
};

const reminderTextStrong = {
  position: "relative" as const,
  top: "3px",
  color: "#9333EA",
  fontWeight: 600,
};

export const VerifyEmail = ({
  rid,
  userId,
}: {
  rid: string;
  userId: string;
}) => {
  return (
    <EmailContainer
      title="Welcome! Please confirm your email."
      preview="Please confirm your email address to claim your welcome bonus"
    >
      <EmailHeader />
      <Section>
        <Text style={confirmText}>Confirm your address</Text>
        <Text style={neuronsText}>and get 10 neurons!</Text>
        <Text style={secureText}>
          Secure your account and stay in touch with {websiteName}
        </Text>
        <EmailButton href={`${routes.emailConfirmation}?rid=${rid}`}>
          Confirm &amp; Get Bonus
        </EmailButton>
        <Text style={reminderText}>
          It&apos;s a friendly reminder you have{" "}
          <strong style={reminderTextStrong}>up to 70% off</strong> your
          first-time Premium subscription.
        </Text>
      </Section>

      <EmailFooter userId={userId} />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  userId: "61912225442",
};

const bePlaceHolder = {
  rid: "{{rid}}",
  userId: "{{userId}}",
};

export default function VerifyEmailPage() {
  const props = beRender;
  return <VerifyEmail {...props} />;
}
