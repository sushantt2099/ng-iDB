(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('add', Add);

    /** @ngInject */
    function Add($q, registration){

      this.add  = function(queryDetails){
        var deferred = $q.defer();
        queryDetails.callback = deferred.resolve
        registration.onInit(function(){
          iDB.add(queryDetails);  
        })
        return deferred.promise;
      }
    }
})();
