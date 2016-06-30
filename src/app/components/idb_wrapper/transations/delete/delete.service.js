(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('deleteService', DeleteService);

    /** @ngInject */
    function DeleteService($q){

      this.delete = function(queryDetails){
		    var deferred = $q.defer();
		    queryDetails.callback = deferred.resolve
		    iDB.delete(queryDetails);
		    return deferred.promise;
      }

    }
})();
