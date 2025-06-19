// 邮件模板列表 - 用于 Cloudflare Pages 边缘环境
export const emailTemplates = [
  "p1.verify-email",
  "p2.welcome-to",
  "p3.premium-discounts",
  "p6.recall-new-message",
  "p7.recall-hotselfie",
  "p8.recall-interesting",
  "p8.s1.recall-unread",
  "p9.pay-failed",
  "p9.s1.pay-completed",
] as const;

export type EmailTemplate = (typeof emailTemplates)[number];

// 可选：导出所有邮件组件的类型定义
export type EmailComponentModule = {
  default: React.ComponentType<unknown>;
  bePlaceHolder: unknown;
  beRender: unknown;
};
