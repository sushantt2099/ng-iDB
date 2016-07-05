(function () {
  'use strict';

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
