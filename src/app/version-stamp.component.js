export const versionStampComponent = {
  selector: 'appVersionStamp',
  template: `
    <style>
      .version-container {
        color: gray;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin: 8px;
        padding: 8px;
      }
      .version {
        font-size: 0.75em;
        font-style: italic;
      }
      .version img {
        vertical-align: top;
      }
      #version-stamp-divider {
        margin-top: 64px;
      }
    </style>

    <md-divider id="version-stamp-divider"></md-divider>
    <div class="version-container">
      <span class="version"><img src="{{ $ctrl.angularJsIcon }}" alt="" height="24px"> AngularJS v{{ $ctrl.versions.angularjs.full }} ({{ $ctrl.versions.angularjs.codeName }})</span>
      <span class="version"><img src="{{ $ctrl.angularjsMaterialIcon }}" alt="" height="24px"> AngularJS Material v{{ $ctrl.versions.md }}</span>
    </div>
  `,
  controller: VersionStampCtrl,
};

class VersionStampCtrl {
  static $inject = ['$window'];
  angularJsIcon;
  angularjsMaterialIcon;
  versions;

  constructor($window) {
    this.angularJsIcon = require('../assets/angularjs.svg');
    this.angularjsMaterialIcon = require('../assets/angularjs-material.png');
    this.versions = {
      angularjs: angular.version,
      md: $window.ngMaterial.version.full,
    };
  }
}
