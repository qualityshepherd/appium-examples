var wd = require('wd'),
testingbotKey = process.env.TESTINGBOT_KEY,
testingbotSecret = process.env.TESTINGBOT_SECRET

desiredCaps = {
    'app': 'http://appium.s3.amazonaws.com/ContactManager.apk',
    'version': '7.1',
    'platform': 'android',
    'deviceName': 'Pixel 2',
    'platformName': 'android',
    'name' : 'My First Mobile Test',
    'client_key': testingbotKey,
    'client_secret': testingbotSecret
}

driver = wd.remote("https://" + testingbotKey + ":" + testingbotSecret + "@" + "hub.testingbot.com/wd/hub")
driver.init(desiredCaps, function() {
  console.log('App Started')
  driver.quit()
})
