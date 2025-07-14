import { Section, Text, Row, Img, Column, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailReminder from "@/components/email/components/EmailReminder";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
import { websiteName, routes, staticAssetsPrefix } from "@/lib/config";

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
  userId: string;
  trackingUrl?: string;
}

export const PremiumDiscounts = ({
  rid,
  userId,
  trackingUrl,
}: PremiumDiscountsProps) => {
  return (
    <EmailContainer
      title={`Up to 70% OFF Your Premium Experience!`}
      preview="Your exclusive discount is waiting unlock Premium features today!"
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader />
      <Section>
        <Text style={title}>Don&apos;t miss out on your</Text>
        <Text style={subtitle}>welcome offer!</Text>
        <Text style={tip}>Love {websiteName}?</Text>
        <EmailReminder style={reminder} />
        <Link href={`${routes.chat}?rid=${rid}`} style={link}>
          <Section style={linkSection}>
            <Text style={linkTitle}>Get the Full Premium Experience!</Text>
            <Row style={{ margin: "24px 0 0" }}>
              <Column style={linkImgColumn}>
                <Img
                  style={linkImg}
                  src={`${staticAssetsPrefix}/static/smile.png`}
                  alt="smile"
                />
              </Column>
              <Column>
                <Text style={linkSubTitle}>Exclusive, personalized photos</Text>
                <Text style={linkText}>just for you</Text>
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
                <Text style={linkSubTitle}>Intimate voice messages</Text>
                <Text style={linkText}>that speak straight to your heart</Text>
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
                <Text style={linkSubTitle}>Unbounded conversations</Text>
                <Text style={linkText}>tailored to your every desire</Text>
              </Column>
            </Row>
          </Section>
        </Link>
        <EmailButton href={`${routes.chat}?rid=${rid}`}>
          Claim your discount
        </EmailButton>
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

export default function PremiumDiscountsPage({
  data,
}: {
  data: PremiumDiscountsProps;
}) {
  const props = data ?? beRender;
  return <PremiumDiscounts {...props} />;
}
