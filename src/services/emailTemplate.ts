// 邮件模板API服务层

export interface TemplateItem {
  id: number;
  name: string;
  content: string;
  is_deleted: number;
  created_at: string;
  updated_at: string;
}

export interface TemplateListResponse {
  total: number;
  pageNo: number;
  pageSize: number;
  data: TemplateItem[];
}

export interface CreateTemplateRequest {
  name: string;
  content: string;
  theme: string;
}

export interface UpdateTemplateRequest {
  id: number;
  name: string;
  content: string;
  theme: string;
}

export interface ApiResponse<T = unknown> {
  msg?: string;
  data?: T;
  code?: number;
}

/**
 * 邮件模板API服务类
 */
export class EmailTemplateService {
  private static readonly BASE_URL = process.env.NEXT_PUBLIC_HTTPBASEURL_WEB;

  /**
   * 获取模板列表
   */
  static async getTemplateList(
    pageNo = 1,
    pageSize = 10
  ): Promise<ApiResponse<TemplateListResponse>> {
    const url = new URL(`/api/email/v1/template/list`, this.BASE_URL);
    url.searchParams.set("pageNo", pageNo.toString());
    url.searchParams.set("pageSize", pageSize.toString());

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`获取模板列表失败: HTTP ${response.status}`);
    }

    return response.json();
  }

  /**
   * 创建新模板
   */
  static async createTemplate(
    request: CreateTemplateRequest
  ): Promise<ApiResponse<TemplateItem>> {
    const response = await fetch(
      `${this.BASE_URL}/api/email/v1/template/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.msg || `创建模板失败: HTTP ${response.status}`);
    }

    return response.json();
  }

  /**
   * 更新模板
   */
  static async updateTemplate(
    request: UpdateTemplateRequest
  ): Promise<ApiResponse<TemplateItem>> {
    const response = await fetch(
      `${this.BASE_URL}/api/email/v1/template/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.msg || `更新模板失败: HTTP ${response.status}`);
    }

    return response.json();
  }

  /**
   * 检查模板是否存在
   */
  static async findTemplateByName(name: string): Promise<TemplateItem | null> {
    try {
      const response = await this.getTemplateList(1, 100); // 获取足够多的数据
      return (
        response.data?.data?.find((template) => template.name === name) || null
      );
    } catch (error) {
      console.error("查找模板失败:", error);
      throw error;
    }
  }

  /**
   * 智能同步模板（自动判断创建或更新）
   */
  static async syncTemplate(
    templateName: string,
    templateContent: string,
    templateTheme: string
  ): Promise<{ action: "create" | "update"; data: TemplateItem }> {
    try {
      // 1. 检查模板是否已存在
      const existingTemplate = await this.findTemplateByName(templateName);

      // return {
      //   action: "create",
      //   data: {
      //     id: 1,
      //     name: templateName,
      //     content: templateContent,
      //     is_deleted: 0,
      //     created_at: new Date().toISOString(),
      //     updated_at: new Date().toISOString(),
      //   },
      // };
      if (existingTemplate) {
        // 2a. 更新现有模板
        const result = await this.updateTemplate({
          id: existingTemplate.id,
          name: templateName,
          content: templateContent,
          theme: templateTheme,
        });

        return {
          action: "update",
          data: result.data || existingTemplate,
        };
      } else {
        // 2b. 创建新模板
        const result = await this.createTemplate({
          name: templateName,
          content: templateContent,
          theme: templateTheme,
        });

        return {
          action: "create",
          data: result.data!,
        };
      }
    } catch (error) {
      console.error("同步模板失败:", error);
      throw error;
    }
  }
}
