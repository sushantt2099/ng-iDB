(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('registration', Registration);

    /** @ngInject */
    function Registration($q){

      this.registerObjectStore = function(queryDetails){
        var deferred = $q.defer();
        queryDetails.callback = deferred.resolve;
        iDB.registerObjectStore(queryDetails);
        return deferred.promise;
      }

      this.init = iDB.init;

    }
})();
