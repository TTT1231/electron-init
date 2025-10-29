import z from 'zod';

import { allEnvSchemas, type EnvConfig } from './env-validator.schema';

//在主进程启动时，直接全部验证所有环境变量，避免多次验证
export function validateAllEnvSchemas(): void {
   try {
      allEnvSchemas.parse(process.env as EnvConfig);
   } catch (error) {
      if (error instanceof z.ZodError) {
         const rows = error.issues.map((issue, index) => ({
            序号: index + 1,
            字段: issue.path?.length ? issue.path.join('.') : '(root)',
            错误类型: issue.code,
            错误信息: issue.message,
         }));
         console.table(rows);
      } else {
         console.error('未知错误', error);
      }

      //生产和开发环境中出错直接暂停
      process.exit(1);
   }
}
