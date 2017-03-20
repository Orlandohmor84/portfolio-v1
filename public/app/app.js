'use strict';

var app = angular.module('portfolioApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : 'views/home.html', 
            controller: 'mainController'
        })
        
       .when('/nodes', {
            templateUrl : 'views/nodes.html',
            controller: 'mainController'
        }) 
        
        .when('/tools', {
            templateUrl : 'views/tools.html',
            controller: 'mainController'
        }) 
        
        .when('/work', {
            templateUrl : 'views/work.html',
            controller: 'mainController'
        }) 
        
        .when('/learn', {
            templateUrl : 'views/learn.html',
            controller: 'mainController'
        }) 
        
        .when('/deploy', {
            templateUrl : 'views/deploy.html',
            controller: 'mainController'
        }) 
        
        .otherwise({redirectTo:'/home'})

});

app.controller('mainController', function($scope) {
	$scope.title = 'Dev.iBuildWeb.Solutions';
    $scope.positionHighlight = function() {
        console.log('Position changed.');
        if(document.getElementById('selectPosition').value === 'Developer'){
            console.log('Developer selected.');
            var dev = getElementByClassName('developer');
            dev.className += 'highlight';
            
        }else if(document.getElementById('selectPosition').value === 'Digital Marker') {
            console.log('Digital marketer selected.');
        };
    };
});

//Toggles job field selection skill highlights

/*
$(document).on('change','#selectPosition',function() {
   console.log('Changing position'); 
   if($(this).val === 'Developer'){
       console.log('Developer selected.');
	   $('p.marketer').removeClass('highlight');
	   $('p.developer').addClass('highlight');
	}else if($(this).val === 'Digital Marker') {
		$('p.developer').addClass('highlight');
		$('p.marketer').addClass('highlight');
	}
});
*/

/*
$( '#selectPosition' ).on('change', function() {
    console.log('Changing position');
    if($(this).val === 'Developer'){
       console.log('Developer selected.');
	   $('.marketer').removeClass('highlight');
	   $('.developer').addClass('highlight');
	}else if($(this).val === 'Digital Marker') {
		$('.developer').addClass('highlight');
		$('.marketer').addClass('highlight');
	}
});
*/

/*
$(document).on('change', '#selectPosition', function() { 
	if($(this).val === 'Developer'){
		$('.marketer').removeClass('highlight');
		$('.developer').addClass('highlight');
	}else if($(this).val === 'Digital Marker') {
		$('.developer').addClass('highlight');
		$('.marketer').addClass('highlight');
	}
});
*/
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

