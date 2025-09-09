function CHLPlayerStatsUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A149').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A324').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A475').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A636').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A782').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=6", "table", 3)');
  spreadsheet.getRange('A783').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('QMJHL Stats'), true);
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A149').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A324').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A475').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A636').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A782').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=6", "table", 3)');
  spreadsheet.getRange('A783').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('WHL Stats'), true);
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A149').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A324').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A475').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A636').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A782').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=6", "table", 3)');
  spreadsheet.getRange('A908').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=7", "table", 3)');
  spreadsheet.getRange('A909').activate();
};