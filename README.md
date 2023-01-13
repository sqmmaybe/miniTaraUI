# miniTaraUI
miniTaraUI for vue3.0

# 开发分支
release

# 合并分支
merge request

# 技术选型

Vue3.0 + TypeScript + Vite + Monorepo + pnpm

# 项目搭建

## npm init pnpm -g (node version > 16)
## pnpm init
## 生成 .npmrc文件
```js
    touch .npmrc
    shamefully-hoist = true
```

## 配置monorepo
```js
    touch pnpm-workspace.yaml
    packages:
        - 'packages/**'  // packages文件夹存放我们开发的包
        - 'examples'  // examples用来调试我们的组件
```

## 安装依赖
```js
    pnpm i vue@next typescript less -D -w
```

## 配置tsconfig.json
```js
    npx tsc --init
```

## 配置examples运行环境
- cd /packages/examples


# 项目启动
pnpm i

pnpm run build

cd packages/examples && pnpm i tara-ui && pnpm run dev









