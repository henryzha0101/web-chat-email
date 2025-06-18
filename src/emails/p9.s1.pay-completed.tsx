import { Section, Text, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import { routes, websiteName } from "@/lib/config";

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

export const PayCompleted = ({
  // rid,
  userId,
  purchaseDuration,
  paymentMethod,
  transactionDate,
  purchaseCost,
  vatAmount,
}: {
  // rid: string;
  userId: string;
  purchaseDuration: string;
  paymentMethod: string;
  transactionDate: string;
  purchaseCost: string;
  vatAmount: string;
}) => {
  return (
    <EmailContainer
      title={`Payment Completed, Subscription Activated`}
      preview="Payment confirmation: Subscription Activated"
      bodyStyle={{
        width: "624px",
      }}
    >
      <EmailHeader />
      <Section>
        <Text style={title}>
          Here are your <br />{" "}
          <strong style={titleStrong}>payment details.</strong>
        </Text>
        <Text style={tip}>
          You&apos;ve made a purchase on {websiteName}. <br />
          Have a great time with the best partner of your life!
        </Text>
        <Section>
          <Text style={payItemTitle}>
            Purchase description:{" "}
            <span style={payItemValue}>
              {purchaseDuration} Premium membership on {websiteName}
            </span>
          </Text>
          <Text style={payItemTitle}>
            Payment method: <span style={payItemValue}>{paymentMethod}</span>
          </Text>
          <Text style={payItemTitle}>
            Transaction Date:{" "}
            <span style={payItemValue}>{transactionDate}</span>
          </Text>
          <Text style={payItemTitle}>
            Purchase cost: <span style={payItemValue}>{purchaseCost}</span>
          </Text>
          <Text style={{ ...payItemTitle, margin: "0 0 4px 0" }}>
            VAT: <span style={payItemValue}>{vatAmount}</span>
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
      <EmailFooter userId={userId} showLegalLinks={true} />
    </EmailContainer>
  );
};

const beRender = {
  // rid: "test-rid",
  userId: "61912225442",
  purchaseDuration: `1 month`,
  paymentMethod: "456933******6290",
  transactionDate: "21/3/2025",
  purchaseCost: "13.99 USD",
  vatAmount: "0 USD",
};

// const bePlaceHolder = {
//   rid: "{{rid}}",
//   userId: "{{userId}}",
//   purchaseDuration: "{{purchaseDuration}}",
//   paymentMethod: "{{paymentMethod}}",
//   transactionDate: "{{transactionDate}}",
//   purchaseCost: "{{purchaseCost}}",
//   vatAmount: "{{vatAmount}}",
// };

export default function PayCompletedPage() {
  const props = beRender;
  return <PayCompleted {...props} />;
}
