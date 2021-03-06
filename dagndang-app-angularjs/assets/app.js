var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './assets/tpl/index.html',
            controller: ''
        })
        .when('/blog', {
            templateUrl: './assets/tpl/blog.html',
            controller: ''
        })
        .when('/dangdang', {
            templateUrl: './assets/tpl/dangdang.html',
            controller: 'bookController'
        })
        .when('/about_me', {
            templateUrl: './assets/tpl/about_me.html',
            controller: ''
        })
        .when('/dangdangbook/:id', {
            templateUrl: './assets/tpl/DangdangBook/dangdangbook.html',
            controller: 'booklistController'
        })
        .otherwise({
          redirectTo:'/'
        });
}]);
