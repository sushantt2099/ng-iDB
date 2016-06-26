(function () {
  'use strict';

  angular
    .module('ngIDb')
    .factory('where', IDB);

    /** @ngInject */
    class Where($q){

      this.where  = function(queryDetails){
      	var deferred = $q.defer();
      	queryDetails.callback = deferred.resolve
		iDB.where(queryDetails);
		return deferred.promise;
      }
    }
})();
