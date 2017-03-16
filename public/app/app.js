'use strict';

var app = angular.module('portfolioApp', ['ngRoute']);

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

