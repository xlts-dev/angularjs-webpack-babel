// eslint-disable-next-line
angular.module('templates', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put(
      '/tabs.component.html',
      '<style>#tabsContainer md-tab-content {\n    min-height: 240px;\n  }</style><div class="layout-margin"><div id="tabsContainer"><md-tabs md-dynamic-height md-border-bottom md-swipe-content><md-tab><md-tab-label>Buttons</md-tab-label><md-tab-body><md-subheader>Flat Buttons</md-subheader><section data-testid="flat-buttons-section" layout="row" layout-align="start center" layout-wrap layout-margin><md-button>Button</md-button><md-button md-no-ink class="md-primary">Primary<md-tooltip>md-noink</md-tooltip></md-button><md-button class="md-accent">Accent</md-button><md-button class="md-warn">Warn</md-button><md-button ng-disabled="true" class="md-primary">Disabled</md-button></section><md-divider></md-divider><md-subheader>Raised Buttons</md-subheader><section data-testid="raised-buttons-section" layout="row" layout-align="start center" layout-wrap layout-margin><md-button class="md-raised">Button</md-button><md-button class="md-raised md-primary">Primary</md-button><md-button class="md-raised md-accent">Accent</md-button><md-button class="md-raised md-warn">Warn</md-button><md-button ng-disabled="true" class="md-raised md-primary">Disabled</md-button></section></md-tab-body></md-tab><md-tab><md-tab-label>Tab two</md-tab-label><md-tab-body><div data-testid="tab-two-content" class="md-padding md-margin">Tab two content</div></md-tab-body></md-tab><md-tab><md-tab-label>Tab three</md-tab-label><md-tab-body><div data-testid="tab-three-content" class="md-padding md-margin">Tab three content</div></md-tab-body></md-tab></md-tabs></div></div>'
    );
  },
]);
