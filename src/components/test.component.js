import angular from 'angular';

angular.module('app').component('testComponent', {
    controllerAs: 'vm',
    controller: TestComponent,
    template: `<div>Testing</div>`,
    bindings: {},
});

function TestComponent($log) {
    const vm = this;

    //debugger;
    vm.$onInit = () => {
        $log.info('test-component init...');
    };
}