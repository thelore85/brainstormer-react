# Web App

////////////////////////////////////////
INSERT APP GENERIC DESCRIPTION HERE
////////////////////////////////////////

EG: This project is a JavaScript application that utilizes the browser's `mediaDevices` web API to offer Picture-in-Picture (PiP) functionality. With this app, you can select a screen area and display it in a separate PiP window.

## How It Works
////////////////////////////////////////
DESCRIBE FUNCTIONALITIES AND FEATURES
////////////////////////////////////////

1. Click the "Select Screen" button to choose the screen area you want to display in the PiP window.
2. Once the screen is selected, click the "Show PiP" button to start the Picture-in-Picture display.

## Requirements

////////////////////////////////////////
DEFINE REQUIREMENTS IF NEEDED
////////////////////////////////////////

To use this app, ensure that you have a browser compatible with the `mediaDevices` API and support for the Picture-in-Picture feature.

## How to Use the Code

////////////////////////////////////////
INSTRUCTION ON HOW TO USE THE CODE
////////////////////////////////////////

The main JavaScript code for the program can be found in the `script.js` file. The application also uses an HTML file (`index.html`) and a CSS style file (`styles.css`) for the UI structure and appearance.

## Installation Instructions

////////////////////////////////////////
INSTRUCTION ON HOW TO INSTALL THE CODE
////////////////////////////////////////

1. Clone the repository using the `git clone` command or download the source code as a ZIP file.
2. Open the `index.html` file in your web browser.

## Used APIs

////////////////////////////////////////
TECNICAL DETAILS
////////////////////////////////////////

- `navigator.mediaDevices.getDisplayMedia()`: Used to gain access to the screen area selected by the user.
- `videoElement.requestPictureInPicture()`: Used to initiate Picture-in-Picture mode with the selected video.

## Contributions

If you wish to contribute to this project, feel free to open a Pull Request. We welcome suggestions and corrections!

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

---
Author: Piqus (https://piqus.it)
