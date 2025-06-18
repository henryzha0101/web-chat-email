// import Template from "@/components/email/template/verify-email/index";

import { Section, Text } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailReminder from "@/components/email/components/EmailReminder";
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

interface VerifyEmailProps {
  rid: string;
  userId: string;
}

export const VerifyEmail = ({
  rid,
  userId,
}: VerifyEmailProps) => {
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
        <EmailReminder />
      </Section>

      <EmailFooter userId={userId} />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  userId: "61912225442",
};

export const bePlaceHolder = {
  rid: "{{rid}}",
  userId: "{{userId}}",
};

export default function VerifyEmailPage({data}: {data: VerifyEmailProps}) {
  const props = data ?? beRender;
  return <VerifyEmail {...props} />;
}
