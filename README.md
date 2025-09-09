# CHL-Rankings-2.0-with-SOO-SOT

## Description
This project is an Apps Script application designed to automate data collection from Sportlogiq in Google Sheets. It was used in this case to produce CHL analytical rankings but could be used for various other leagues.

To take full advantage of it, I strongly encourage running triggers through Google Apps Script to automate the data collection.

---

## Getting Started

### Prerequisites
Before you can use this project, you need the following:
* A Google Account with access to Google Apps Script.
* A Sportlogiq account with a username and password. (The scripts are configured to work with the Sportlogiq API.)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/thierrysavaria/CHL-Rankings-with-SOO-SOT.git](https://github.com/thierrysavaria/CHL-Rankings-with-SOO-SOT.git)
    ```
2.  **Set up Apps Script:**
    * Open your Google Drive and create a new Google Sheet.
    * Go to **Extensions > Apps Script** from the menu.
    * In the Apps Script editor, copy the contents of the `.js` files from this repository and paste them into the corresponding script files in your Apps Script project.
3.  **Enter Username and Password Securely**
    For security reasons, do not enter your username and password directly into the script. Instead, use the Apps Script **Properties Service**.
    * Open the Apps Script editor for your project.
    * Go to **Project Settings** (the gear icon on the left-hand sidebar).
    * Scroll down to the **Script properties** section and click on **Add script property**.
    * Add a new property with `KEY` set to **SPORTLOGIQ_USERNAME** and `VALUE` set to your Sportlogiq username.
    * Add another property with `KEY` set to **SPORTLOGIQ_PASSWORD** and `VALUE` set to your Sportlogiq password.
    Your script will then access these values using the following code:
    ```javascript
    var username = PropertiesService.getScriptProperties().getProperty('SPORTLOGIQ_USERNAME');
    var password = PropertiesService.getScriptProperties().getProperty('SPORTLOGIQ_PASSWORD');
    ```

---

## Usage
The scripts are designed to be run from the Apps Script editor. You can trigger them manually or set up time-based triggers to run them automatically.

Feel free to modify the `sportlogiq_configs.js` file to get data from different leagues at different times. If you do this, you will need to modify each `DataGathering...` script as well.

* `CHL_Standing_Updates.js`: Updates the standings for the CHL.
* `CHL_PlayerStats_Update.js`: Updates player statistics from Elite Prospects.
* `DataGathering_...`: Scripts to gather raw data from the API.
* `Rankings_Macros.js`: Contains macros to calculate and update rankings.

---

## Contributing
I welcome contributions to this project! If you have any ideas for new features, bug fixes, or improvements, please feel free to open a pull request.

---

## License
This project is licensed under the MIT License—see the `LICENSE.md` file for details.

---

## Contact
* **Thierry Savaria**
* **GitHub:** [thierrysavaria](https://github.com/thierrysavaria)
