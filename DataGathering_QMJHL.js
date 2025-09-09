function callApiQMJHL() {
  const auth = loginSportlogiqWithCookie();
  if (!auth.cookie) return;

  const requests = [];
  const configList = [];

  const leagueId = "9"; // QMJHL
  const league = leagueConfigs[leagueId];
  const playerUrl = `https://app.sportlogiq.com/api/0.2/leagues/${leagueId}/seasons/11/stage/regular/players`;
  const playerMap = fetchPlayersData(auth.cookie, playerUrl);

  for (const topicId in topicConfigs) {
    const topicName = topicConfigs[topicId];
    const sheetName = `${league.name}_${topicName}`;

    const metricsUrl = `https://app.sportlogiq.com/api/v3/metrics/setcollections/topicvalues?` +
      `leagueid=${leagueId}` +
      `&seasonid=11` +
      `&seasonstage=regular` +
      `&metricsetcollection=newStatisticsPage` +
      `&scope=skater` +
      `&topicid=${topicId}` +
      `&aggregationtype=average` +
      `&averagegranularity=per60` +
      `&from=${league.start}` +
      `&to=${league.end}`;

    requests.push({
      url: metricsUrl,
      method: "get",
      headers: {
        "Cookie": auth.cookie,
        "User-Agent": "Mozilla/5.0 (compatible; Google Apps Script)"
      },
      muteHttpExceptions: true
    });

    configList.push({
      sheetName,
      playerMap
    });
  }

  const responses = UrlFetchApp.fetchAll(requests);

  for (let i = 0; i < responses.length; i++) {
    const response = responses[i];
    const config = configList[i];
    if (response.getResponseCode() !== 200) {
      Logger.log(`Failed to fetch ${config.sheetName}: ${response.getContentText()}`);
      continue;
    }

    const jsonData = JSON.parse(response.getContentText());
    const dataArray = convertJsonToSheetArray(jsonData);

    if (!dataArray.length) {
      Logger.log(`No data for ${config.sheetName}`);
      continue;
    }

    const headerRow = dataArray[0];
    const playerIdIndex = headerRow.indexOf("playerid");
    const secondsPlayedIndex = headerRow.indexOf("secondsplayed");

    if (secondsPlayedIndex === -1) {
      Logger.log(`"secondsplayed" column not found in ${config.sheetName}`);
      continue;
    }

    headerRow.splice(1, 0, "Player Name");
    const filteredRows = [headerRow];

    for (let j = 1; j < dataArray.length; j++) {
      const row = dataArray[j];
      const pid = (playerIdIndex !== -1) ? row[playerIdIndex] : null;
      const playerName = pid && config.playerMap[pid] ? config.playerMap[pid] : "";

      const secondsPlayed = row[secondsPlayedIndex];
      // if (secondsPlayed < 9000) continue;  // Filter under 300 minutes

      row.splice(1, 0, playerName);
      filteredRows.push(row);
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(config.sheetName) || ss.insertSheet(config.sheetName);
    // sheet.clearContents();
    sheet.getRange(1, 1, filteredRows.length, filteredRows[0].length).setValues(filteredRows);
  }
}
