(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('where', Where);

    /** @ngInject */
    function Where($q){

      this.where  = function(queryDetails){
		var deferred = $q.defer();
		queryDetails.callback = deferred.resolve
		iDB.where(queryDetails);
		return deferred.promise;
      }
    }
})();
