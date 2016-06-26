(function () {
  'use strict';

  angular
    .module('ngIDb')
    .factory('delete', IDB);

    /** @ngInject */
    class Delete(){

      this.delete = function(queryDetails){
  		var deferred = $q.defer();
  		queryDetails.callback = deferred.resolve
  		iDB.delete(queryDetails);
        return deferred.promise;
      }

    }
})();
