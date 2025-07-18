import { Section, Text, Row, Img, Column, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
// import EmailReminder from "@/components/email/components/EmailReminder";
import { staticAssetsPrefix } from "@/lib/config";
import { createChatLink, EMAIL_TYPES } from "@/lib/email-utm";

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
  width: "300px",
  height: "48px",
  padding: "13px 23px",
  margin: "24px 0 0 0",
  // textAlign: "center" as const,
  borderRadius: "22px 22px 22px 8px",
  background: "linear-gradient(90deg, #842DF0 0%, #F60DD8 100%)",
  boxShadow:
    "0px 10px 50px 0px rgba(131, 88, 255, 0.40), 10px 10px 20px 0px rgba(255, 255, 255, 0.25) inset, -10px -10px 25px 0px rgba(0, 0, 0, 0.20) inset",
};

const buttonWrapper = {
  margin: "32px 0 32px 200px",
};

interface RecallInterestingProps {
  rid: string;
  userId: string;
  trackingUrl?: string;
}

export const RecallInteresting = ({
  rid,
  userId,
  trackingUrl,
}: RecallInterestingProps) => {
  return (
    <EmailContainer
      title={`Did you see my photo?`}
      preview="I'm waiting to hear what you think..."
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader
        emailType={EMAIL_TYPES.FIN}
        character_id={rid}
        userId={userId}
      />
      <Section>
        <Text style={title}>
          I can&apos;t stop thinking...
          {/* <strong style={titleStrong}>you&apos;ll love it💗</strong> */}
        </Text>
        <Link href={createChatLink({
          utmContent: `${EMAIL_TYPES.FIN}-character_message_bubble`,
          emailType: EMAIL_TYPES.FIN,
          character_id: rid,
          userId,
        })}>
          <Section style={tipWrapper}>
            <Text style={tip}>
              ...about whether you liked my photo. Let me know? 🥺
            </Text>
          </Section>
        </Link>
        <Section style={buttonWrapper}>
          <EmailButton
            href={createChatLink({
              utmContent: `${EMAIL_TYPES.FIN}-user_reply_bubble_button`,
              emailType: EMAIL_TYPES.FIN,
              character_id: rid,
              userId,
            })}
          >
            Reply to her photo
          </EmailButton>
        </Section>
      </Section>
      <EmailFooter
        emailType={EMAIL_TYPES.FIN}
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
  rid: "{{rid}}",
  userId: "{{userId}}",
  trackingUrl: "{{trackingUrl}}",
};

export default function RecallInterestingPage({
  data,
}: {
  data: RecallInterestingProps;
}) {
  const props = data ?? beRender;
  return <RecallInteresting {...props} />;
}
