import {
  Section,
  Hr,
  Text,
  Link,
  Row,
  Column,
  Img,
} from "@react-email/components";
import { colors, footer } from "@/emails/_styles/common";
import {
  socialMedia,
  routes,
  supportEmail,
  staticAssetsPrefix,
  websiteName,
} from "@/lib/config";
import {
  addEmailUtmParams,
  createPrivacyLink,
  createRefundLink,
  createSafetyLink,
  createSupportLink,
  createUnsubscribeLink,
  createTermsLink,
  EmailType,
} from "@/lib/email-utm";

const my20 = {
  margin: "20px 0 20px 0",
};

const infoText = {
  color: "#AFAFAF",
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
};

const link = {
  color: "#FFF",
  textDecoration: "underline",
};

const _baseUrl = staticAssetsPrefix;

interface EmailFooterProps {
  emailType: EmailType;
  userId: string;
  characterId: string;
  baseUrl?: string;
  showLegalLinks?: boolean;
  showHr?: boolean;
  style?: React.CSSProperties;
}

export const EmailFooter = ({
  emailType,
  userId,
  characterId,
  baseUrl = _baseUrl,
  showLegalLinks = false,
  showHr = false,
  style = {},
}: EmailFooterProps) => (
  <Section style={{ ...footer, ...style }}>
    {/* Privacy Policy | Refund Policy | Safety Guidelines | Support */}
    {showHr && <Hr style={{ borderColor: "#818284", ...my20 }} />}
    {showLegalLinks && (
      <Row style={my20}>
        <Column>
          <Link style={link} href={createPrivacyLink({
            utmContent: `${emailType}-footer_privacy`,
            emailType,
            character_id: characterId,
            userId,
          })}>
            Privacy Policy
          </Link>
        </Column>
        <Column>
          <Link style={link} href={createRefundLink({
            utmContent: `${emailType}-footer_refund`,
            emailType,
            character_id: characterId,
            userId,
          })}>
            Refund Policy
          </Link>
        </Column>
        <Column>
          <Link style={link} href={createSafetyLink({
            utmContent: `${emailType}-footer_safety`,
            emailType,
            character_id: characterId,
            userId,
          })}>
            Safety Guidelines
          </Link>
        </Column>
        <Column>
          <Link style={link} href={createSupportLink({
            utmContent: `${emailType}-footer_support`,
            emailType,
            character_id: characterId,
            userId,
          })}>
            Support
          </Link>
        </Column>
      </Row>
    )}
    <Text style={infoText}>
      Please add{" "}
      <Link
        href={addEmailUtmParams(routes.supportEmail, {
          utm_content: `${emailType}-footer_support_email`,
          source: `email_recall_${emailType}`,
          uid: userId,
          character_id: characterId,
        })}
        style={link}
      >
        {supportEmail}
      </Link>{" "}
      to your contact list. You can{" "}
      <Link href={createUnsubscribeLink({
        utmContent: `${emailType}-footer_unsubscribe`,
        emailType,
        character_id: characterId,
        userId,
      })} style={link}>
        unsubscribe
      </Link>{" "}
      from this mailing at any time.
    </Text>
    <Text style={infoText}>
      All payments are executed in accordance with {websiteName}{" "}
      <Link href={createTermsLink({
        utmContent: `${emailType}-footer_terms`,
        emailType,
        character_id: characterId,
        userId,
      })} style={link}>
        Terms & Conditions
      </Link>
      .
    </Text>
    {userId && <Text style={infoText}>Your ID: {userId}</Text>}
    <Row style={my20}>
      <Column>
        <Section>
          <Link
            href={addEmailUtmParams(socialMedia.twitter, {
              utm_content: `${emailType}-footer_social_twitter`,
              source: `email_recall_${emailType}`,
              uid: userId,
              character_id: characterId,
            })}
          >
            <Img
              src={`${baseUrl}/static/logo_x.png`}
              width="28"
              alt="logo_x"
              style={{ margin: "0 auto" }}
            />
          </Link>
        </Section>
      </Column>
    </Row>
  </Section>
);

export default EmailFooter;
