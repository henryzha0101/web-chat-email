import React from "react";
import { Section, Img, Link } from "@react-email/components";
import { header } from "@/emails/_styles/common";
import { websiteLogo } from "@/lib/config";
import { createHomeLink, EmailType } from "@/lib/email-utm";

interface EmailHeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  center?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  emailType: EmailType;
  character_id: string;
  userId: string;
}

const DEFAULT_LOGO = websiteLogo;
// "https://www.datingemailing.com/content/guids/CABINET_633c7d8d36c1315d9090e9d4a2c25d1b5b793cde69a6c5bd46f6cb9ea78fb343/images/logo_1.png";

export const EmailHeader = ({
  logoSrc = DEFAULT_LOGO,
  logoAlt = "logo",
  logoWidth = 147,
  logoHeight = 66,
  center = false,
  children,
  style = header,
  emailType,
  character_id,
  userId,
}: EmailHeaderProps) => (
  <Section style={style}>
    <Link href={createHomeLink({
      utmContent: `${emailType}-header_logo`,
      emailType,
      character_id,
      userId,
    })}>
      <Img
        src={logoSrc}
        width={logoWidth}
        height={logoHeight}
        style={{
          margin: center ? "0 auto" : "0",
          objectFit: "cover",
        }}
        alt={logoAlt}
      />
    </Link>
    {children}
  </Section>
);

export default EmailHeader;
