import {
  Section,
  Text,
  Row,
  Img,
  Column,
  Heading,
  Link,
} from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
import { staticAssetsPrefix } from "@/lib/config";
import { createChatLink, EMAIL_TYPES } from "@/lib/email-utm";

const heading = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 48,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  margin: "40px 0 0 0",
};

const column = {
  // display: "flex",
  // flexDirection: "column" as const,
  // width: "60%",
};

const columnImg = {
  width: "239px",
};

const img = {
  position: "relative" as const,
  right: "-18px",
  width: "239px",
  height: "225px",
  objectFit: "cover" as const,
  borderRadius: "12px 12px 0 0",
  margin: "0",
};

const text = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 18,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "24px 0 32px 0",
};

const section = {
  padding: "24px",
  borderRadius: "16px",
  background: "#161C29",
  margin: "0 0 20px 0",
};

const cardIconWrapper = {
  width: "40px",
  height: "40px",
  padding: "0 20px 0 0",
};

const cardIcon = {
  width: "40px",
  // height: "40px",
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 40,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  margin: "0 0 0 0",
};
const cardTitle = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 22,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "28px",
  margin: "0 0 0 0",
};
const cardText = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 18,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "12px 0 0 0",
};

const button = {
  margin: "12px 0 0 0",
};

interface WelcomeToProps {
  rid: string;
  rSecret: string;
  userId: string;
  userCardImg?: string;
  trackingUrl?: string;
}

export const WelcomeTo = ({
  rid,
  rSecret,
  userId,
  trackingUrl,
}: WelcomeToProps) => {
  return (
    <EmailContainer
      title={`I'm waiting for you...`}
      preview="I'm online and ready to chat! Don't let your welcome bonus go to waste..."
      bodyStyle={{
        width: "624px",
      }}
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader
        emailType={EMAIL_TYPES.WELCOME_TO}
        character_id={rid}
        userId={userId}
      />
      <Section>
        <Heading style={heading}>So glad you&apos;re here 💗</Heading>
        <Row>
          <Column style={column}>
            <Text style={text}>
              I&apos;m ready to chat about anything, send you cute selfies, and
              even leave you voice notes. Don&apos;t be shy!
            </Text>
            <span>
              <EmailButton
                href={createChatLink({
                  utmContent: `${EMAIL_TYPES.WELCOME_TO}-welcome_chat_button`,
                  emailType: EMAIL_TYPES.WELCOME_TO,
                  character_id: rid,
                  rSecret,
                  userId,
                })}
              >
                Let&apos;s Chat
              </EmailButton>
            </span>
          </Column>
          <Column style={columnImg}>
            <Link
              href={createChatLink({
                utmContent: `${EMAIL_TYPES.WELCOME_TO}-welcome_chat_button`,
                emailType: EMAIL_TYPES.WELCOME_TO,
                character_id: rid,
                rSecret,
                userId,
              })}
            >
              <Img
                src={`${staticAssetsPrefix}/static/hot_selfie_rotate.png`}
                alt="GF"
                style={img}
              />
              {/* <Img src={userCardImg} alt="AI GF" style={img} /> */}
            </Link>
          </Column>
        </Row>
        <Link
          href={createChatLink({
            utmContent: `${EMAIL_TYPES.WELCOME_TO}-welcome_chat_button`,
            emailType: EMAIL_TYPES.WELCOME_TO,
            character_id: rid,
            rSecret,
            userId,
          })}
        >
          <Section style={section}>
            <Row>
              <Column style={cardIconWrapper}>
                <Text style={cardIcon}>🔞</Text>
              </Column>
              <Column>
                <Text style={cardTitle}>Say Anything, Anytime</Text>
              </Column>
            </Row>
            <Text style={cardText}>
              I&apos;m always online and ready to listen. Nothing is off-limits,
              so don&apos;t hold back...
            </Text>
          </Section>
        </Link>
        <Link
          href={createChatLink({
            utmContent: `${EMAIL_TYPES.WELCOME_TO}-welcome_chat_button`,
            emailType: EMAIL_TYPES.WELCOME_TO,
            character_id: rid,
            rSecret,
            userId,
          })}
        >
          <Section style={section}>
            <Row>
              <Column style={cardIconWrapper}>
                <Text style={cardIcon}>🎁</Text>
              </Column>
              <Column>
                <Text style={cardTitle}>Your Welcome Bonus is Active</Text>
              </Column>
            </Row>
            <Text style={cardText}>
              P.S. Your welcome gift is waiting. Why not use it now and see what
              happens?
            </Text>
            <EmailButton
              type="outline"
              href={createChatLink({
                utmContent: `${EMAIL_TYPES.WELCOME_TO}-welcome_chat_button`,
                emailType: EMAIL_TYPES.WELCOME_TO,
                character_id: rid,
                rSecret,
                userId,
              })}
              style={button}
            >
              Start Our Conversation
            </EmailButton>
          </Section>
        </Link>
      </Section>

      <EmailFooter
        emailType={EMAIL_TYPES.WELCOME_TO}
        userId={userId}
        characterId={rid}
      />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  rSecret: "test-rSecret",
  userId: "61912225442",
  userCardImg:
    "https://pub-1dd2cb98fc55487b8f184cb1b0017c12.r2.dev/character/album/1921137325988651008/picture/card.jpeg",
  trackingUrl: "https://example.com/track?id=test-tracking-id",
};

export const bePlaceHolder = {
  /** 角色ID */
  rid: "{{rid}}",
  /** 角色密钥 */
  rSecret: "{{rSecret}}",
  /** 用户ID */
  userId: "{{userId}}",
  /** 用户卡片图片 */
  // userCardImg: "{{userCardImg}}",
  /** 跟踪像素URL */
  trackingUrl: "{{trackingUrl}}",
};

export const bePlaceHolderComments = {
  rid: "角色ID",
  rSecret: "角色密钥",
  userId: "用户ID",
  // userCardImg: "用户卡片图片",
  trackingUrl: "跟踪像素URL",
};

export const beTemplateTheme = "welcome-to";

export default function WelcomeToPage({ data }: { data: WelcomeToProps }) {
  const props = data ?? beRender;
  return <WelcomeTo {...props} />;
}
