describe('TabsCtrl', () => {
  let $componentController;
  let $rootScope;

  beforeEach(angular.mock.module('AngularJSApp'));
  beforeEach(
    angular.mock.inject((_$componentController_, _$rootScope_) => {
      $componentController = _$componentController_;
      $rootScope = _$rootScope_;
    })
  );

  it('should be defined', () => {
    const ctrl = $componentController('appTabs');
    expect(ctrl.$digestCount).toBe(0);

    $rootScope.$digest();
    // Expect `2`, because AngularJS always runs on more digest at the end to
    // to make sure there are no new changes.
    expect(ctrl.$digestCount).toBe(2);
  });
});
