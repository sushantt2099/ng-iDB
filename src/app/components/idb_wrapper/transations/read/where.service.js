(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('where', Where);

    /** @ngInject */
    function Where($q, registration){

    this.where  = function(queryDetails){
      var deferred = $q.defer();
      queryDetails.callback = deferred.resolve
      registration.onInit(function(){
        iDB.where(queryDetails);
      })
      return deferred.promise;
      }
    }
})();
