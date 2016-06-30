(function () {
  'use strict';

  angular
    .module('ngIDb')
    .service('$iDB', IDB);

    /** @ngInject */
    function IDB(registration, deleteService, all, find, findByIndex, where, add){

      this.registration = registration;
      this.deleteService = deleteService.delete;
      this.find = find.find;
      this.findByIndex = findByIndex.findByIndex;
      this.where = where.where;
      this.add = add.add;


    }
})();
