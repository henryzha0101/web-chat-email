import { Section, Text, Row, Img, Column, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
// import EmailReminder from "@/components/email/components/EmailReminder";
// import { routes, staticAssetsPrefix } from "@/lib/config";
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

const titleStrong = {
  color: "#9333EA",
};

const rBgImgWrapper = {
  width: "285px",
  height: "420px",
};

const rBgImgStyle = {
  width: "285px",
  height: "420px",
  objectFit: "cover" as const,
};

const rNameWrapper = {};

const rNameText = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 28,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  margin: "0 0 0 0",
};

const rNameTip = {
  color: "#AFAFAF",
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "16px 0 40px 0",
};

interface RecallNewMessageProps {
  rid: string;
  rSecret: string;
  rName: string;
  rBgImg: string;
  userId: string;
  userName: string;
  trackingUrl?: string;
}

export const RecallNewMessage = ({
  rid,
  rSecret,
  rName,
  rBgImg,
  userId,
  userName,
  trackingUrl,
}: RecallNewMessageProps) => {
  return (
    <EmailContainer
      title={`${userName}, you have a new message from ${rName}`}
      preview="Just for you: a new message is in."
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader
        emailType={EMAIL_TYPES.NMR}
        character_id={rid}
        userId={userId}
      />
      <Section>
        <Text style={title}>
          {userName}, you have a{" "}
          <strong style={titleStrong}>new message</strong> from:
        </Text>
        <Row>
          <Column style={rBgImgWrapper}>
            <Link
              href={createChatLink({
                utmContent: `${EMAIL_TYPES.NMR}-character_image`,
                emailType: EMAIL_TYPES.NMR,
                character_id: rid,
                rSecret,
                userId,
              })}
            >
              <Img style={rBgImgStyle} src={rBgImg} alt={rName} />
            </Link>
          </Column>
          <Column style={rNameWrapper}>
            <Text style={rNameText}>{rName}</Text>
            <Text style={rNameTip}>I&apos;m waiting for your reply!</Text>
            <EmailButton
              href={createChatLink({
                utmContent: `${EMAIL_TYPES.NMR}-read_message_button`,
                emailType: EMAIL_TYPES.NMR,
                character_id: rid,
                rSecret,
                userId,
              })}
            >
              Read Now
            </EmailButton>
          </Column>
        </Row>
      </Section>
      <EmailFooter
        emailType={EMAIL_TYPES.NMR}
        userId={userId}
        characterId={rid}
      />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  rSecret: "test-rSecret",
  rName: "Sarah Jessie",
  rBgImg:
    "https://pub-1dd2cb98fc55487b8f184cb1b0017c12.r2.dev/character/album/1921137325988651008/picture/background.png",
  userId: "61912225442",
  userName: "Henry",
  // trackingUrl: "https://example.com/track?id=test-tracking-id",
};

export const bePlaceHolder = {
  /** 角色ID */
  rid: "{{rid}}",
  /** 角色密钥 */
  rSecret: "{{rSecret}}",
  /** 角色名称 */
  rName: "{{rName}}",
  /** 角色背景图片 */
  rBgImg: "{{rBgImg}}",
  /** 用户ID */
  userId: "{{userId}}",
  /** 用户名称 */
  userName: "{{userName}}",
  /** 跟踪像素URL */
  // trackingUrl: "{{trackingUrl}}",
};

export const bePlaceHolderComments = {
  rid: "角色ID",
  rSecret: "角色密钥",
  rName: "角色名称",
  rBgImg: "角色背景图片",
  userId: "用户ID",
  userName: "用户名称",
  trackingUrl: "跟踪像素URL",
};

export const beTemplateTheme =
  "{{userName}}, you have a new message from {{rName}}";

export default function RecallNewMessagePage({
  data,
}: {
  data: RecallNewMessageProps;
}) {
  const props = data ?? beRender;
  return <RecallNewMessage {...props} />;
}
