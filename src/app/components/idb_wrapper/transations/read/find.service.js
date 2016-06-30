(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('find', Find);

    /** @ngInject */
    function Find($q){

      this.find  = function(queryDetails){
		var deferred = $q.defer();
		queryDetails.callback = deferred.resolve
		iDB.find(queryDetails);
		return deferred.promise;
      }
    }
})();
