import { z } from 'zod';

/**
 * 基础环境变量 Schema（所有进程共享）
 */
const baseEnvValidateSchema = z.object({
   NODE_ENV: z.enum(['development', 'production']).default('development'),
});

/**
 * 主进程专用环境变量 Schema（不包含 VITE_ 前缀）
 */
const mainEnvValidateSchema = baseEnvValidateSchema.extend({
   testNodeEnv: z.string().min(1, '测试环境变量不能为空'),
});

/**
 * 渲染进程专用环境变量 Schema（VITE_ 前缀）
 */
const rendererEnvValidateSchema = baseEnvValidateSchema.extend({
   VITE_Nihao: z.string().min(1, 'VITE_Nihao不能为空'),
});

/**
 * Preload 进程环境变量 Schema（继承主进程和渲染进程）
 */
const preloadEnvValidateSchema = mainEnvValidateSchema.extend(rendererEnvValidateSchema.shape);

export type EnvConfig = z.infer<typeof preloadEnvValidateSchema>;
export const allEnvSchemas = preloadEnvValidateSchema;
