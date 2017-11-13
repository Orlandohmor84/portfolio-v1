'use strict';

var app = angular.module('portfolioApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/start', {
            templateUrl : 'views/start.html', 
            controller: 'startController'
        })
        
       .when('/nodes', {
            templateUrl : 'views/nodes.html',
            controller: 'nodesController'
        }) 
        
        .when('/tools', {
            templateUrl : 'views/tools.html',
            controller: 'toolsController'
        }) 
        
        .when('/work', {
            templateUrl : 'views/work.html',
            controller: 'workController'
        }) 
        
        .when('/learn', {
            templateUrl : 'views/learn.html',
            controller: 'learnController'
        }) 
        
        .when('/deploy', {
            templateUrl : 'views/deploy.html',
            controller: 'deployController'
        }) 
        
        .otherwise({redirectTo:'/start'})

});

//Close mobile nav menu after clicking a link
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

//Google Analytics Script
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73691029-2', 'auto');
  ga('send', 'pageview');

