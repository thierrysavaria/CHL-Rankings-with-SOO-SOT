/**
 * Main function that logs in, retrieves players mapping,
 * fetches the metrics data, merges the player names,
 * and writes the data to the specified Google Sheet.
 */

// Topic IDs and their label (for sheet naming)
const topicConfigs = {
  "2": "Shooting",
  "7": "Scoring",
  "13": "DZ_All_Exits",
  "23": "DZ_Denials",
  "22": "DefPlays_AllPlays",
  "25": "Body_checks",
  "26": "Stick_checks",
  "27": "Blocks",
  "20": "LPRS",
  "15": "OZ_Entries",
  "8": "Passing_Total",
  "9": "Passing_OZ",
  "10": "Passing_DZ",
  "11": "Passing_NZ",
  "1": "Playmaking_SC",
  "28": "Possesion_SuccessRate",
  "32": "WOI_AllPlays"
  // Add more topicIds and labels here if needed
};

const GoalietopicConfigs = {
  "29_SH": { topicId: "29", name: "AllPlays_SH", mps: ["SH"] },
  "29_EV": { topicId: "29", name: "AllPlays", mps: [] },
  "30":    { topicId: "30", name: "ScreenedShots", mps: [] },
  "31":    { topicId: "31", name: "DumpInsRecov", mps: [] },
  "32":    { topicId: "32", name: "OverallPerf", mps: [] },
  "1":     { topicId: "1",  name: "Playmaking_Ag", mps: [] }
};


// League configurations
const leagueConfigs = {
  "7": {
    name: "WHL",
    start: "2024-09-20T00:00:00.000Z",
    end: "2025-03-24T00:00:00.000Z"
  },
  "8": {
    name: "OHL",
    start: "2024-09-25T00:00:00.000Z",
    end: "2025-03-24T00:00:00.000Z"
  },
  "9": {
    name: "QMJHL",
    start: "2024-09-20T00:00:00.000Z",
    end: "2025-03-23T00:00:00.000Z"
  }
};