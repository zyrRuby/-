(function (angular) {
    // "use strict";
    //注意了，detail的规则可能会先匹配到in_theater的规则，所以，这里先引用模块detail模块，让他先匹配datail模块的规则
    var app = angular.module('main',['home','detail','in_theater','ngRoute','myJsonpService']);
    app.controller('active' ,['$scope', '$location', '$route','$routeParams',function ($scope, $location,$routeParams) {
        $scope.loc = $location;
        $scope.ischecked = '/home_page';
        $scope.$watch('loc.url()', function (now, pre) {
            console.log(now);
            // console.log($routeParams);
            switch (now) {
                case '/home_page':
                    $scope.ischecked = '/home_page'
                    break;
                case '/in_theaters':
                    $scope.ischecked = '/in_theaters'
                    break;
                case '/coming_soon':
                    $scope.ischecked = '/coming_soon'
                    break;
                case '/top250':
                    $scope.ischecked = '/top250'
                    break;
                default:
                    $location.url('home_page')
                    break;
            }
        })
    }])
    

})(angular);
