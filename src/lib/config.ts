export const websiteName = "AIGF.BEST";
export const websiteUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://bestaigirlfriend.app";
export const websiteLogo = "https://bestaigirlfriend.app/logo.png";
export const supportEmail = "support@aigf.best";

export const staticAssetsPrefix = process.env.NEXT_PUBLIC_STATIC_PREFIX || "";

export const socialMedia = {
  twitter: "https://x.com/LustyAIChat",
};

export const routes = {
  emailConfirmation: `${websiteUrl}/email-confirmation`,
  chat: `${websiteUrl}/chat`,
  terms: `${websiteUrl}/terms`,
  support: `${websiteUrl}/support`,
  unsubscribe: `${websiteUrl}/unsubscribe`,
  supportEmail: `mailto:${supportEmail}`,
};
