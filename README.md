your-electron-project/
├── src/
│ ├── main/ # 主进程代码
│ │ ├── index.ts # 主进程入口文件
│ │ ├── config/ # 配置管理
│ │ ├── windows/ # 窗口管理
│ │ ├── ipc/ # IPC通信处理
│ │ ├── menu/ # 应用菜单
│ │ ├── updater/ # 自动更新
│ │ ├── security/ # 安全策略
│ │ └── utils/ # 主进程工具函数
│ ├── preload/ # 预加载脚本
│ │ ├── index.ts # 预加载入口
│ │ ├── api.ts # API桥接
│ │ └── types # 类型定义
│ ├── renderer/ # 渲染进程代码
│ │ ├── main.ts # 渲染进程入口
│ │ ├── App.vue # 主应用组件
│ │ └── ...
│ └── shared/ # 共享代码
│ ├── types/ # 共享类型定义
│ ├── constants/ # 常量
│ └── utils/ # 共享工具函数
├── resources/ # 资源文件
├── scripts/ # 构建脚本
└── dist/ # 构建输出

## 测试主进程资源访问

```ts
import { ResourceManager } from '../shared/utils/resource-manager';

/**
 * 测试主进程中的资源访问
 */
export async function testMainProcessResources() {
   console.log('=== 测试主进程资源访问 ===');

   try {
      // 测试配置文件读取
      const config = await ResourceManager.loadSharedConfig('app-config.json');
      console.log('✅ 成功读取配置文件:', config.appName);

      // 测试路径解析
      const dataPath = ResourceManager.getSharedResourcePath('data/test.json');
      console.log('✅ 数据文件路径:', dataPath);

      const templatePath = ResourceManager.getSharedResourcePath('templates/test.html');
      console.log('✅ 模板文件路径:', templatePath);

      return {
         success: true,
         config,
         paths: { dataPath, templatePath },
      };
   } catch (error) {
      console.error('❌ 主进程资源访问失败:', error);
   }
}
```
