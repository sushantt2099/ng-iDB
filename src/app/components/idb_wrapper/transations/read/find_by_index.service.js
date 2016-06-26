(function () {
  'use strict';

  angular
    .module('ngIDb')
    .factory('findByIndex', FindByIndex);

    /** @ngInject */
    function FindByIndex($q){

      this.findByIndex  = function(queryDetails){
		var deferred = $q.defer();
		queryDetails.callback = deferred.resolve
		iDB.findByIndex(queryDetails);
		return deferred.promise;
      }
    }
})();
