'use strict';
/*
Views Scripts for jQuery Version of iBuildWeb.Site
Last Date Modified: 11/16/2017
*/

    var clearViews = function(){
        $('#start').hide();
        $('#nodes').hide();
        $('#tools').hide();
        $('#work').hide();
        $('#learn').hide();
        $('#deploy').hide();
    };

    $('.goToStart').click(function() {
        clearViews();
        $('#start').fadeIn();
        startTab();
    });

    $('.goToNodes').click(function() {
        clearViews();
        $('#nodes').fadeIn();
        nodesTab();
    });

    $('.goToTools').click(function() {
        clearViews();
        $('#tools').fadeIn();
        toolsTab();
    });

    $('.goToWork').click(function() {
        clearViews();
        $('#work').fadeIn();
        workTab();
    });

    $('.goToLearn').click(function() {
        clearViews();
        $('#learn').fadeIn();
        learnTab();
    });

    $('.goToDeploy').click(function() {
        clearViews();
        $('#deploy').fadeIn();
        deployTab();
    });
