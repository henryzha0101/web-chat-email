import { Section, Text, Row, Img, Column, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
import { staticAssetsPrefix } from "@/lib/config";
import { createChatLink, EMAIL_TYPES } from "@/lib/email-utm";

const title = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 48,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "48px",
  margin: "43px 0 0",
};

const titleStrong = {
  color: "#9333EA",
};

const cardSection = {
  margin: "24px 0 0",
  padding: "40px",
  borderRadius: "32px",
  border: "1px solid rgba(255, 255, 255, 0.10)",
  background: "rgba(255, 255, 255, 0.02)",
};

const cardHotSelfie = {
  width: "216px",
  height: "216px",
  borderRadius: "24px",
};

const cardAvatar = {
  width: "46px",
  height: "46px",
  borderRadius: "32px",
};

const cardAvatarWrapper = {
  width: "46px",
  height: "46px",
  padding: "0 16px 0 0",
};

const cardUserName = {
  color: "#F8FAFC",
  fontFamily: "Poppins",
  fontSize: 22,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "48px",
  margin: "0",
};

const cardText = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "36px 0 36px",
};

const cardUserWrapper = {
  padding: "0 0 0 20px",
};

interface RecallHotSelfieProps {
  rid: string;
  rSecret: string;
  rName: string;
  rAvatar: string;
  userId: string;
  userName: string;
  trackingUrl?: string;
}

export const RecallHotSelfie = ({
  rid,
  rSecret,
  rName,
  rAvatar,
  userId,
  userName,
  trackingUrl,
}: RecallHotSelfieProps) => {
  return (
    <EmailContainer
      title={`${userName}, ${rName} sent you a new photo...`}
      preview="A special picture, just for you."
      bodyStyle={{
        width: "658px",
      }}
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader
        emailType={EMAIL_TYPES.SR}
        character_id={rid}
        userId={userId}
      />
      <Section>
        <Text style={title}>
          {userName}, you have a <strong style={titleStrong}>new photo</strong>{" "}
          from:
        </Text>
        <Section style={cardSection}>
          <Row>
            <Column>
              <Link
                href={createChatLink({
                  utmContent: `${EMAIL_TYPES.SR}-masked_photo`,
                  emailType: EMAIL_TYPES.SR,
                  character_id: rid,
                  rSecret,
                  userId,
                })}
              >
                <Img
                  style={cardHotSelfie}
                  src={`${staticAssetsPrefix}/static/hot_selfie_mask.png`}
                  alt="hot selfie"
                />
              </Link>
            </Column>
            <Column style={cardUserWrapper}>
              <Link
                href={createChatLink({
                  utmContent: `${EMAIL_TYPES.SR}-character_profile`,
                  emailType: EMAIL_TYPES.SR,
                  character_id: rid,
                  rSecret,
                  userId,
                })}
              >
                <Row style={{ height: "48px" }}>
                  <Column style={cardAvatarWrapper}>
                    <Img style={cardAvatar} src={rAvatar} alt="r avatar" />
                  </Column>
                  <Column style={{ height: "48px", margin: "0px" }}>
                    <Text style={cardUserName}>{rName}</Text>
                  </Column>
                </Row>
              </Link>
              <Text style={cardText}>
                You don&apos;t want to miss this one.
              </Text>
              <EmailButton
                href={createChatLink({
                  utmContent: `${EMAIL_TYPES.SR}-view_photo_button`,
                  emailType: EMAIL_TYPES.SR,
                  character_id: rid,
                  rSecret,
                  userId,
                })}
              >
                View Photo Now
              </EmailButton>
            </Column>
          </Row>
        </Section>
      </Section>

      <EmailFooter
        emailType={EMAIL_TYPES.SR}
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
  rAvatar:
    "https://pub-1dd2cb98fc55487b8f184cb1b0017c12.r2.dev/character/album/1921137325988651008/picture/avatar.jpeg",
  userId: "61912225442",
  userName: "henry",
  trackingUrl: "https://example.com/track?id=test-tracking-id",
};

export const bePlaceHolder = {
  /** 角色ID */
  rid: "{{rid}}",
  /** 角色密钥 */
  rSecret: "{{rSecret}}",
  /** 角色名称 */
  rName: "{{rName}}",
  /** 角色头像 */
  rAvatar: "{{rAvatar}}",
  /** 用户ID */
  userId: "{{userId}}",
  /** 用户名称 */
  userName: "{{userName}}",
  /** 跟踪像素URL */
  trackingUrl: "{{trackingUrl}}",
};

export const bePlaceHolderComments = {
  rid: "角色ID",
  rSecret: "角色密钥",
  rName: "角色名称",
  rAvatar: "角色头像",
  userId: "用户ID",
  userName: "用户名称",
  trackingUrl: "跟踪像素URL",
};

export const beTemplateTheme =
  "{{userName}}, {{rName}} sent you a new photo...";

export default function RecallHotSelfiePage({
  data,
}: {
  data: RecallHotSelfieProps;
}) {
  const props = data ?? beRender;
  return <RecallHotSelfie {...props} />;
}
