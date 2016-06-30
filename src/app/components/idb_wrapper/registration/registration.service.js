(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('registration', Registration);

    /** @ngInject */
    function Registration($q){

      var initDone = false;
      var onInitQueue = [];

      this.onInit = function(callback){
        if(initDone){ 
          callback();
          return;
        }else{
          onInitQueue.push(callback);
        }
      }

      var callOnInitFuncitons = function(){
        while(onInitQueue.length){
          onInitQueue.pop()();
        }
      }

      this.registerObjectStore = function(queryDetails){
        var deferred = $q.defer();
        queryDetails.callback = deferred.resolve;
        iDB.registerObjectStore(queryDetails);
        return deferred.promise;
      }

      this.init = function(initDetails){
        initDetails.callback = callOnInitFuncitons
        iDB.init(initDetails);

      }

    }
})();
