import React from "react";
import { Html, Head, Body, Preview, Container } from "@react-email/components";
import { body as defaultBodyStyle, container } from "@/emails/_styles/common";

interface EmailContainerProps {
  title?: string;
  preview?: string;
  bodyStyle?: React.CSSProperties;
  children: React.ReactNode;
}

const EmailContainer = ({
  title = "Email",
  preview,
  bodyStyle,
  children,
}: EmailContainerProps) => (
  <Html lang="en" dir="ltr">
    <Head>
      <title>{title}</title>
    </Head>
    <Body style={{ ...defaultBodyStyle }}>
      {preview && <Preview>{preview}</Preview>}

      <Container style={{ ...container, ...bodyStyle }}>{children}</Container>
    </Body>
  </Html>
);

export default EmailContainer;
