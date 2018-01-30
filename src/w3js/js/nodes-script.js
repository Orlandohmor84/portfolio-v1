w3.includeHTML(callback);
function callback() {
    w3.displayObject("general", general);
    w3.displayObject("nodeVacaExclusive", nodeVacaExclusive);
    w3.displayObject("nodeVacaExclusiveAgent", nodeVacaExclusiveAgent);
    w3.displayObject("node4minuteQuote", node4minuteQuote);
    w3.displayObject("nodeSuperiorIncomeBooster", nodeSuperiorIncomeBooster);
    w3.displayObject("nodeMathisSplash", nodeMathisSplash);
    w3.displayObject("nodeObamacareForm", nodeObamacareForm);
    w3.displayObject("nodeExamSimulator", nodeExamSimulator);
    w3.displayObject("nodeCreativeSolutions", nodeCreativeSolutions);
    $('#general').css('visibility', 'visible');
    nodesTab();
};