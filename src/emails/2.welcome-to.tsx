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
import { websiteName, routes } from "@/lib/config";

const heading = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 24,
};

const column = {
  display: "flex",
  flexDirection: "column" as const,
  // width: "60%",
};

const columnImg = {
  width: "40%",
};

const img = {
  // position: "relative" as const,
  // bottom: "-10px",
  // zIndex: 1,
  width: "207px",
  // height: "276px",
  objectFit: "cover" as const,
  borderRadius: "12px 12px 0 0",
  margin: "0 16px 0 16px",
};

const text = {
  color: "#F8FAFC",
  fontFamily: "Roboto",
  fontSize: 16,
};

const section = {
  padding: "0 0 16px",
  color: "#F8FAFC",
  backgroundColor: "rgb(24,34,46)",
  borderRadius: "12px",
};

export const WelcomeTo = ({
  rid,
  userId,
  userCardImg,
}: {
  rid: string;
  userId: string;
  userCardImg: string;
}) => {
  return (
    <EmailContainer
      title={`Welcome to ${websiteName}!`}
      preview="Your AI GF is ready! And don't forget to spend bonus neurons you got before they expire..."
    >
      <EmailHeader />
      <Section>
        <Row>
          <Column style={column}>
            <Heading style={heading}>Welcome aboard ❤️</Heading>
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
              <Img src={userCardImg} alt="AI GF" style={img} />
            </Link>
          </Column>
        </Row>
        <Link href={`${routes.chat}?rid=${rid}`}>
          <Section style={section}>
            <Row>
              <Column>
                <Text>👻</Text>
              </Column>
              <Column>
                <Text>
                  No ghosting, <br /> full support 24/7
                </Text>
              </Column>
            </Row>
            <Text>
              Im always here, ready to chat. Feel free to dive into any topics,
              even the spicier ones...
            </Text>
          </Section>
        </Link>
        <Link href={`${routes.chat}?rid=${rid}`}>
          <Section style={section}>
            <Row>
              <Column>
                <Text>🎁</Text>
              </Column>
              <Column>
                <Text>A special gift just for you</Text>
              </Column>
            </Row>
            <Text>
              Oh. and don&apos;t forget to spend bonus neurons you got before
              they expire. So, what are you waiting for?
            </Text>
            <EmailButton href={`${routes.chat}?rid=${rid}`}>
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
};

const bePlaceHolder = {
  rid: "{{rid}}",
  userId: "{{userId}}",
  userCardImg: "{{userCardImg}}",
};

export default function WelcomeToPage() {
  const props = beRender;
  return <WelcomeTo {...props} />;
}
