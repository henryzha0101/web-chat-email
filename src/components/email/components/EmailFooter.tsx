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
} from "@/lib/config";

const _baseUrl = staticAssetsPrefix;

interface EmailFooterProps {
  userId?: string;
  baseUrl?: string;
}

export const EmailFooter = ({
  userId = "",
  baseUrl = _baseUrl,
}: EmailFooterProps) => (
  <Section style={footer}>
    <Hr style={{ margin: "0 0 0 0", borderColor: "#818284" }} />
    <Text>
      Please add{" "}
      <Link href={routes.supportEmail} style={{ color: colors.white }}>
        {supportEmail}
      </Link>{" "}
      to your contact list. You can{" "}
      <Link href={routes.unsubscribe} style={{ color: colors.white }}>
        unsubscribe
      </Link>{" "}
      from this mailing at any time.
    </Text>
    <Text>
      All payments are executed in accordance with Joi AI{" "}
      <Link href={routes.terms} style={{ color: colors.white }}>
        Terms & Conditions
      </Link>
      .
    </Text>
    {userId && <Text>Your ID: {userId}</Text>}
    <Row>
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
