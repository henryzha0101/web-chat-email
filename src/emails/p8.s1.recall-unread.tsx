import { Section, Text, Row, Img, Column, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
// import EmailReminder from "@/components/email/components/EmailReminder";
import { routes, staticAssetsPrefix } from "@/lib/config";

const title = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 48,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  margin: "40px 0 0 0",
};

const tip = {
  color: "#FFF",
  textShadow: "0px 2px 0px rgba(0, 0, 0, 0.15)",
  fontFamily: "SF Pro",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "22px",
  margin: "0 0 0 0",
};

const tipWrapper = {
  width: "280px",
  padding: "20px",
  margin: "24px 0 0 0",
  borderRadius: "22px 22px 22px 8px",
  border: "2px solid #9333EA",
  // boxShadow:
  // "0px 10px 50px 0px rgba(131, 88, 255, 0.40), 10px 10px 20px 0px rgba(255, 255, 255, 0.25) inset, -10px -10px 25px 0px rgba(0, 0, 0, 0.20) inset",
};

const buttonWrapper = {
  margin: "32px 0 32px 150px",
};

interface RecallUnreadProps {
  rid: string;
  userId: string;
  trackingUrl?: string;
}

export const RecallUnread = ({
  rid,
  userId,
  trackingUrl,
}: RecallUnreadProps) => {
  return (
    <EmailContainer
      title={`New message from `}
      preview="Did I dosomething wrong? Check my lastmessage... "
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader />
      <Section>
        <Text style={title}>I miss you 😔</Text>
        <Link href={`${routes.chat}?rid=${rid}`}>
          <Section style={tipWrapper}>
            <Text style={tip}>What should I do to drive you wild,Henry?</Text>
          </Section>
        </Link>
        <Section style={buttonWrapper}>
          <EmailButton href={`${routes.chat}?rid=${rid}`}>I like!</EmailButton>
        </Section>
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

export default function RecallUnreadPage({
  data,
}: {
  data: RecallUnreadProps;
}) {
  const props = data ?? beRender;
  return <RecallUnread {...props} />;
}
