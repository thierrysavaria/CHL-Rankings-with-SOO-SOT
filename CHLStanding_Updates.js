function CHLStandingsUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('\n')
  .setFormula('=IMPORTHTML("https://www.hockeydb.com/ihdb/stats/leagues/seasons/whl19792025.html", "table", 1)\n');
  spreadsheet.getRange('A37').activate();
  spreadsheet.getCurrentCell().setValue('\n')
  .setFormula('=IMPORTHTML("https://www.hockeydb.com/ihdb/stats/leagues/seasons/qmjhl20252025.html", "table", 1)\n');
  spreadsheet.getRange('A72').activate();
  spreadsheet.getCurrentCell().setValue('\n')
  .setFormula('=IMPORTHTML("https://www.hockeydb.com/ihdb/stats/leagues/seasons/ohl19892025.html", "table", 1)\n');
  spreadsheet.getRange('A73').activate();
};