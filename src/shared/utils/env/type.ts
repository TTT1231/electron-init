//基础环境变量配置类型
export interface IBaseEnvConfig {
   readonly NODE_ENV: 'development' | 'production';
}

//主进程环境变量配置类型
export interface IMainEnvConfig extends IBaseEnvConfig {
   readonly testNodeEnv: string;
}

//渲染进程环境变量配置类型
export interface IRendererEnvConfig extends IBaseEnvConfig {
   readonly VITE_Nihao: string;
}

//Preload进程环境变量配置类型
export interface IPreloadEnvConfig extends IMainEnvConfig, IRendererEnvConfig {}
