const wd = require('wd');
// get testingbot credentials from env vars (you need to set these)
const TESTINGBOT_KEY = process.env.TESTINGBOT_KEY;
const TESTINGBOT_SECRET = process.env.TESTINGBOT_SECRET;

let desiredCapabilities = {
    'app': 'http://appium.s3.amazonaws.com/ContactManager.apk',
    'version': '7.1',
    'platform': 'android',
    'deviceName': 'Pixel 2',
    'platformName': 'android',
    'browserName': 'chrome',
    'name' : 'Appium Test',
    'client_key': TESTINGBOT_KEY,
    'client_secret': TESTINGBOT_SECRET
};

let driver = wd.remote("https://" + TESTINGBOT_KEY + ":" + TESTINGBOT_SECRET + "@" + "hub.testingbot.com/wd/hub");

driver.init(desiredCapabilities, async () => {
  console.log('HELLO WORLD');
  driver.get('https://qualityshepherd.com');
  driver.quit();
});
