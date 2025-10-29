import type { IMainEnvConfig } from '@shared/utils/env/type';

/**
 * 主进程的环境变量类型声明
 *
 * 主进程运行在Node.js环境中，可以访问所有的process.env变量
 * 包括基础环境变量和主进程特有的环境变量
 */
declare global {
   namespace NodeJS {
      interface ProcessEnv extends IMainEnvConfig {}
   }
}

export {};
