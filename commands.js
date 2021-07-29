const path = require('path');

const startBrowserWithUrl = (browser, url) => {
    `Start-Process "${browser}.exe" "${url}" `;
};

const stopBrowser = (browser) => `Stop-Process_name ${browser}`;

const cleanUpBrowser = (browser) => `${path.join(__dirname, 'batch_scripts', `clear_${browser}.bat`)}`;

module.exports = {
    startBrowserWithUrl,
    stopBrowser,
    cleanUpBrowser
}