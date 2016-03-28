angular.module('starter.UserList', ['ionic'])

.config(function($stateProvider){
    $stateProvider
    .state('UserList',{
        url:"/UserList",
        templateUrl:"templates/UserList.html",
        controller:"UserListCtrl"
    });
})

.factory('userService', function ($http) {
  return {
      getUsers:function(){
          return $http.get('https://randomuser.me/api/?results=10').then(function(response){
              return response.data.results;
          });
      }
  };
})

.controller('UserListCtrl',function($scope,userService){
    userService.getUsers().then(function(users){
        $scope.users = users;
    });
});