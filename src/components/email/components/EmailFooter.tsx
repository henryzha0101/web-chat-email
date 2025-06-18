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
  userId?: string;
  baseUrl?: string;
  showLegalLinks?: boolean;
  showHr?: boolean;
  style?: React.CSSProperties;
}

export const EmailFooter = ({
  userId = "",
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
          <Link style={link} href={routes.privacy}>
            Privacy Policy
          </Link>
        </Column>
        <Column>
          <Link style={link} href={routes.refund}>
            Refund Policy
          </Link>
        </Column>
        <Column>
          <Link style={link} href={routes.safety}>
            Safety Guidelines
          </Link>
        </Column>
        <Column>
          <Link style={link} href={routes.support}>
            Support
          </Link>
        </Column>
      </Row>
    )}
    <Text style={infoText}>
      Please add{" "}
      <Link href={routes.supportEmail} style={link}>
        {supportEmail}
      </Link>{" "}
      to your contact list. You can{" "}
      <Link href={routes.unsubscribe} style={link}>
        unsubscribe
      </Link>{" "}
      from this mailing at any time.
    </Text>
    <Text style={infoText}>
      All payments are executed in accordance with {websiteName}{" "}
      <Link href={routes.terms} style={link}>
        Terms & Conditions
      </Link>
      .
    </Text>
    {userId && <Text style={infoText}>Your ID: {userId}</Text>}
    <Row style={my20}>
      <Column>
        <Section>
          <Link href={socialMedia.twitter}>
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
