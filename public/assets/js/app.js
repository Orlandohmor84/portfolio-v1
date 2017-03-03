'use strict';

var app = angular.module('portfolioApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : 'views/home.html', 
        })
        
       .when('/nodes', {
            templateUrl : 'views/nodes.html',
        }) 
        
        .when('/tools', {
            templateUrl : 'views/tools.html',
        }) 
        
        .when('/work', {
            templateUrl : 'views/work.html',
        }) 
        
        .when('/learn', {
            templateUrl : 'views/learn.html',
        }) 
        
        .when('/deploy', {
            templateUrl : 'views/deploy.html',
        }) 
        
        .otherwise({redirectTo:'/home'})

});

