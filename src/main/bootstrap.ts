import dotenv from 'dotenv';

import { validateAllEnvSchemas } from '@shared/utils/env/index';

export async function bootstrap(): Promise<void> {
   // 这里可以放置任何需要在主进程启动时执行的初始化代码
   // 在应用启动前，加载 .env 文件到 process.env
   dotenv.config();

   // 验证环境变量
   validateAllEnvSchemas();
}
