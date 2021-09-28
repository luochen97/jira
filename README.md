# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# jira

**引入文件路径直接写绝对路径**
需要在 tsconfig.json 文件中配置"baseUrl": "./src"
**格式化配置**

- 安装文件：npm install --save-dev --save-exact prettier
- 生成配置文件： echo {}> .prettierrc.json
- 创建文件：.prettierignore

```
# Ignore artifacts:
build
coverage
```

- 配置自动格式化
  - 配置 pre-commit npx mrm@2 lint-staged
  - 在 package.json 中的"lint-staged"中配置"\*.{js,css,md,ts,tsx}": "prettier --write"
  - 执行 npm install eslint-config-prettier -D
  - "eslintConfig"增加"prettier"
- 规范化 commit
  - npm install --save-dev @commitlint/{config-conventional,cli}
  - echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
  - npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
- 增加本地数据 mock
  - npm install json-server -D
  - 本地配置数据 **project_mock**/db.json
  - package.json scripts 新增配置 "mock": "json-server **project_mock**/db.json --watch -p 3030"
  - npm run mock
- React 相关知识
  - useState
  - useEffect
  - 组件间传值
  - 环境配置
  -
