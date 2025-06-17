import React from "react";
import { Button, Section } from "@react-email/components";

interface EmailButtonProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: "outline" | "primary";
}

const buttonWrapper = {
  padding: "12px",
  textAlign: "center" as const,
  width: "auto",
  minWidth: "180px",
  margin: "0 0 0 0",
  borderRadius: 12,
  background: "#FFF",
  boxShadow: "0px 0px 12px 0px rgba(169, 49, 206, 0.60)",
  cursor: "pointer" as const,
  color: "#070D1B",
};

const outlineButtonWrapper = {
  color: "#FFF",
  background: "transparent",
  border: "1px solid #FFF",
};

const defaultButtonStyle = {
  color: "inherit",
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px",
};

export const EmailButton = ({
  href,
  children,
  style,
  type = "primary",
}: EmailButtonProps) => (
  <Section
    style={{
      ...buttonWrapper,
      ...(type === "outline" ? outlineButtonWrapper : {}),
      ...style,
    }}
  >
    <Button href={href} style={{ ...defaultButtonStyle }}>
      {children}
    </Button>
  </Section>
);

export default EmailButton;
