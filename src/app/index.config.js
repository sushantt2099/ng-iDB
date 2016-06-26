(function() {
  'use strict';

  angular
    .module('ngIDb')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
