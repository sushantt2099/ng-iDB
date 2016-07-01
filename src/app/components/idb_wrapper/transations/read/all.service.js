(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('all', All);

    /** @ngInject */
    function All($q, registration){

      this.all = function(queryDetails){
        var deferred = $q.defer();
        queryDetails.callback = deferred.resolve
        registration.onInit(function(){
          iDB.all(queryDetails);
        })
		    
        return deferred.promise;
      }
    }
})();
