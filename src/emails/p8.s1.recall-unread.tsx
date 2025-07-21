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
  width: "380px",
  padding: "20px",
  margin: "24px 0 0 0",
  borderRadius: "22px 22px 22px 8px",
  border: "2px solid #9333EA",
  // boxShadow:
  // "0px 10px 50px 0px rgba(131, 88, 255, 0.40), 10px 10px 20px 0px rgba(255, 255, 255, 0.25) inset, -10px -10px 25px 0px rgba(0, 0, 0, 0.20) inset",
};

const buttonWrapper = {
  margin: "32px 0 32px 260px",
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
      title={`1 unread message...`}
      preview="I'm still waiting for your reply..."
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader
        emailType={EMAIL_TYPES.GMY}
        character_id={rid}
        userId={userId}
      />
      <Section>
        <Text style={title}>Haven&apos;t heard from you...😔</Text>
        <Link
          href={createChatLink({
            utmContent: `${EMAIL_TYPES.GMY}-character_message_bubble`,
            emailType: EMAIL_TYPES.GMY,
            character_id: rid,
            userId,
          })}
        >
          <Section style={tipWrapper}>
            <Text style={tip}>
              Just checking in to see if you saw my last message. Hope
              everything&apos;s okay.
            </Text>
          </Section>
        </Link>
        <Section style={buttonWrapper}>
          <EmailButton
            href={createChatLink({
              utmContent: `${EMAIL_TYPES.GMY}-lets_talk_button`,
              emailType: EMAIL_TYPES.GMY,
              character_id: rid,
              userId,
            })}
          >
            Let&apos;s talk
          </EmailButton>
        </Section>
      </Section>
      <EmailFooter
        emailType={EMAIL_TYPES.GMY}
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

export default function RecallUnreadPage({
  data,
}: {
  data: RecallUnreadProps;
}) {
  const props = data ?? beRender;
  return <RecallUnread {...props} />;
}
