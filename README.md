## Test Webpack 4.0.0-beta.1

```
npm install --save-dev react react-dom @types/react @types/react-dom webpack@next webpack-cli
```

- [x] .js
- [ ] .jsx
- [x] .ts
- [ ] .tsx
- [ ] `require("images/logo.png")`

## Start

```
node ./node_modules/webpack/bin/webpack.js --mode development src/index.js
node ./node_modules/webpack/bin/webpack.js --mode development src/index.ts
node ./node_modules/webpack/bin/webpack.js --mode development src/index.tsx
```