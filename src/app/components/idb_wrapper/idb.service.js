(function () {
  'use strict';

  angular
    .module('ngIDb')
    .factory('$iDB', IDB);

    class IDB(delete, all, find, findByIndex, where, add){

      this.delete = delete.delete;
      this.find = find.find;
      this.findByIndex = findByIndex.findByIndex;
      this.where = where.where;
      this.add = add.add;
    }
})();
