/**
 * Helper function to perform a GET request with the specified cookie and return parsed JSON.
 */
function fetchJson(apiUrl, cookie) {
  var options = {
    "method": "GET",
    "headers": {
      "Cookie": cookie,
      "User-Agent": "Mozilla/5.0 (compatible; Google Apps Script)"
    },
    "muteHttpExceptions": true
  };
  
  var response = UrlFetchApp.fetch(apiUrl, options);
  if (response.getResponseCode() === 401) {
    Logger.log("Unauthorized. Check if the cookie domain is set correctly.");
    return null;
  }
  return JSON.parse(response.getContentText());
}

/**
 * Fetches players data from the players API and returns a mapping from player ID to full name.
 */
function fetchPlayersData(cookie, sportLogiqApiUrl) {
  var jsonData = fetchJson(sportLogiqApiUrl, cookie);
  var playerMap = {};
  if (jsonData && Array.isArray(jsonData.players)) {
    jsonData.players.forEach(function(player) {
      playerMap[player.id] = player.firstName + " " + player.lastName;
    });
  } else {
    Logger.log("No players data found.");
  }
  return playerMap;
}

/**
 * Converts JSON data into a 2D array appropriate for Google Sheets.
 */
function convertJsonToSheetArray(jsonData) {
  var dataArray = [];
  
  if (jsonData.data && Array.isArray(jsonData.data)) {
    dataArray = jsonData.data;
  } else if (Array.isArray(jsonData)) {
    dataArray = jsonData;
  } else {
    var keys = Object.keys(jsonData);
    dataArray.push(keys);
    dataArray.push(keys.map(function(key) { return jsonData[key]; }));
  }
  
  // If the first element is an object, convert to rows using its keys as headers.
  if (dataArray.length && typeof dataArray[0] === 'object' && !Array.isArray(dataArray[0])) {
    var headers = Object.keys(dataArray[0]);
    var rows = dataArray.map(function(item) {
      return headers.map(function(header) {
        return item[header];
      });
    });
    return [headers].concat(rows);
  }
  
  return dataArray;
}

/**
 * Fetches metrics data, inserts a "Player Name" column as the second column (using playerMap),
 * and writes the final 2D array to the specified Google Sheet.
 */
function fetchMetricsDataAndPaste(cookie, sportLogiqApiUrl, sheetName, playerMap) {
  var jsonData = fetchJson(sportLogiqApiUrl, cookie);
  if (!jsonData) return;
  
  var dataArray = convertJsonToSheetArray(jsonData);
  if (!dataArray.length) {
    Logger.log("No data available to paste into the sheet.");
    return;
  }
  
  // Insert the "Player Name" column as the second column.
  // First, capture the header row and find the index for "playerid".
  var headerRow = dataArray[0];
  var playerIdIndex = headerRow.indexOf("playerid");
  
  // Insert the header for Player Name at index 1.
  headerRow.splice(1, 0, "Player Name");
  
  // For every data row, insert the corresponding player name at the second column.
  for (var i = 1; i < dataArray.length; i++) {
    var row = dataArray[i];
    var pid = (playerIdIndex !== -1) ? row[playerIdIndex] : null;
    var playerName = (pid && playerMap[pid]) ? playerMap[pid] : "";
    row.splice(1, 0, playerName);
  }
  
  // Open the active spreadsheet and write the data.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  sheet.clearContents();
  sheet.getRange(1, 1, dataArray.length, dataArray[0].length).setValues(dataArray);
}