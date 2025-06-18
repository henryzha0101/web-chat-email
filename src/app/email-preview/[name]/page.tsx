// // src/app/email-preview/[slug]/page.tsx
// import React from "react";
// import path from "path";

// export default async function EmailPreview({
//   params,
// }: {
//   params: { name: string };
// }) {
//   const { name: slug } = params;

//   try {
//     const EmailComponent = (await import(`@/emails/${slug}`)).default;

//     return (
//       <div className="p-4">
//         <h2 className="text-xl mb-4">{slug}</h2>
//         <div className="border p-4">
//           <EmailComponent />
//         </div>
//       </div>
//     );
//   } catch (error) {
//     return <p className="text-red-500">邮件组件未找到: {slug}</p>;
//   }
// }

import { render } from "@react-email/render";
import path from "path";
import fs from "fs";
// import dynamic from "next/dynamic";

export default async function EmailPreview({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name: slug } = await params;

  try {
    // const filePath = path.join(process.cwd(), "src/emails", `${slug}.tsx`);

    // 动态加载组件
    const { default: EmailComponent } = await import(`@/emails/${slug}`);

    // 渲染为 HTML
    const html = render(<EmailComponent />, {
      pretty: true,
    });

    const emailDir = path.join(process.cwd(), "src/emails");
    const files = fs.readdirSync(emailDir).filter((f) => f.endsWith(".tsx"));

    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-60 border-r p-4 space-y-2">
          <h2 className="font-bold mb-4">📬 Email List</h2>
          {files.map((file) => {
            const name = file.replace(".tsx", "");
            return (
              <div key={name}>
                <a
                  href={`/email-preview/${name}`}
                  className={`block px-2 py-1 rounded hover:bg-gray-200 ${
                    name === slug ? "bg-blue-100 font-semibold" : ""
                  }`}
                >
                  {name}
                </a>
              </div>
            );
          })}
        </aside>

        {/* Preview */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-xl font-bold mb-4">{slug}</h1>
          <div className="border p-4 mb-6">
            <EmailComponent />
          </div>

          <h2 className="text-lg font-semibold mb-2">🔍 Rendered HTML</h2>
          <pre className="bg-gray-100 p-4 overflow-x-auto text-sm whitespace-pre-wrap">
            {html}
          </pre>
        </main>
      </div>
    );
  } catch (e) {
    return (
      <p className="text-red-600">
        组件 `{slug}` 加载失败: {String(e)}
      </p>
    );
  }
}
