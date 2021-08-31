# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.  
`yarn create vite vue-vite-admin --template vue-ts`

[Vben Admin](https://anncwb.github.io/vue-vben-admin-doc/) 一个开箱即用的前端框架  
[vue-vben-admin-thin](https://github.com/anncwb/vben-admin-thin-next)  

## Project Setup

`$ yarn add eslint eslint-plugin-vue eslint-define-config -D`  
`$ yarn add prettier eslint-plugin-prettier -D`  
`eslint`: ESLint 本體  
`eslint-plugin-vue`: 提供 Vue Style Guide  
`prettier`: Prettier 本體  
`eslint-plugin-prettier`: 整合 ESLint 與 Prettier 的規則  

`CTRL + SHIFT + F`  

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

### Better

統一登入錯誤訊息，無論任何欄位錯誤皆顯示相同訊息。如: 帳號或密碼錯誤，避免攻擊者能藉由錯誤訊息進行暴力破解
