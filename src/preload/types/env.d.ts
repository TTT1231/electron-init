import type { IPreloadEnvConfig } from '@shared/utils/env/type';

/**
 * preload 进程的环境变量类型声明
 *
 * preload 进程运行在介于主进程和渲染进程之间的环境中
 * 它可以访问主进程的环境变量（不含 VITE_ 前缀）
 * 也可以访问渲染进程的环境变量（含 VITE_ 前缀）
 */
declare global {
   namespace NodeJS {
      interface ProcessEnv extends IPreloadEnvConfig {}
   }
}

export {};
