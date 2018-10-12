const wd = require('wd');
const TESTINGBOT_KEY = process.env.TESTINGBOT_KEY;
const TESTINGBOT_SECRET = process.env.TESTINGBOT_SECRET;

const desiredCaps = {
    'app': 'http://appium.s3.amazonaws.com/ContactManager.apk',
    'version': '7.1',
    'platform': 'android',
    'deviceName': 'Pixel 2',
    'platformName': 'android',
    'name' : 'My First Mobile Test',
    'client_key': TESTINGBOT_KEY,
    'client_secret': TESTINGBOT_SECRET
}

const driver = wd.remote("https://" + TESTINGBOT_KEY + ":" + TESTINGBOT_SECRET + "@" + "hub.testingbot.com/wd/hub")
driver.init(desiredCaps, () => {
  console.log('App Started')
  driver.quit()
});
