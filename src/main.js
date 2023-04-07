import './styles.scss';
import * as angular from 'angular';
import { appAngularjsModule } from './app/app-angularjs.module';

const rootElement = angular.element(document.body);

// Ensure AngularJS destroys itself on hot reloads.
const oldInjector = rootElement.injector();
if (oldInjector) {
  oldInjector.get('$rootScope').$destroy();
  rootElement.data('$injector', null);
}

angular.bootstrap(rootElement, [appAngularjsModule.name], { strictDi: true });
