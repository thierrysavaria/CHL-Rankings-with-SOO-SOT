function CHLGoalieStatsUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025#goalies", "table", 4)');
  spreadsheet.getRange('A2').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('OHL Goalie Stats'), true);
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025#goalies", "table", 4)');
  spreadsheet.getRange('A2').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('QMJHL Goalie Stats'), true);
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025#goalies", "table", 4)');
  spreadsheet.getRange('A2').activate();
};