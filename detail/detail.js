(function(angular) {
    var detail = angular.module('detail',['ngRoute','myJsonpService']);
    detail.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/details/:id',{
            templateUrl:'./detail/detail.html',
            controller:'detail'
        })
    }])
    detail.controller('detail',['$scope','$routeParams','$route','MyService',function($scope,$routeParams,$route,MyService) {
        // console.log($routeParams.id);
        //注意了{}对象参数一定要传入，否则会报错
        MyService.jsonp('https://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data) {
            console.log(data);
            $scope.data = data
            $scope.$apply()
        })
    }])
})(angular)