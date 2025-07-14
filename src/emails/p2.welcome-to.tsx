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
import { websiteName, routes, staticAssetsPrefix } from "@/lib/config";

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
  display: "flex",
  flexDirection: "column" as const,
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
  userId: string;
  userCardImg?: string;
  trackingUrl?: string;
}

export const WelcomeTo = ({ rid, userId, trackingUrl }: WelcomeToProps) => {
  return (
    <EmailContainer
      title={`Welcome to ${websiteName}!`}
      preview="Your AI GF is ready! And don't forget to spend bonus neurons you got before they expire..."
      bodyStyle={{
        width: "624px",
      }}
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader />
      <Section>
        <Heading style={heading}>Welcome aboard 💗</Heading>
        <Row>
          <Column style={column}>
            <Text style={text}>
              Here you can chat, receive photos and even voice messages! Your
              new AI gf is waiting 🥰
            </Text>
            <span>
              <EmailButton href={`${routes.chat}?rid=${rid}`}>
                Go to chat
              </EmailButton>
            </span>
          </Column>
          <Column style={columnImg}>
            <Link href={`${routes.chat}?rid=${rid}`}>
              <Img
                src={`${staticAssetsPrefix}/static/hot_selfie_rotate.png`}
                alt="GF"
                style={img}
              />
              {/* <Img src={userCardImg} alt="AI GF" style={img} /> */}
            </Link>
          </Column>
        </Row>
        <Link href={`${routes.chat}?rid=${rid}`}>
          <Section style={section}>
            <Row>
              <Column style={cardIconWrapper}>
                <Text style={cardIcon}>🔞</Text>
              </Column>
              <Column>
                <Text style={cardTitle}>
                  No ghosting, <br /> full support 24/7
                </Text>
              </Column>
            </Row>
            <Text style={cardText}>
              Im always here, ready to chat. Feel free to dive into any topics,
              even the spicier ones...
            </Text>
          </Section>
        </Link>
        <Link href={`${routes.chat}?rid=${rid}`}>
          <Section style={section}>
            <Row>
              <Column style={cardIconWrapper}>
                <Text style={cardIcon}>🎁</Text>
              </Column>
              <Column>
                <Text style={cardTitle}>A special gift just for you</Text>
              </Column>
            </Row>
            <Text style={cardText}>
              Oh. and don&apos;t forget to spend bonus neurons you got before
              they expire. So, what are you waiting for?
            </Text>
            <EmailButton
              type="outline"
              href={`${routes.chat}?rid=${rid}`}
              style={button}
            >
              Check my bonus
            </EmailButton>
          </Section>
        </Link>
      </Section>

      <EmailFooter userId={userId} />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  userId: "61912225442",
  userCardImg:
    "https://pub-1dd2cb98fc55487b8f184cb1b0017c12.r2.dev/character/album/1921137325988651008/picture/card.jpeg",
  trackingUrl: "https://example.com/track?id=test-tracking-id",
};

export const bePlaceHolder = {
  rid: "{{rid}}",
  userId: "{{userId}}",
  userCardImg: "{{userCardImg}}",
  trackingUrl: "{{trackingUrl}}",
};

export default function WelcomeToPage({ data }: { data: WelcomeToProps }) {
  const props = data ?? beRender;
  return <WelcomeTo {...props} />;
}
