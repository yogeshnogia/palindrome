//Module
var shr = angular.module('shr', ['ngRoute', 'ngResource']);

//Routes
shr.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: "index.html",
            controller: "mainController"
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);

//Controllers
shr.controller('mainController', ['$scope', '$log', '$http', '$resource', function($scope, $log, $http, $resource) {

    $scope.placeholder = "Enter a string here...";
    $scope.btn = "Check";
    $scope.string;

    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


    $scope.check= function() {

        document.getElementById("message").textContent = "";

        var request = $http({
            method: "post",
            url: "checking.php" ,
            data: {
                string: $scope.string
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        /* Check whether the HTTP Request is successful or not. */
        request.then(function(data) {
            document.getElementById("message").textContent = data.data;
            console.log(data);
        });
    }



}]);