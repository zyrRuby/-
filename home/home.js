(function (angular) {
    // "use strict";
    var home = angular.module('home',['ngRoute']);
    home.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/home_page',{
            templateUrl:'home/home.html'
        })
    }])

})(angular);