export const websiteName = process.env.NEXT_PUBLIC_WEBSITE_NAME || "AIGF.BEST";
export const websiteUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://bestaigirlfriend.app";
export const websiteLogo = `${websiteUrl}/logo.png`;
export const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@aigf.best";

export const staticAssetsPrefix = process.env.NEXT_PUBLIC_STATIC_PREFIX || "";

export const socialMedia = {
  twitter: "https://x.com/LustyAIChat",
};

export const routes = {
  emailConfirmation: `${websiteUrl}/email-confirmation`,
  home: `${websiteUrl}/`,
  chat: `${websiteUrl}/chats`,
  terms: `${websiteUrl}/terms`,
  privacy: `${websiteUrl}/privacy`,
  refund: `${websiteUrl}/refund`,
  safety: `${websiteUrl}/safety`,
  support: `${websiteUrl}/support`,
  unsubscribe: `${websiteUrl}/unsubscribe`,
  supportEmail: `mailto:${supportEmail}`,
};
