# XLTS for AngularJS with Webpack

XLTS for AngularJS, Webpack 5, Babel 7, ES6 modules, Karma, HMR (Hot Module Reload) enabled

## Features

- [XLTS for AngularJS](https://xlts.dev/angularjs)
- Webpack 5
- Babel 7
- CoreJS
- SASS support
- Source mapping
- ngAnnotate support
- HMR (Hot Module Reload) support via Babel plugin
- ESLint
- Husky + lint-staged + Prettier

## Getting Started

Make sure you have configured your authentication with the XLTS.dev registry via:

- supplying the token in the `.npmrc` file in your user home directory
- logging into the registry via the npm CLI

```
npm install
```

## Running the project

For development

```
npm start
```

For production

```
npm run build
```

For running the unit tests once

```
npm run test:unit:single
```

For running the unit tests in watch mode

```
npm run test:unit:watch
```

For linting

```
npm run lint
```

For e2e testing

```
npm run test:e2e
```

For running all checks/tests for the app (lint, unit and e2e tests)

```
npm test
```

For running production locally

```
npm run start:prod-local
```
