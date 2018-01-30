w3.includeHTML(callback);
function callback() {
    w3.displayObject("general", general);
    w3.displayObject("nodeVacaExclusive", nodeVacaExclusive);
    w3.displayObject("nodeVacaExclusiveAgent", nodeVacaExclusiveAgent);
    $('#general').css('visibility', 'visible');
    nodesTab();
};