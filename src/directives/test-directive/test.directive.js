import template from './test.directive.html';
import './test.directive.scss';

export default ngModule => {
  if (TEST_MODE) {
    require('./test.directive.test').default(ngModule);
  }

  ngModule.directive('testDirective', $log => {
    return {
      restrict: 'E',
      scope: {},
      // templateUrl: 'src/directives/test.directive.html',
      template,
      controllerAs: 'vm',
      controller: function () {
        const vm = this;

        vm.text = 'Hello world.';
        $log.info('I have some info...');
      },
    };
  });
};
