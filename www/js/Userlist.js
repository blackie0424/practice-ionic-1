angular.module('starter.UserList', ['ionic'])

.config(function($stateProvider) {
    $stateProvider
        .state('UserList', {
            url: "/UserList",
            templateUrl: "templates/UserList.html",
            controller: "UserListCtrl"
        })

    .state('UserListDetail', {
        url: "/UserListDetail/:index",
        templateUrl: "templates/UserListDetail.html",
        controller: "UserListDetailCtrl"
    });
})

.factory('userService', function($http) {
    var users = [];
    return {
        getUsers: function() {
            return $http.get('https://randomuser.me/api/?results=10').then(function(response) {
                users = response.data.results;
                return users;
            });
        },
        getUser: function(index) {
            return users[index];
        }
    };
})

.controller('UserListCtrl', function($scope, userService) {
    userService.getUsers().then(function(users) {
        $scope.users = users;
    });
})

.controller('UserListDetailCtrl', function($scope, $stateParams, userService) {
    var index = $stateParams.index;
    $scope.item = userService.getUser(index);
});