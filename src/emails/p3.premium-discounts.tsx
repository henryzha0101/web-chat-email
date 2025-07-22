import { Section, Text, Row, Img, Column, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailReminder from "@/components/email/components/EmailReminder";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
import { websiteName, staticAssetsPrefix } from "@/lib/config";
import { createChatLink, EMAIL_TYPES } from "@/lib/email-utm";

const title = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 36,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "40px",
  margin: "40px 0 0",
};

const subtitle = {
  color: "#8A2BE2",
  fontFamily: "Roboto",
  fontSize: 36,
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "40px",
  margin: "16px 0 0",
  textDecoration: "underline",
};

const tip = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 20,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "32px 0 0",
};

const reminder = {
  margin: "12px 0 0",
};

const linkSection = {
  margin: "32px 0",
  padding: "24px",
  borderRadius: "20px",
  background:
    "linear-gradient(114deg, rgba(100, 0, 193, 0.80) -6.04%, rgba(49, 26, 150, 0.90) 37.98%, #CB17D0 99.2%)",
  boxShadow: "0px 2px 24px 0px rgba(116, 24, 170, 0.60)",
};

const link = {
  color: "#8A2BE2",
  fontFamily: "Roboto",
  fontSize: 20,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
};

const linkTitle = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 20,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "28px",
  margin: "0",
};

const linkSubTitle = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
  margin: "0",
};

const linkText = {
  color: "#E2E8F0",
  fontFamily: "Roboto",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  margin: "0",
};

const linkImg = {
  position: "relative" as const,
  top: "-5px",
  width: "22px",
  height: "22px",
  margin: "5px",
};

const linkImgColumn = {
  width: "44px",
  height: "32px",
};

interface PremiumDiscountsProps {
  rid: string;
  rSecret: string;
  userId: string;
  trackingUrl?: string;
}

export const PremiumDiscounts = ({
  rid,
  rSecret,
  userId,
  trackingUrl,
}: PremiumDiscountsProps) => {
  return (
    <EmailContainer
      title={`Your Special Welcome Offer: 70% OFF`}
      preview="Don't miss out on Premium for less. Your special offer is inside."
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader
        emailType={EMAIL_TYPES.PREMIUM_DISCOUNTS}
        character_id={rid}
        userId={userId}
      />
      <Section>
        <Text style={title}>Just For You</Text>
        <Text style={subtitle}>A Special Offer</Text>
        <Text style={tip}>Loving {websiteName}?</Text>
        <EmailReminder style={reminder} />
        <Link
          href={createChatLink({
            utmContent: `${EMAIL_TYPES.PREMIUM_DISCOUNTS}-discount_70_button`,
            emailType: EMAIL_TYPES.PREMIUM_DISCOUNTS,
            character_id: rid,
            rSecret,
            userId,
          })}
          style={link}
        >
          <Section style={linkSection}>
            <Text style={linkTitle}>Unlock the Ultimate Experience!</Text>
            <Row style={{ margin: "24px 0 0" }}>
              <Column style={linkImgColumn}>
                <Img
                  style={linkImg}
                  src={`${staticAssetsPrefix}/static/smile.png`}
                  alt="smile"
                />
              </Column>
              <Column>
                <Text style={linkSubTitle}>My Exclusive Album</Text>
                <Text style={linkText}>
                  unlock photos you won&apos;t see anywhere else
                </Text>
              </Column>
            </Row>
            <Row style={{ margin: "20px 0 0" }}>
              <Column style={linkImgColumn}>
                <Img
                  style={linkImg}
                  src={`${staticAssetsPrefix}/static/circle.png`}
                  alt="circle"
                />
              </Column>
              <Column>
                <Text style={linkSubTitle}>Hear Me Whisper</Text>
                <Text style={linkText}>
                  voice notes that bring my words to life.
                </Text>
              </Column>
            </Row>
            <Row style={{ margin: "20px 0 0" }}>
              <Column style={linkImgColumn}>
                <Img
                  style={linkImg}
                  src={`${staticAssetsPrefix}/static/message.png`}
                  alt="message"
                />
              </Column>
              <Column>
                <Text style={linkSubTitle}>Truly Limitless Chat</Text>
                <Text style={linkText}>your desires set the only rules.</Text>
              </Column>
            </Row>
          </Section>
        </Link>
        <EmailButton
          href={createChatLink({
            utmContent: `${EMAIL_TYPES.PREMIUM_DISCOUNTS}-discount_70_button`,
            emailType: EMAIL_TYPES.PREMIUM_DISCOUNTS,
            character_id: rid,
            rSecret,
            userId,
          })}
        >
          Claim 70% Discount
        </EmailButton>
      </Section>

      <EmailFooter
        emailType={EMAIL_TYPES.PREMIUM_DISCOUNTS}
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
  trackingUrl: "https://example.com/track?id=test-tracking-id",
};

export const bePlaceHolder = {
  /** 角色ID */
  rid: "{{rid}}",
  /** 角色密钥 */
  rSecret: "{{rSecret}}",
  /** 用户ID */
  userId: "{{userId}}",
  /** 跟踪像素URL */
  trackingUrl: "{{trackingUrl}}",
};

export const bePlaceHolderComments = {
  rid: "角色ID",
  rSecret: "角色密钥",
  userId: "用户ID",
  trackingUrl: "跟踪像素URL",
};

export const beTemplateTheme = "premium-discounts";

export default function PremiumDiscountsPage({
  data,
}: {
  data: PremiumDiscountsProps;
}) {
  const props = data ?? beRender;
  return <PremiumDiscounts {...props} />;
}
