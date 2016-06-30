(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('deleteService', DeleteService);

    /** @ngInject */
    function DeleteService($q, registration){

      this.delete = function(queryDetails){
        var deferred = $q.defer();
        queryDetails.callback = deferred.resolve
        registration.onInit(function(){
          iDB.delete(queryDetails);
        })
		    
        return deferred.promise;
      }

    }
})();
