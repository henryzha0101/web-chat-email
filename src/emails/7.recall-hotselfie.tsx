import { Section, Text, Row, Img, Column } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
// import EmailReminder from "@/components/email/components/EmailReminder";
import { routes, staticAssetsPrefix } from "@/lib/config";

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
  width: "194px",
  height: "194",
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
  padding: "0 0 0 40px",
};

export const RecallHotSelfie = ({
  rid,
  rAvatar,
  userId,
  userName,
}: {
  rid: string;
  rAvatar: string;
  userId: string;
  userName: string;
}) => {
  return (
    <EmailContainer
      title={`${userName}, view now: shares a hot selfie`}
      preview="Enjoy the view: you’ll love it!"
      bodyStyle={{
        width: "658px",
      }}
    >
      <EmailHeader />
      <Section>
        <Text style={title}>
          {userName}, you have a <strong style={titleStrong}>new photo</strong>{" "}
          from:
        </Text>
        <Section style={cardSection}>
          <Row>
            <Column>
              <Img
                style={cardHotSelfie}
                src={`${staticAssetsPrefix}/static/hot_selfie.png`}
                alt="hot selfie"
              />
            </Column>
            <Column style={cardUserWrapper}>
              <Row style={{ height: "48px" }}>
                <Column style={cardAvatarWrapper}>
                  <Img style={cardAvatar} src={rAvatar} alt="r avatar" />
                </Column>
                <Column style={{ height: "48px", margin: "0px" }}>
                  <Text style={cardUserName}>{userName}</Text>
                </Column>
              </Row>
              <Text style={cardText}>has just sent you a new picture</Text>
              <EmailButton href={`${routes.chat}?rid=${rid}`}>
                View photo
              </EmailButton>
            </Column>
          </Row>
        </Section>
      </Section>

      <EmailFooter userId={userId} />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  rAvatar:
    "https://pub-1dd2cb98fc55487b8f184cb1b0017c12.r2.dev/character/album/1921137325988651008/picture/avatar.jpeg",
  userId: "61912225442",
  userName: "henry",
};

const bePlaceHolder = {
  rid: "{{rid}}",
  rAvatar: "{{rAvatar}}",
  userId: "{{userId}}",
  userName: "{{userName}}",
};

export default function RecallHotSelfiePage() {
  const props = beRender;
  return <RecallHotSelfie {...props} />;
}
