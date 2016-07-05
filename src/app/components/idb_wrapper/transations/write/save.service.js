(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('save', Save);

    /** @ngInject */
    function Save($q, registration){

      this.save  = function(queryDetails){
        var deferred = $q.defer();
        queryDetails.callback = deferred.resolve
        registration.onInit(function(){
          iDB.save(queryDetails);  
        })
        return deferred.promise;
      }
    }
})();
