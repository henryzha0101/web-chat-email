"use client";

import React, { useState } from "react";
import HtmlActions from "@/components/HtmlActions";

interface EmailPreviewClientProps {
  mockDataHtml: string;
  placeholderHtml: string;
  mockDataPreview: React.ReactNode;
  placeholderPreview: React.ReactNode;
  slug: string;
}

export default function EmailPreviewClient({
  mockDataHtml,
  placeholderHtml,
  mockDataPreview,
  placeholderPreview,
  slug,
}: EmailPreviewClientProps) {
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  const currentHtml = usePlaceholder ? placeholderHtml : mockDataHtml;
  const currentPreview = usePlaceholder ? placeholderPreview : mockDataPreview;
  const currentMode = usePlaceholder ? "placeholder" : "mockdata";

  const handleToggle = () => {
    setUsePlaceholder(!usePlaceholder);
  };

  return (
    <>
      {/* Preview Section */}
      {/* <div className=""> */}
      <div className="sticky top-0 flex items-center justify-between mb-2 bg-[#070D1B] p-3">
        <h2 className="text-lg font-semibold text-gray-100">
          📧 Email Preview
        </h2>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 text-sm rounded border transition-colors cursor-pointer ${
            usePlaceholder
              ? "bg-blue-100 text-blue-700 border-blue-300"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {usePlaceholder ? "🔧 Placeholder" : "🎭 Mock Data"}
        </button>
      </div>
      <div className="border p-4 border-gray-300">{currentPreview}</div>
      {/* </div> */}

      {/* HTML Section */}
      {/* <div> */}
      <div className="sticky top-0 flex items-center justify-between gap-2 bg-[#070D1B] p-3">
        <h2 className="text-lg font-semibold text-gray-100">
          🔍 Rendered HTML By {currentMode}
        </h2>
        <HtmlActions html={currentHtml} filename={`${slug}-${currentMode}`} />
      </div>
      <pre className="bg-gray-100 p-4 overflow-x-auto text-sm whitespace-pre-wrap">
        {currentHtml}
      </pre>
      {/* </div> */}
    </>
  );
}
