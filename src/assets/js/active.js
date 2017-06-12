'use strict';

    var clearActive = function() {
        $('.navTabs').removeClass('active');
    };

    var startTab = function() {
        clearActive();
        $('#startTab').addClass('active');
    };

    var nodesTab = function() {
        clearActive();
        $('#nodesTab').addClass('active');
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

