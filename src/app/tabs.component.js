export const tabsComponent = {
  selector: 'appTabs',
  templateUrl: '/tabs.component.html',
  controller: TabsCtrl,
};

class TabsCtrl {
  static $inject = ['$scope'];
  $digestCount = 0;

  constructor($scope) {
    this.$digestCount = 0;
    $scope.$watch(() => {
      this.$digestCount++;
      if (this.$digestCount % 100 === 0) {
        console.log('$digest', this.$digestCount);
      }
    });
  }
}
