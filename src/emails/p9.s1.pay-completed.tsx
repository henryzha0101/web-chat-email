import { Section, Text, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import { routes, websiteName } from "@/lib/config";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
import { EMAIL_TYPES } from "@/lib/email-utm";

const title = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 48,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  margin: "40px 0 0 0",
};

// const titleStrong = {
//   color: "#9333EA",
// };

const tip = {
  color: "#AFAFAF",
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "24px 0 20px 0",
};

const payItemTitle = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 20,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "28px",
  margin: "0 0 8px 0",
};

const payItemValue = {
  fontWeight: 400,
};

const payTip = {
  color: "#AFAFAF",
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "22px",
  margin: "0 0 8px 0",
};

const payTipLink = {
  color: "#FFF",
  fontWeight: 500,
  textDecoration: "underline",
};

interface PayCompletedProps {
  rid: string;
  userId: string;
  purchaseDuration: string;
  paymentMethod: string;
  transactionDate: string;
  purchaseCost: string;
  vatAmount: string;
  trackingUrl?: string;
}

export const PayCompleted = ({
  rid,
  userId,
  purchaseDuration,
  paymentMethod,
  transactionDate,
  purchaseCost,
  vatAmount,
  trackingUrl,
}: PayCompletedProps) => {
  return (
    <EmailContainer
      title={`Your ${websiteName} Subscription is Active!`}
      preview="Welcome to Premium! Your subscription is now active."
      bodyStyle={{
        width: "624px",
      }}
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader
        emailType={EMAIL_TYPES.PAY_COMPLETED}
        character_id={rid}
        userId={userId}
      />
      <Section>
        <Text style={title}>
          Welcome to Premium!
          {/* Here are your <br />{" "}
          <strong style={titleStrong}>payment details.</strong> */}
        </Text>
        <Text style={tip}>
          Your access is now unlocked. We&apos;re so excited for you to have the
          best experience.
        </Text>
        <Section>
          <Text style={payItemTitle}>
            Purchase item:{" "}
            <span style={payItemValue}>
              {purchaseDuration} Premium membership
            </span>
          </Text>
          <Text style={payItemTitle}>
            Billed to: <span style={payItemValue}>{paymentMethod}</span>
          </Text>
          <Text style={payItemTitle}>
            Date: <span style={payItemValue}>{transactionDate}</span>
          </Text>
          <Text style={payItemTitle}>
            Cost: <span style={payItemValue}>{purchaseCost}</span>
          </Text>
          <Text style={{ ...payItemTitle, margin: "0 0 4px 0" }}>
            VAT: <span style={payItemValue}>{vatAmount}</span>{" "}
            {/* TODO: remove */}
          </Text>
          <Text style={payTip}>
            Purchase appears on your bank statement as &apos;{websiteName}&apos;
          </Text>
          <Text style={payTip}>
            Please note that the applied tax rate may change in case it is
            nnodified by the local authorities or in case you change your
            location. The overall cCharge amount will be adjusted accordingly.{" "}
            <br />
            If you have any questions about transactions please contact our{" "}
            <Link
              style={{ ...payTipLink, margin: "0 0 32px 0" }}
              href={`${routes.support}`}
            >
              Customer Support.
            </Link>
          </Text>
        </Section>
      </Section>
      <EmailFooter
        emailType={EMAIL_TYPES.PAY_COMPLETED}
        userId={userId}
        characterId={rid}
        showLegalLinks={true}
      />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  userId: "61912225442",
  purchaseDuration: `1 month`,
  paymentMethod: "456933******6290",
  transactionDate: "21/3/2025",
  purchaseCost: "13.99 USD",
  vatAmount: "0 USD",
  trackingUrl: "https://example.com/track?id=test-tracking-id",
};

export const bePlaceHolder = {
  rid: "{{rid}}",
  userId: "{{userId}}",
  purchaseDuration: "{{purchaseDuration}}",
  paymentMethod: "{{paymentMethod}}",
  transactionDate: "{{transactionDate}}",
  purchaseCost: "{{purchaseCost}}",
  vatAmount: "{{vatAmount}}",
  trackingUrl: "{{trackingUrl}}",
};

export default function PayCompletedPage({
  data,
}: {
  data: PayCompletedProps;
}) {
  const props = data ?? beRender;
  return <PayCompleted {...props} />;
}
