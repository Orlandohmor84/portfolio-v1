'use strict';

    var clearActive = function() {
        $('.navTabs').removeClass('active');
        console.log('clearActive function completed.');
    };

    var startTab = function() {
        console.log('startTab function started.');
        clearActive();
        $('#startTab').addClass('active');
        console.log('startTab function completed.');
    };

    var nodesTab = function() {
        console.log('nodesTab function started.');
        clearActive();
        $('#nodesTab').addClass('active');
        console.log('nodesTab function completed.');
    };

    var toolsTab = function() {
        clearActive();
        $('#toolsTab').addClass('active');
    };

    var workTab = function() {
        clearActive();
        $('#workTab').addClass('active');
    };

    var learnTab = function() {
        clearActive();
        $('#learnTab').addClass('active');
    };

    var deployTab = function() {
        clearActive();
        $('#deployTab').addClass('active');
    };

