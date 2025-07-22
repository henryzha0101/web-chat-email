"use client";

import React, { useState, useEffect } from "react";
import { EmailTemplateService } from "@/services/emailTemplate";

interface TemplateSyncButtonProps {
  templateName: string;
  templateContent: string;
  templateTheme: string;
  className?: string;
  onStatusChange?: (status: SyncStatus) => void;
  initialStatus?: SyncStatus; // 新增：接受外部状态
}

export interface SyncStatus {
  loading: boolean;
  success: boolean | null;
  message: string;
  isSynced?: boolean; // 新增：标识是否已同步
  isChecking?: boolean; // 新增：标识是否正在检查状态
}

export default function TemplateSyncButton({
  templateName,
  templateContent,
  templateTheme,
  className = "",
  onStatusChange,
  initialStatus,
}: TemplateSyncButtonProps) {
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(
    initialStatus || {
      loading: false,
      success: null,
      message: "",
      isSynced: false,
      isChecking: true,
    }
  );

  const templateNameArray = templateName.split(".");
  const templateNameWithoutPrefix = templateNameArray.at(-1) || templateName;

  const updateStatus = (newStatus: SyncStatus) => {
    setSyncStatus(newStatus);
    onStatusChange?.(newStatus);
  };

  // 如果有外部状态，使用外部状态
  useEffect(() => {
    if (initialStatus) {
      setSyncStatus(initialStatus);
    }
  }, [initialStatus]);

  // 只有在没有外部状态时才自己检查同步状态
  useEffect(() => {
    if (initialStatus) return; // 如果有外部状态，跳过自己的检查

    const checkSyncStatus = async () => {
      try {
        updateStatus({
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
          updateStatus({
            loading: false,
            success: true,
            message: `✅ 模板 "${templateNameWithoutPrefix}" 已同步`,
            isSynced: true,
            isChecking: false,
          });
        } else {
          updateStatus({
            loading: false,
            success: null,
            message: "",
            isSynced: false,
            isChecking: false,
          });
        }
      } catch (error) {
        console.error("检查同步状态失败:", error);
        updateStatus({
          loading: false,
          success: null,
          message: "",
          isSynced: false,
          isChecking: false,
        });
      }
    };

    checkSyncStatus();
  }, [templateNameWithoutPrefix, initialStatus]);

  const handleSync = async () => {
    const loadingStatus = {
      loading: true,
      success: null,
      message: "正在同步...",
      isSynced: false,
      isChecking: false,
    };
    updateStatus(loadingStatus);

    try {
      const result = await EmailTemplateService.syncTemplate(
        templateNameWithoutPrefix,
        templateContent,
        templateTheme
      );

      const actionText = result.action === "create" ? "创建" : "更新";

      const successStatus = {
        loading: false,
        success: true,
        message: `✅ ${actionText}成功！模板 "${templateNameWithoutPrefix}" 已同步到后端`,
        isSynced: true,
        isChecking: false,
      };
      updateStatus(successStatus);

      // 3秒后清除成功状态，但保持已同步状态
      setTimeout(() => {
        updateStatus({
          loading: false,
          success: true,
          message: `✅ 模板 "${templateNameWithoutPrefix}" 已同步`,
          isSynced: true,
          isChecking: false,
        });
      }, 3000);
    } catch (error) {
      console.error("同步失败:", error);

      const errorStatus = {
        loading: false,
        success: false,
        message: `❌ 同步失败: ${error instanceof Error ? error.message : "未知错误"}`,
        isSynced: false,
        isChecking: false,
      };
      updateStatus(errorStatus);

      // 5秒后清除错误状态
      setTimeout(() => {
        updateStatus({
          loading: false,
          success: null,
          message: "",
          isSynced: false,
          isChecking: false,
        });
      }, 5000);
    }
  };

  // 获取按钮显示文本
  const getButtonText = () => {
    if (syncStatus.isChecking) return "检查中...";
    if (syncStatus.loading) return "同步中...";
    if (syncStatus.isSynced) return "🔄 重新同步";
    return "🔄 同步到后端";
  };

  // 获取按钮样式
  const getButtonClassName = () => {
    const baseClasses =
      "px-4 py-2 text-sm rounded border transition-all duration-200 flex items-center gap-2";

    if (syncStatus.isChecking) {
      return `${baseClasses} bg-gray-500 text-gray-200 border-gray-500 cursor-not-allowed`;
    }

    if (syncStatus.loading) {
      return `${baseClasses} bg-gray-600 text-gray-300 border-gray-600 cursor-not-allowed`;
    }

    if (syncStatus.isSynced) {
      return `${baseClasses} bg-green-600 text-white border-green-600 hover:bg-green-700`;
    }

    if (syncStatus.success === false) {
      return `${baseClasses} bg-red-600 text-white border-red-600`;
    }

    return `${baseClasses} bg-blue-600 text-white border-blue-600 hover:bg-blue-700`;
  };

  return (
    <button
      onClick={handleSync}
      disabled={syncStatus.loading || syncStatus.isChecking}
      className={`${getButtonClassName()} ${className}`}
    >
      {/* 加载动画 */}
      {(syncStatus.loading || syncStatus.isChecking) && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      )}

      {/* 已同步图标 */}
      {syncStatus.isSynced && !syncStatus.loading && !syncStatus.isChecking && (
        <span className="text-green-200">✓</span>
      )}

      <span>{getButtonText()}</span>
    </button>
  );
}

// 导出状态消息组件，便于父组件自定义显示位置
export function SyncStatusMessage({ status }: { status: SyncStatus }) {
  if (!status.message) return null;

  return (
    <div
      className={`p-3 rounded-lg text-sm ${
        status.success === true
          ? "bg-green-900 text-green-200 border border-green-700"
          : status.success === false
            ? "bg-red-900 text-red-200 border border-red-700"
            : "bg-blue-900 text-blue-200 border border-blue-700"
      }`}
    >
      {status.message}
    </div>
  );
}
