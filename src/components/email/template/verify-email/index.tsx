import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Button,
} from "@react-email/components";
import { body, container } from "@/emails/_styles/common";

export const Email = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Welcome! Please confirm your email.</title>
      </Head>
      <Body style={body}>
        <Preview>
          Please confirm your email address to claim your welcome bonus
        </Preview>
        <Container style={container}>
          <Section>
            <Img
              src="https://www.datingemailing.com/content/guids/CABINET_633c7d8d36c1315d9090e9d4a2c25d1b5b793cde69a6c5bd46f6cb9ea78fb343/images/logo_1.png"
              width="160"
              alt="logo"
            />
          </Section>
          <Button href="https://example.com" style={{ color: "#61dafb" }}>
            Click me
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;
