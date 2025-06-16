import React from "react";
import { Button } from "@react-email/components";

interface EmailButtonProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const defaultButtonStyle = {
  display: "inline-flex",
  width: "auto",
  minWidth: "180px",
  padding: "12px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 12,
  background: "#FFF",
  boxShadow: "0px 0px 12px 0px rgba(169, 49, 206, 0.60)",
  color: "#070D1B",
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px",
};

export const EmailButton = ({ href, children, style }: EmailButtonProps) => (
  <Button href={href} style={{ ...defaultButtonStyle, ...style }}>
    {children}
  </Button>
);

export default EmailButton;
