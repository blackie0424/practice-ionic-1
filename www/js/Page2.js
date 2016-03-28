angular.module('starter.UserList', ['ionic'])

.config(function($stateProvider){
    $stateProvider
    .state('page2',{
        url:"/page2",
        templateUrl:"templates/page2.html",
        controller:"Page2Ctrl"
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

.controller('Page2Ctrl',function($scope,userService){
    userService.getUsers().then(function(users){
        $scope.users = users;
    });
});