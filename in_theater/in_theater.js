(function (angular) {
    // "use strict";
    var in_theater = angular.module('in_theater', ['ngRoute','myJsonpService']);
    in_theater.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:Mtype/:page?', {
            templateUrl: 'in_theater/in_theater.html',
            controller:'in_theater'
        })
    }])
    in_theater.controller('in_theater',['$scope','$http','MyService','$routeParams','$route','$location',function($scope,$http,MyService,$routeParams,$route,$location) {
        // console.log($routeParams.Mtype)
        $scope.loading = true;
        $scope.count = 5;
        $scope.page = ($routeParams.page || '1')-0;
        $scope.start = ($scope.page-1) * $scope.count;
         MyService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.Mtype,{start:$scope.start,count:5,q:$scope.inpValue},function(data) {
            $scope.total =  data.total;
            $scope.totalPage = Math.ceil( data.total / $scope.count);
            $scope.data = data.subjects; 
            $scope.loading = false;          
            $scope.$apply();
        });
       
        $scope.next = function(newPage) {
            console.log($scope.totalPage)
            if(newPage>$scope.totalPage) {
                return;
            }
            $route.updateParams({page:newPage});
             console.log($routeParams.page);
        }
         $scope.prev  =function(newPage) {
             if(newPage<=0) {
                return;
            }
             $route.updateParams({page:newPage});
        }
    }])

})(angular);