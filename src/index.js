// https://github.com/zloirock/core-js#commonjs-api
// polyfill only stable `core-js` features - ES and web standards:
import "core-js/stable";

import angular from 'angular';
import registerDirectives from './directives';

// global styles
import './assets/scss/main.scss';

/* if ( TEST_MODE ) {
    require('angular-mocks/angular-mocks');
} */

const ngModule = angular.module('app', []);
registerDirectives(ngModule);

// register all components globally
// TODO: make into re-usable function that accepts regex
// TODO: should we just make this find all JS files for now?
const angularComponents = require.context('@', true, /\.component\.js$/);
angularComponents.keys().forEach(fileName => {
    // this acts as a dynamic 'import' for each found file
    // assumption is that each file has `angular.module(...).component(...)` inside
    angularComponents(fileName);
});

export { ngModule };