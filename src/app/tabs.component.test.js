describe('TabsCtrl', () => {
  let $componentController;
  let scope;

  beforeEach(angular.mock.module('AngularJSApp'));
  beforeEach(
    angular.mock.inject((_$componentController_, $rootScope) => {
      scope = $rootScope.$new(true);
      $componentController = _$componentController_;
    })
  );

  it('should be defined', () => {
    const ctrl = $componentController('appTabs', { $scope: scope }, { $digestCount: 0 });
    scope.$watch('ctrl.$digestCount', () => ctrl.$digestCount++);

    expect(ctrl.$digestCount).toEqual(0);

    scope.$apply();

    expect(ctrl.$digestCount).toEqual(1);
  });
});
