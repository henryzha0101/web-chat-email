"use client";

import React, { useState, useEffect } from "react";
import HtmlActions from "@/components/HtmlActions";
import TemplateSyncButton, {
  SyncStatusMessage,
  SyncStatus,
} from "@/components/TemplateSyncButton";
import { EmailTemplateService } from "@/services/emailTemplate";

interface EmailPreviewClientProps {
  mockDataHtml: string;
  placeholderHtml: string;
  mockDataPreview: React.ReactNode;
  placeholderPreview: React.ReactNode;
  slug: string;
  bePlaceHolder: Record<string, unknown>;
  bePlaceHolderComments: Record<string, string>;
  beTemplateTheme: string;
}

export default function EmailPreviewClient({
  mockDataHtml,
  placeholderHtml,
  mockDataPreview,
  placeholderPreview,
  slug,
  bePlaceHolder,
  bePlaceHolderComments,
  beTemplateTheme,
}: EmailPreviewClientProps) {
  const [usePlaceholder, setUsePlaceholder] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>({
    loading: false,
    success: null,
    message: "",
    isSynced: false,
    isChecking: true,
  });

  const currentHtml = usePlaceholder ? placeholderHtml : mockDataHtml;
  const currentPreview = usePlaceholder ? placeholderPreview : mockDataPreview;
  const currentMode = usePlaceholder ? "placeholder" : "mockdata";

  // 获取清理后的模板名称
  const templateNameArray = slug.split(".");
  const templateNameWithoutPrefix = templateNameArray.at(-1) || slug;

  // 组件挂载时检查同步状态
  useEffect(() => {
    const checkSyncStatus = async () => {
      try {
        setSyncStatus({
          loading: false,
          success: null,
          message: "",
          isSynced: false,
          isChecking: true,
        });

        const existingTemplate = await EmailTemplateService.findTemplateByName(
          templateNameWithoutPrefix
        );

        if (existingTemplate) {
          setSyncStatus({
            loading: false,
            success: true,
            message: `✅ 模板 "${templateNameWithoutPrefix}" 已同步`,
            isSynced: true,
            isChecking: false,
          });
        } else {
          setSyncStatus({
            loading: false,
            success: null,
            message: "",
            isSynced: false,
            isChecking: false,
          });
        }
      } catch (error) {
        console.error("检查同步状态失败:", error);
        setSyncStatus({
          loading: false,
          success: null,
          message: "",
          isSynced: false,
          isChecking: false,
        });
      }
    };

    checkSyncStatus();
  }, [templateNameWithoutPrefix]);

  const handleToggle = () => {
    setUsePlaceholder(!usePlaceholder);
  };

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleSyncStatusChange = (status: SyncStatus) => {
    setSyncStatus(status);
  };

  // 获取同步状态指示器
  const getSyncStatusIndicator = () => {
    if (syncStatus.isChecking) {
      return (
        <span className="px-2 py-1 text-xs bg-gray-600 text-gray-300 rounded flex items-center gap-1">
          <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          检查中
        </span>
      );
    }

    if (syncStatus.isSynced) {
      return (
        <span className="px-2 py-1 text-xs bg-green-800 text-green-200 rounded flex items-center gap-1">
          <span>✓</span>
          已同步
        </span>
      );
    }

    return (
      <span className="px-2 py-1 text-xs bg-orange-800 text-orange-200 rounded flex items-center gap-1">
        <span>⚠</span>
        未同步
      </span>
    );
  };

  return (
    <>
      {/* Preview Section */}
      <div className="sticky top-0 flex items-center justify-between mb-2 bg-[#070D1B] p-3">
        <h2 className="text-lg font-semibold text-gray-100">
          📧 Email Preview ({currentMode})
        </h2>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 text-sm rounded border transition-colors cursor-pointer ${
            usePlaceholder
              ? "bg-blue-100 text-blue-700 border-blue-300"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {usePlaceholder ? "🎭 Mock Data" : "🔧 Placeholder"}
        </button>
      </div>
      <div className="border p-4 border-gray-300">{currentPreview}</div>

      {/* Template Parameters Section */}
      <div className="sticky top-0 flex items-center justify-between mb-2 bg-[#070D1B] p-3">
        <h2 className="text-lg font-semibold text-gray-100">
          🏷️ Template Parameters
        </h2>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded">
            {Object.keys(bePlaceHolder).length} parameters
          </span>
        </div>
      </div>

      {/* URL编码提示 */}
      <div className="mx-3 mb-4 p-3 bg-amber-900 text-amber-200 border border-amber-700 rounded-lg text-sm">
        <div className="flex items-start gap-2">
          <span className="text-amber-400 text-lg flex-shrink-0">⚠️</span>
          <div>
            <strong>重要提示：</strong>当参数出现在 href 属性中时，会被URL编码：
            <br />
            <code className="mx-1 px-2 py-1 bg-amber-800 rounded text-amber-100">
              {`{{userId}}`}
            </code>
            →
            <code className="mx-1 px-2 py-1 bg-amber-800 rounded text-amber-100">
              %7B%7BuserId%7D%7D
            </code>
            <br />
            <span className="text-amber-300">
              请确保模板替换时同时处理这两种形式，避免遗漏。
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.entries(bePlaceHolder).map(([key, value]) => (
            <div
              key={key}
              className="bg-gray-800 rounded p-3 border border-gray-600"
            >
              <div className="flex flex-col gap-3">
                {/* 原始参数 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 font-mono text-sm font-semibold">
                      {key}:
                    </span>
                    <span
                      className="text-green-400 font-mono text-sm break-all cursor-pointer hover:bg-gray-700 px-1 py-0.5 rounded transition-colors relative group"
                      onClick={() => copyToClipboard(String(value), key)}
                      title="点击复制原始参数到剪切板"
                    >
                      {String(value)}
                      {copiedKey === key ? (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                          已复制!
                        </span>
                      ) : (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          点击复制
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* URL编码版本 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 font-mono text-xs font-semibold">
                      URL编码:
                    </span>
                    <span
                      className="text-orange-300 font-mono text-xs break-all cursor-pointer hover:bg-gray-700 px-1 py-0.5 rounded transition-colors relative group"
                      onClick={() =>
                        copyToClipboard(
                          encodeURIComponent(String(value)),
                          `${key}-encoded`
                        )
                      }
                      title="点击复制URL编码版本到剪切板"
                    >
                      {encodeURIComponent(String(value))}
                      {copiedKey === `${key}-encoded` ? (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                          已复制!
                        </span>
                      ) : (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          点击复制
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* 参数注释 */}
                {bePlaceHolderComments[key] && (
                  <div className="text-gray-400 text-xs italic pt-1 border-t border-gray-600">
                    💬 {bePlaceHolderComments[key]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Template Theme Section */}
      <div className="sticky top-0 flex items-center justify-between mb-2 bg-[#070D1B] p-3">
        <h2 className="text-lg font-semibold text-gray-100">
          🎨 Template Theme
        </h2>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-sm bg-purple-800 text-purple-200 rounded font-mono">
            {beTemplateTheme}
          </span>
        </div>
      </div>
      {/* HTML Section */}
      <div className="sticky top-0 flex items-center justify-between gap-2 bg-[#070D1B] p-3">
        <h2 className="text-lg font-semibold text-gray-100">
          🔍 Rendered HTML ({currentMode})
        </h2>
        <div className="flex items-center gap-2">
          {getSyncStatusIndicator()}
          {usePlaceholder && (
            <TemplateSyncButton
              templateName={slug}
              templateContent={currentHtml}
              templateTheme={beTemplateTheme}
              onStatusChange={handleSyncStatusChange}
              initialStatus={syncStatus}
            />
          )}
        </div>
        <HtmlActions html={currentHtml} filename={`${slug}-${currentMode}`} />
      </div>
      {/* Sync Status Message */}
      {syncStatus.message && (
        <div className="mx-3 mb-2">
          <SyncStatusMessage status={syncStatus} />
        </div>
      )}
      <pre className="bg-gray-100 p-4 overflow-x-auto text-sm whitespace-pre-wrap">
        {currentHtml}
      </pre>
    </>
  );
}
