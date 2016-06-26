(function () {
  'use strict';

  angular
    .module('ngIDb')
    .factory('all', All);

    /** @ngInject */
    function All($q){

      this.all = function(queryDetails){
		var deferred = $q.defer();
		queryDetails.callback = deferred.resolve
		iDB.add(queryDetails);
		return deferred.promise;
      }
    }
})();
