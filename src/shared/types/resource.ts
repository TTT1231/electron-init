// 应用配置类型（示例）
export interface AppConfig {
   appName: string;
   version: string;
   features: {
      autoUpdate: boolean;
      analytics: boolean;
      debugMode: boolean;
   };
   api: {
      baseUrl: string;
      timeout: number;
   };
   ui: {
      theme: 'light' | 'dark';
      language: string;
   };
}
