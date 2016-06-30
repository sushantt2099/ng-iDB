(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('find', Find);

    /** @ngInject */
    function Find($q, registration){

      this.find  = function(queryDetails){
        var deferred = $q.defer();
        queryDetails.callback = deferred.resolve
        registration.onInit(function(){
          iDB.find(queryDetails);
        });
        return deferred.promise;
      }
    }
})();
