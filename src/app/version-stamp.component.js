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
        display: flex;
        align-items: center;
        column-gap: 5px;
        font-size: 0.75em;
        font-style: italic;
      }
      .version img {
        vertical-align: top;
        height: 24px;
      }
      #version-stamp-divider {
        margin-top: 64px;
      }
    </style>

    <md-divider id="version-stamp-divider"></md-divider>
    <div class="version-container">
      <span class="version"><img src="{{ $ctrl.angularJsIcon }}" alt=""> AngularJS v{{ $ctrl.versions.angularjs.full }} ({{ $ctrl.versions.angularjs.codeName }})</span>
      <span class="version"><img src="{{ $ctrl.angularjsMaterialIcon }}" alt=""> AngularJS Material v{{ $ctrl.versions.md }}</span>
    </div>
  `,
  controller: class VersionStampCtrl {
    static $inject = ['$window'];
    angularJsIcon = require('../assets/angularjs.svg');
    angularjsMaterialIcon = require('../assets/angularjs-material.png');
    versions;

    constructor($window) {
      this.versions = {
        angularjs: $window.angular.version,
        md: $window.ngMaterial.version.full,
      };
    }
  },
};
