(function () {
  'use strict';

  angular
    .module('ngIDb')
    .factory('find', IDB);

    /** @ngInject */
    class Find($q){

      this.find  = function(queryDetails){
      	var deferred = $q.defer();
      	queryDetails.callback = deferred.resolve
      	iDB.find(queryDetails);
		return deferred.promise;
      }
    }
})();
