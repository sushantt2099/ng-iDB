# iDB

ng-iDB is a wrapper around iDB, its helps angular developer to effeciently and fastly use IndexedDB to write modern HTML5 apps.

# Install using bower

```sh
$ bower install ngidb --save
```

# How to use it
### step 1: Add dependency to your angular app

##### a) add 'ngIDb' module to your app
```sh
angular.module('your_module', ['ngIDb'])
```
##### b) inject '$iDB' service to your controller or service

### step 2: Registring the object store.
Register all the object store that you want to use in your app

```sh
var objectStoresToRegister = [{
    name: 'test'
}, {
    name: 'customers'
}];
$iDB.registration.registerObjectStore(objectStoresToRegister);
```

### Step 3: Initializing the database.
This will create the database and create the objectstore.
```sh
var databaseName = "test";
$iDB.registration.init({
    databaseName: databaseName,
    version: 1
})

```
### Step 3: Perform operations on the database.
After step 2 database operations can be performed(add, delete, find, findByIndex, where, all)

##### Add

```sh
$iDB.add({
    objectStoreName: , //object store on which operation will be performed
    data:  //array of data to be added to the object store
});
```
add method will return a promise with added objects in the promise function.

##### Delete

```sh
$iDB.delete({
    objectStoreName: , //object store on which operation will be performed
    objectsToDelete:  //array of data to be added to the object store
});
```
delete method will return a promise with deleted objects in the promise function.
##### Find
```sh
 $iDB.find({
    objectStoreName: ,//object store on which operation will be performed
    indexName: //indexed property to be searched on 
    indexValue: //value of the index property to be searched
});
```
find function will return a promise which will resolve with the found objects

##### Find By Index
```sh
 $iDB.findByIndex({
    objectStoreName: ,//object store on which operation will be performed
    indexName: //indexed property to be searched on 
    indexValue: //value of the index property to be searched
});
```
findByIndex function will return a promise which will resolve to array of objects found.

##### where
> Where operation can be slow as it has to iterates over all the object of the given object >store.

```sh
 $iDB.where({
    objectStoreName: ,//object store on which operation will be performed
    conditions: //array conditions to be applied
```
each condition is  object and each where condition object looks like this 
```sh
{
    property: ,//property of object to be checked
    operator: 'greaterThanEqualTo', 
    value: 25,
    and: //nested condition
}
```            
Conditions in the array is applied as || . Nested conditions using the 'and' property is applied as &&

operator string value that can be any of the following:
```sh
'greaterThan': >
'equalTo':  ==
'lessThan': < 
'lessThanEqualTo' <=
'greaterThanEqualTo': >=
'notEqualTo': !=
```

where function will return a promise which will resolve to arrray of objects found.

##### all
Used to query all data in the objectstore
```sh
$iDB.all({
    objectStoreName: ,//name of the object store
});
```
all function will reutrn a promise which will resolve to array of all the object present in that object store.
