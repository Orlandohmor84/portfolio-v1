'use strict';

var app = angular.module('portfolioApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : 'views/home.html', 
        })
        
       .when('/webs', {
            templateUrl : 'views/webs.html',
        }) 
        
        .when('/tools', {
            templateUrl : 'views/tools.html',
        }) 
        
        .when('/matter', {
            templateUrl : 'views/matter.html',
        }) 
        
        .when('/next', {
            templateUrl : 'views/next.html',
        }) 
        
        .otherwise({redirectTo:'/home'})

});

$scope.collapseMenu = function() {
    if ($(window).width() <= 768) {
        console.log('hiding');
        $scope.navCollapsed = true;
    }
}
