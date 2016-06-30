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
          iDB.add(queryDetails);
        })
		    
        return deferred.promise;
      }
    }
})();
