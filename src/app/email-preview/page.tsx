// src/app/email-preview/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";

export default function EmailPreviewHome() {
  const emailDir = path.join(process.cwd(), "src", "emails");
  const files = fs
    .readdirSync(emailDir)
    .filter((file) => file.endsWith(".tsx"));

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">📧 Email Preview</h1>
      <ul className="list-disc list-inside">
        {files.map((file) => {
          const name = file.replace(".tsx", "");
          return (
            <li key={name}>
              <Link
                href={`/email-preview/${name}`}
                className="text-blue-600 underline"
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
