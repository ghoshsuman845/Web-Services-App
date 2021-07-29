const express = require('express')
const router = express.Router()

const {runOnPS} = require('./utils')
const commands = require('./commands')

const stackUrl = {
    'chrome' : [],
    'firefox' : []
}

router.get('/start' , (req, res) => {
     const {browser, url = 'www.google.com'} = req.query;
     const command = commands.startBrowserWithUrl(browser,url);
     runOnPS(command)
     stackUrl[browser].push(url);
     console.log(browser, url);
     res.send('successful')
});

router.get('/stop', (req,res) => {
    const {browser} = req.query;
    const command = commands.stopBrowser(browser);
    runOnPS(command);
    stackUrl[browser].length = 0;
    res.send('successfull');

});

router.get('/cleanup', (req,res) => {
    const {browser} = req.query;
    const command = commands.cleanUpBrowser(browser);
    runOnPS(command);
    stackUrl[browser].length = 0;
    res.send('clean up');

});

router.get('/geturl', (req,res) => {
    const {browser} = req.query;
    const urlsLen = stackUrl[browser].length;
    const response = urlsLen > 0 ? stackUrl[browser][urlsLen - 1] : `No active tab on ${browser}`;

    res.send(response)
    

});

module.exports = router;