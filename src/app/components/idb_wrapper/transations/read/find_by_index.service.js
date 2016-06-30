(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('findByIndex', FindByIndex);

    /** @ngInject */
    function FindByIndex($q, registration){

      this.findByIndex  = function(queryDetails){
		var deferred = $q.defer();
		queryDetails.callback = deferred.resolve
    registration.onInit(function(){
      iDB.findByIndex(queryDetails);
    })
		
		return deferred.promise;
      }
    }
})();
