import React from "react";
import { Section, Img } from "@react-email/components";
import { header } from "@/emails/_styles/common";

interface EmailHeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const DEFAULT_LOGO = "https://bestaigirlfriend.app/logo.png";
// "https://www.datingemailing.com/content/guids/CABINET_633c7d8d36c1315d9090e9d4a2c25d1b5b793cde69a6c5bd46f6cb9ea78fb343/images/logo_1.png";

export const EmailHeader = ({
  logoSrc = DEFAULT_LOGO,
  logoAlt = "logo",
  logoWidth = 147,
  logoHeight = 66,
  children,
  style = header,
}: EmailHeaderProps) => (
  <Section style={style}>
    <Img
      src={logoSrc}
      width={logoWidth}
      height={logoHeight}
      style={{ margin: "0 auto", objectFit: "cover" }}
      alt={logoAlt}
    />
    {children}
  </Section>
);

export default EmailHeader;
