(function () {
  'use strict';

  angular
    .module('ngIDb')
    .factory('registration', IDB);

    /** @ngInject */
    class Registration(){

      this.registerObjectStore = function(queryDetails){
  		    var deferred = $q.defer();
  		    queryDetails.callback = deferred.resolve;
  		    iDB.registerObjectStore(queryDetails);
            return deferred.promise;
      }

    }
})();
