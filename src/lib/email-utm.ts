import { routes } from "./config";

// UTM 参数配置
export const emailUtmConfig = {
  // 公共固定参数
  source: "email_system",
  medium: "email",
  campaign: "user_recall",
} as const;

// 邮件类型常量
export const EMAIL_TYPES = {
  /** 验证邮箱 */
  VERIFY: "verify",
  /** 欢迎到 */
  WELCOME_TO: "welcome",
  /** 优惠折扣 */
  PREMIUM_DISCOUNTS: "premium",
  /** 新消息召回 */
  NMR: "nmr",
  /** 二次召回 */
  SR: "sr",
  /** 兴趣召回 */
  FIN: "fin",
  /** 通用想念召回 */
  GMY: "gmy",
  /** 支付失败 */
  PAY_FAILED: "pay_fail",
  /** 支付成功 */
  PAY_COMPLETED: "pay_success",
} as const;

// 邮件类型的类型定义
export type EmailType = (typeof EMAIL_TYPES)[keyof typeof EMAIL_TYPES];

// 标准UTM参数接口
export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

// 自定义参数接口
export interface CustomParams {
  source: string;
  uid: string;
  character_id: string;
  [key: string]: string | undefined;
}

// 邮件链接参数（UTM + 自定义参数）
export interface EmailLinkParams extends UtmParams, CustomParams {}

/**
 * 为邮件链接添加UTM参数和自定义参数
 * @param baseUrl 基础URL
 * @param params UTM参数和自定义参数
 * @returns 带参数的完整URL
 */
export function addEmailUtmParams(
  baseUrl: string,
  params: EmailLinkParams = {} as EmailLinkParams
): string {
  try {
    const url = new URL(baseUrl);

    // 添加公共UTM参数
    url.searchParams.set("utm_source", emailUtmConfig.source);
    url.searchParams.set("utm_medium", emailUtmConfig.medium);
    url.searchParams.set("utm_campaign", emailUtmConfig.campaign);

    // 添加所有参数（UTM和自定义）
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch (error) {
    // 如果URL解析失败，返回原始URL
    console.warn("Failed to parse URL for UTM params:", baseUrl, error);
    return baseUrl;
  }
}

/**
 * 为邮件模板创建带UTM参数的路由链接
 * @param routeKey routes对象中的键
 * @param params UTM参数和自定义参数
 * @returns 带参数的完整URL
 */
export function createEmailRoute(
  routeKey: keyof typeof routes,
  params: EmailLinkParams = {} as EmailLinkParams
): string {
  const baseUrl = routes[routeKey];
  return addEmailUtmParams(baseUrl, params);
}

/**
 * 验证邮件链接
 */
export function createVerifyEmailLink(
  character_id: string,
  userId: string
): string {
  return createEmailRoute("emailConfirmation", {
    utm_content: "verify_email_button",
    source: "email_verify",
    uid: userId,
    character_id,
  });
}

/**
 * 首页页面链接
 */
export function createHomeLink({
  utmContent,
  emailType,
  character_id,
  userId,
}: {
  utmContent: string;
  emailType: EmailType;
  character_id: string;
  userId: string;
}): string {
  return createEmailRoute("home", {
    utm_content: utmContent, // `${emailType}-header_logo`,
    source: `email_recall_${emailType}`,
    uid: userId,
    character_id,
  });
}

/**
 * 聊天页面链接
 * 特殊处理：/chats/character_secret 格式
 */
export function createChatLink({
  utmContent,
  emailType,
  character_id,
  rSecret,
  userId,
}: {
  utmContent: string;
  emailType: EmailType;
  character_id: string;
  rSecret: string;
  userId: string;
}): string {
  // 构造特殊的聊天路径：/chats/character_secret
  const chatUrl = `${routes.chat}/${rSecret}`;

  return addEmailUtmParams(chatUrl, {
    utm_content: utmContent,
    source: `email_recall_${emailType}`,
    uid: userId,
    character_id,
  });
}

/**
 * 隐私政策链接
 */
export function createPrivacyLink({
  utmContent,
  emailType,
  character_id,
  userId,
}: {
  utmContent: string;
  emailType: EmailType;
  character_id: string;
  userId: string;
}): string {
  return createEmailRoute("privacy", {
    utm_content: utmContent,
    source: `email_recall_${emailType}`,
    uid: userId,
    character_id,
  });
}

/**
 * 退款政策链接
 */
export function createRefundLink({
  utmContent,
  emailType,
  character_id,
  userId,
}: {
  utmContent: string;
  emailType: EmailType;
  character_id: string;
  userId: string;
}): string {
  return createEmailRoute("refund", {
    utm_content: utmContent,
    source: `email_recall_${emailType}`,
    uid: userId,
    character_id,
  });
}

/**
 * 安全指南链接
 */
export function createSafetyLink({
  utmContent,
  emailType,
  character_id,
  userId,
}: {
  utmContent: string;
  emailType: EmailType;
  character_id: string;
  userId: string;
}): string {
  return createEmailRoute("safety", {
    utm_content: utmContent,
    source: `email_recall_${emailType}`,
    uid: userId,
    character_id,
  });
}

/**
 * 支持页面链接
 */
export function createSupportLink({
  utmContent,
  emailType,
  character_id,
  userId,
}: {
  utmContent: string;
  emailType: EmailType;
  character_id: string;
  userId: string;
}): string {
  return createEmailRoute("support", {
    utm_content: utmContent,
    source: `email_recall_${emailType}`,
    uid: userId,
    character_id,
  });
}

/**
 * 条款链接
 */
export function createTermsLink({
  utmContent,
  emailType,
  character_id,
  userId,
}: {
  utmContent: string;
  emailType: EmailType;
  character_id: string;
  userId: string;
}): string {
  return createEmailRoute("terms", {
    utm_content: utmContent,
    source: `email_recall_${emailType}`,
    uid: userId,
    character_id,
  });
}

/**
 * 取消订阅链接
 */
export function createUnsubscribeLink({
  utmContent,
  emailType,
  character_id,
  userId,
}: {
  utmContent: string;
  emailType: EmailType;
  character_id: string;
  userId: string;
}): string {
  return createEmailRoute("unsubscribe", {
    utm_content: utmContent,
    source: `email_recall_${emailType}`,
    uid: userId,
    character_id,
  });
}

/**
 * @deprecated 为了向后兼容保留，建议使用独立的函数
 * 邮件模板专用的UTM参数生成器
 */
export const emailUtmBuilder = {
  verifyEmail: createVerifyEmailLink,
  chat: createChatLink,
  support: createSupportLink,
  unsubscribe: createUnsubscribeLink,
  privacy: createPrivacyLink,
  refund: createRefundLink,
  safety: createSafetyLink,
  terms: createTermsLink,
};
