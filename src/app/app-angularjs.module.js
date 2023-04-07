import 'angular-messages';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-sanitize';
import './templates/templates';
import * as angular from 'angular';
import packageInfo from '../../package.json';
import { appAngularjsComponent } from './app-angularjs.component';
import { tabsComponent } from './tabs.component';
import { versionStampComponent } from './version-stamp.component';

const configFunction = ($mdThemingProvider, $mdGestureProvider) => {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('indigo')
    .accentPalette('green', { default: '500' })
    .backgroundPalette('grey', { default: 'A100' });
  $mdThemingProvider.setNonce(`${btoa(packageInfo.version)}`);
  $mdGestureProvider.skipClickHijack();
};
configFunction.$inject = ['$mdThemingProvider', '$mdGestureProvider'];

export const appAngularjsModule = angular
  .module('AngularJSApp', ['ngAnimate', 'ngMaterial', 'ngSanitize', 'ngAria', 'ngMessages', 'templates'])
  .config(configFunction)
  .component(appAngularjsComponent.selector, appAngularjsComponent)
  .component(versionStampComponent.selector, versionStampComponent)
  .component(tabsComponent.selector, tabsComponent);
