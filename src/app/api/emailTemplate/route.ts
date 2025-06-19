import { NextResponse } from "next/server";
import { render, pretty } from "@react-email/render";

// --- 步骤 1: 导入您所有的邮件组件 ---
// 在这里导入您在 `emails` 目录下创建的所有邮件模板。
// 为了演示，我们假设您有两个模板：WelcomeEmail 和 ResetPasswordEmail。
// 使用路径别名 (如 `@/emails/...`) 是一个好习惯，需要在 `tsconfig.json` 中配置。
import MyEmail from "@/components/email";
// import { WelcomeEmail } from "@/emails/welcome";
// import { ResetPasswordEmail } from "@/emails/reset-password";
import React from "react";

// --- 步骤 2: 创建一个模板名称到组件的映射 ---
// 这个对象让我们可以根据从请求中收到的字符串名称动态选择要渲染的组件。
// 键（如 'welcome'）是您在API请求中将使用的名称。
// 值是您导入的React组件。
const emailComponents = {
  myemail: MyEmail,
  // welcome: WelcomeEmail,
  // "reset-password": ResetPasswordEmail,
} as const; // 使用 'as const' 来获得更强的类型推断

// 定义一个类型，用于表示模板的名称
type TemplateName = keyof typeof emailComponents;

// --- 步骤 3: 实现POST请求处理函数 ---
// 在App Router中，API路由通过导出一个名为HTTP动词（如POST）的函数来定义。
export async function POST(request: Request) {
  try {
    // 解析请求体
    const body = await request.json();
    console.log('body', body)
    const { templateName, props } = body;

    // --- 输入验证 ---
    if (!templateName || !props) {
      return NextResponse.json(
        { message: "请求体中缺少 `templateName` 或 `props`。" },
        { status: 400 } // Bad Request
      );
    }

    if (
      typeof templateName !== "string" ||
      !emailComponents.hasOwnProperty(templateName)
    ) {
      return NextResponse.json(
        { message: `模板 "${templateName}" 不存在。` },
        { status: 404 } // Not Found
      );
    }

    // 从映射中获取对应的邮件组件
    const EmailComponent = emailComponents[templateName as TemplateName];

    // --- 渲染邮件 ---
    // 使用@react-email/render的render方法将React组件转换为HTML字符串。
    // 第二个选项 { pretty: false } 会生成压缩的HTML，更适合生产环境。
    // 在开发时可以设置为 true 以便调试。
    // const emailHtml = render(React.createElement(EmailComponent, props), {
    //   pretty: false,
    // });
    const emailHtml = await pretty(
      await render(React.createElement(EmailComponent))
      // await render(React.createElement(EmailComponent, props))
    );

    // --- 返回成功的响应 ---
    // 将渲染好的HTML作为响应体返回。
    // 注意：直接返回HTML字符串，并将Content-Type设置为'text/html'。
    return new NextResponse(emailHtml, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.error("邮件渲染API出错:", error);

    // 处理JSON解析错误等其他意外错误
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "无效的JSON请求体。" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "渲染邮件模板时发生内部服务器错误。" },
      { status: 500 }
    );
  }
}

// 备注: Next.js 19 目前还未正式发布稳定版。
// 此代码是基于最新的Next.js App Router（13.4+）稳定版的最佳实践编写的，它将与未来的版本（包括19）保持良好的兼容性。

export const runtime = "edge"; // 使用Edge Runtime