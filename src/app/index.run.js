(function() {
  'use strict';

  angular
    .module('ngIDb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
