!function(){"use strict";angular.module("ngIDb",[])}(),function(){"use strict";function e(e){this.where=function(n){var t=e.defer();return n.callback=t.resolve,iDB.add(n),t.promise}}e.$inject=["$q"],angular.module("ngIDb").factory("add",e)}(),function(){"use strict";function e(e){this.where=function(n){var t=e.defer();return n.callback=t.resolve,iDB.where(n),t.promise}}e.$inject=["$q"],angular.module("ngIDb").factory("where",e)}(),function(){"use strict";function e(e){this.findByIndex=function(n){var t=e.defer();return n.callback=t.resolve,iDB.findByIndex(n),t.promise}}e.$inject=["$q"],angular.module("ngIDb").factory("findByIndex",e)}(),function(){"use strict";function e(e){this.find=function(n){var t=e.defer();return n.callback=t.resolve,iDB.find(n),t.promise}}e.$inject=["$q"],angular.module("ngIDb").factory("find",e)}(),function(){"use strict";function e(e){this.all=function(n){var t=e.defer();return n.callback=t.resolve,iDB.add(n),t.promise}}e.$inject=["$q"],angular.module("ngIDb").factory("all",e)}(),function(){"use strict";function e(e){this["delete"]=function(n){var t=e.defer();return n.callback=t.resolve,iDB["delete"](n),t.promise}}e.$inject=["$q"],angular.module("ngIDb").factory("deleteService",e)}(),function(){"use strict";function e(e){this.registerObjectStore=function(n){var t=e.defer();return n.callback=t.resolve,iDB.registerObjectStore(n),t.promise}}e.$inject=["$q"],angular.module("ngIDb").factory("registration",e)}(),function(){"use strict";function e(e,n,t,i,r,c,u){this.registration=e.registration,this.deleteService=n["delete"],this.find=i.find,this.findByIndex=r.findByIndex,this.where=c.where,this.add=u.add}e.$inject=["registration","deleteService","all","find","findByIndex","where","add"],angular.module("ngIDb").factory("$iDB",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("ngIDb").run(e)}(),function(){"use strict";angular.module("ngIDb")}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("ngIDb").config(e)}();
//# sourceMappingURL=../maps/scripts/app-ff42ed2a43.js.map