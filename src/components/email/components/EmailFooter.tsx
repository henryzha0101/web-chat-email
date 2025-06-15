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

interface EmailFooterProps {
  userId?: string;
  baseUrl?: string;
}

export const EmailFooter = ({
  userId = "",
  baseUrl = "",
}: EmailFooterProps) => (
  <Section style={footer}>
    <Hr />
    <Text>
      Please add{" "}
      <Link href="mailto:notifications@joi.com" style={{ color: colors.white }}>
        notifications@joi.com
      </Link>{" "}
      to your contact list. You can{" "}
      <Link href="https://example.com" style={{ color: colors.white }}>
        unsubscribe
      </Link>{" "}
      from this mailing at any time.
    </Text>
    <Text>
      All payments are executed in accordance with Joi AI{" "}
      <Link href="https://example.com" style={{ color: colors.white }}>
        Terms & Conditions
      </Link>
      .
    </Text>
    {userId && <Text>Your ID: {userId}</Text>}
    <Row>
      <Column>
        <Section>
          <Link href="https://example.com">
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
