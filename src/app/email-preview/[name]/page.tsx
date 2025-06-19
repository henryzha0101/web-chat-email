import { render } from "@react-email/render";
import EmailPreviewClient from "@/components/pages/EmailPreviewClient";
import { emailTemplates } from "@/emails";

// export const runtime = "edge"; // 使用Edge Runtime，适用于 Cloudflare Pages
// 
export default async function EmailPreview({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name: slug } = await params;

  try {
    // const filePath = path.join(process.cwd(), "src/emails", `${slug}.tsx`);

    // 动态加载组件
    const {
      default: EmailComponent,
      bePlaceHolder,
      beRender,
    } = await import(`@/emails/${slug}`);

    // 在服务端预渲染两种状态的HTML和组件
    const mockDataHtml = await render(<EmailComponent data={beRender} />, {
      pretty: true,
    });
    const placeholderHtml = await render(
      <EmailComponent data={bePlaceHolder} />,
      {
        pretty: true,
      }
    );

    // 预渲染组件用于预览
    const mockDataPreview = (
      <EmailComponent data={beRender} className="w-full" />
    );
    const placeholderPreview = (
      <EmailComponent data={bePlaceHolder} className="w-full" />
    );

    // const emailDir = path.join(process.cwd(), "src/emails");
    // const files = fs.readdirSync(emailDir).filter((f) => f.endsWith(".tsx"));
    // 使用静态导出的邮件模板列表，适用于 Cloudflare Pages 边缘环境
    const files = emailTemplates.map((template) => `${template}.tsx`);

    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-60 border-r p-4 space-y-2 bg-gray-100">
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
        <main className="flex-1 px-6 overflow-y-auto">
          <h1 className="sticky top-0 text-xl font-bold text-gray-100 p-3 bg-[#070D1B]">
            Template: {slug}
          </h1>
          <EmailPreviewClient
            mockDataHtml={mockDataHtml}
            placeholderHtml={placeholderHtml}
            mockDataPreview={mockDataPreview}
            placeholderPreview={placeholderPreview}
            slug={slug}
          />
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
