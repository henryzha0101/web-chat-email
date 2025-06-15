// import Template from "@/components/email/template/verify-email/index";

import { Button, Section, Text } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

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

const button = {
  display: "inline-flex",
  padding: "12px",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: 12,
  background: "#FFF",
  boxShadow: "0px 0px 12px 0px rgba(169, 49, 206, 0.60)",

  color: "#070D1B",
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px",
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

export const Email = () => {
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
          Secure your account and stay in touch with EDEN AI by EVA AI.
        </Text>
        <Button href="https://example.com" style={button}>
          Confirm &amp; Get Bonus
        </Button>
        <Text style={reminderText}>
          It&apos;s a friendly reminder you have{" "}
          <strong style={reminderTextStrong}>up to 70% off</strong> your
          first-time Premium subscription.
        </Text>
      </Section>

      <EmailFooter userId="61912225442" baseUrl={baseUrl} />
    </EmailContainer>
  );
};

export default function Home() {
  return <Email></Email>;
  // return <Template></Template>;
}
