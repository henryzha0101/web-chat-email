// src/app/email-preview/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";

export default function EmailPreviewHome() {
  const emailDir = path.join(process.cwd(), "src", "emails");
  const files = fs
    .readdirSync(emailDir)
    .filter((file) => file.endsWith(".tsx"));

  const previewEmailUrl = process.env.NEXT_PUBLIC_PREVIEW_EMAIL_URL ?? "";
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">📧 Email Templates</h1>
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

      {previewEmailUrl && (
        <p className="mt-4">
          <span>Preview Email URL(for a more realistic email effect): </span>
          <Link href={previewEmailUrl} className="text-blue-600 underline">
            {previewEmailUrl}
          </Link>
        </p>
      )}
    </div>
  );
}
