function fetchAllCHL_SOO() {
  const leagues = {
    "7": "WHL",
    "8": "OHL",
    "9": "QMJHL"
  };

  const auth = loginSportlogiqWithCookie();
  if (!auth.cookie) return;

  for (const leagueId in leagues) {
    const leagueName = leagues[leagueId];
    const sheetName = `${leagueName}_SOO`;

    const playerUrl = `https://app.sportlogiq.com/api/0.2/leagues/${leagueId}/seasons/11/stage/regular/players`;
    const jsonData = fetchJson(playerUrl, auth.cookie);
    if (!jsonData || !jsonData.players) continue;

    const output = [[
      "Player ID",
      "Player Name",
      "Birthdate",
      "Primary Position",
      "Detailed Position",
      "Handedness",
      "TOI (minutes)",
      "SOO",
      "SOO Diff"
    ]];

    jsonData.players.forEach(player => {
      const id = player.id || "";
      const name = `${player.firstName || ""} ${player.lastName || ""}`.trim();
      const birthdate = player.birthdate || "";
      const primaryPosition = player.primaryPosition || "";
      const detailedPosition = player.currentTeam?.position || "";
      const handedness = player.handedness || "";

      let toiMin = "", soo = "", sooDiff = "";

      const seasonData = player.seasonStagesSummary?.find(
        s => s.seasonId === "11" && s.name === "regular"
      );

      if (seasonData && seasonData.teams?.length > 0) {
        const teamData = seasonData.teams[0];
        soo = teamData.soo ?? "";
        sooDiff = teamData.soodiff ?? "";
        const toiSec = teamData.toiSeconds ?? 0;
        toiMin = (toiSec / 60).toFixed(2);
      }

      output.push([
        id,
        name,
        birthdate,
        primaryPosition,
        detailedPosition,
        handedness,
        toiMin,
        soo,
        sooDiff
      ]);
    });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    sheet.clearContents();
    sheet.getRange(1, 1, output.length, output[0].length).setValues(output);
  }
}
