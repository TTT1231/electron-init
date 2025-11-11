# 项目文档

## 项目目录结构

```js
📂 electron-init/
  📂 .vscode/              //vscode 配置文件目录
  📂 resources/            //资源目录
    📂 public/             //渲染进程资源目录
    📂 shared/             //共享资源目录
  📂 src/                  //源代码目录
    📂 main/               //主进程目录
    📂 preload/            //预加载脚本目录
    📂 renderer/           //渲染进程目录
    📂 shared/             //共享代码目录
  📄 eslint.config.mjs     //eslint 配置文件
  📄 .prettierignore       //prettiter忽略文件
  📄 .prettierrc.json      //prettiter配置文件
  📄 .editorconfig         //跨编译器配置
  📄 forge.config.ts       //forge 配置文件
  📄 forge.env.d.ts        //forge 环境变量类型定义文件
  📄 index.html            //渲染进程入口文件
  📄 package.json
  📄 .gitignore            //git 忽略文件
  📄 .npmrc                //npm 配置文件
  📄 pnpm-workspace.yaml   //pnpm 工作空间配置文件
  📄 README.md             //项目说明文档
  📄 tsconfig.json         //项目 TypeScript 配置文件
  //...
  📄 vite.renderer.config.ts     //渲染进程 Vite 配置文件
  //...
```

## Quick Start

````code-group

```ternimal
pnpm i
````

```ternimal
pnpm run dev
```

```

```
