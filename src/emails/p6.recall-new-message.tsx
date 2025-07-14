import { Section, Text, Row, Img, Column, Link } from "@react-email/components";
import EmailHeader from "@/components/email/components/EmailHeader";
import EmailFooter from "@/components/email/components/EmailFooter";
import EmailContainer from "@/components/email/components/EmailContainer";
import EmailButton from "@/components/email/components/EmailButton";
import EmailTrackingPixel from "@/components/email/components/EmailTrackingPixel";
// import EmailReminder from "@/components/email/components/EmailReminder";
import { routes, staticAssetsPrefix } from "@/lib/config";

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
  rName: string;
  rBgImg: string;
  userId: string;
  userName: string;
  trackingUrl?: string;
}

export const RecallNewMessage = ({
  rid,
  rName,
  rBgImg,
  userId,
  userName,
  trackingUrl,
}: RecallNewMessageProps) => {
  return (
    <EmailContainer
      title={`${userName}, guess what? You've got a new message from ${rName}`}
      preview="Surprise inside: check it out"
      trackingPixel={
        trackingUrl ? <EmailTrackingPixel src={trackingUrl} /> : undefined
      }
    >
      <EmailHeader />
      <Section>
        <Text style={title}>
          {userName}, you have a{" "}
          <strong style={titleStrong}>new message</strong> from:
        </Text>
        <Row>
          <Column style={rBgImgWrapper}>
            <Img style={rBgImgStyle} src={rBgImg} alt={rName} />
          </Column>
          <Column style={rNameWrapper}>
            <Text style={rNameText}>{rName}</Text>
            <Text style={rNameTip}>has just sent you a message</Text>
            <EmailButton href={`${routes.chat}?rid=${rid}`}>
              Read message
            </EmailButton>
          </Column>
        </Row>
      </Section>
      <EmailFooter userId={userId} />
    </EmailContainer>
  );
};

const beRender = {
  rid: "test-rid",
  rName: "Sarah Jessie",
  rBgImg:
    "https://pub-1dd2cb98fc55487b8f184cb1b0017c12.r2.dev/character/album/1921137325988651008/picture/background.png",
  userId: "61912225442",
  userName: "Henry",
  trackingUrl: "https://example.com/track?id=test-tracking-id",
};

export const bePlaceHolder = {
  rid: "{{rid}}",
  rName: "{{rName}}",
  rBgImg: "{{rBgImg}}",
  userId: "{{userId}}",
  userName: "{{userName}}",
  trackingUrl: "{{trackingUrl}}",
};

export default function RecallNewMessagePage({
  data,
}: {
  data: RecallNewMessageProps;
}) {
  const props = data ?? beRender;
  return <RecallNewMessage {...props} />;
}
