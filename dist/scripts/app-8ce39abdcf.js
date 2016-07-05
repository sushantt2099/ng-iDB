(function() {
  'use strict';

  angular
    .module('ngIDb', []);

})();

(function () {
  'use strict';

    Save.$inject = ["$q", "registration"];
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

(function () {
  'use strict';

    Where.$inject = ["$q", "registration"];
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

(function () {
  'use strict';

    FindByIndex.$inject = ["$q", "registration"];
  angular
    .module('ngIDb')
    .service('findByIndex', FindByIndex);

    /** @ngInject */
    function FindByIndex($q, registration){

      this.findByIndex  = function(queryDetails){
    		var deferred = $q.defer();
    		queryDetails.callback = deferred.resolve
        registration.onInit(function(){
          iDB.findByIndex(queryDetails);
        })
		
		    return deferred.promise;
      }
    }
})();

(function () {
  'use strict';

    Find.$inject = ["$q", "registration"];
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

(function () {
  'use strict';

    All.$inject = ["$q", "registration"];
  angular
    .module('ngIDb')
    .service('all', All);

    /** @ngInject */
    function All($q, registration){

      this.all = function(queryDetails){
        var deferred = $q.defer();
        queryDetails.callback = deferred.resolve
        registration.onInit(function(){
          iDB.all(queryDetails);
        })
		    
        return deferred.promise;
      }
    }
})();

(function () {
  'use strict';

    DeleteService.$inject = ["$q", "registration"];
  angular
    .module('ngIDb')
    .service('deleteService', DeleteService);

    /** @ngInject */
    function DeleteService($q, registration){

      this.delete = function(queryDetails){
        var deferred = $q.defer();
        queryDetails.callback = deferred.resolve
        registration.onInit(function(){
          iDB.delete(queryDetails);
        })
		    
        return deferred.promise;
      }

    }
})();

(function () {
  'use strict';

    Registration.$inject = ["$q"];
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
        initDetails.callback = function(){
          initDone = true;
          callOnInitFuncitons();
        }
        iDB.init(initDetails);

      }

    }
})();

(function () {
  'use strict';

    IDB.$inject = ["registration", "deleteService", "all", "find", "findByIndex", "where", "save"];
  angular
    .module('ngIDb')
    .service('$iDB', IDB);

    /** @ngInject */
    function IDB(registration, deleteService, all, find, findByIndex, where, save){

      this.registration = registration;
      this.delete = deleteService.delete;
      this.find = find.find;
      this.findByIndex = findByIndex.findByIndex;
      this.where = where.where;
      this.save = save.save;
      this.all = all.all;


    }
})();

(function() {
  'use strict';

  runBlock.$inject = ["$log"];
  angular
    .module('ngIDb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

(function() {
  'use strict';

  angular
    .module('ngIDb')
})();

(function() {
  'use strict';

  config.$inject = ["$logProvider"];
  angular
    .module('ngIDb')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib

  }

})();

//# sourceMappingURL=../maps/scripts/app-8ce39abdcf.js.map
