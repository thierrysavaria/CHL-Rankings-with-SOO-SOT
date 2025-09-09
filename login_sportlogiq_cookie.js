/**
 * Logs in to Sportlogiq and returns the parsed response along with the session cookie.
 */
function loginSportlogiqWithCookie() {
  // Retrieve credentials from the Apps Script Properties Service.
  var username = PropertiesService.getScriptProperties().getProperty('SPORTLOGIQ_USERNAME');
  var password = PropertiesService.getScriptProperties().getProperty('SPORTLOGIQ_PASSWORD');

  if (!username || !password) {
    Logger.log("Username or password not found in script properties. Please set them in Project Settings.");
    return { loginResponse: null, cookie: null };
  }

  var url = "https://auth.sportlogiq.com/api/v1/login";
  var payload = { "username": username, "password": password };
  var options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true,
    "followRedirects": false
  };

  var response = UrlFetchApp.fetch(url, options);
  var responseBody = response.getContentText();
  Logger.log("Login Response: " + responseBody);

  // Retrieve cookie from headers.
  var headers = response.getAllHeaders();
  var cookie = headers['Set-Cookie'] || headers['set-cookie'];
  if (Array.isArray(cookie)) cookie = cookie.join('; ');
  Logger.log("Cookie: " + cookie);

  return { loginResponse: JSON.parse(responseBody), cookie: cookie };
}