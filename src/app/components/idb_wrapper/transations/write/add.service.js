(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('add', Add);

    /** @ngInject */
    function Add($q){

      this.where  = function(queryDetails){
		    var deferred = $q.defer();
		    queryDetails.callback = deferred.resolve
		    iDB.add(queryDetails);
		    return deferred.promise;
      }
    }
})();
