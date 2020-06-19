export default ngModule => {
    if ( TEST_MODE ) {
        require('./test.directive.test').default(ngModule);
    }
    require('./test.directive.scss');

    ngModule.directive('testDirective', ($log) => { 
        return {
            restrict: 'E',
            scope: {},
            // templateUrl: 'src/directives/test.directive.html',
            template: require('./test.directive.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;    

                vm.text = 'Hello world.';
                $log.info('I have some info...');
            }
        };
    });
}