require('./util.js');

var util = function() {

	// to manipulate files (requires robotjs - npm install robotjs)
	this.uploadFileWithRobot = function (buttonToUpload,filePath) {
	
		var robot = require('robotjs');
	
		element(By.xpath(buttonToUpload)).click().then(function(){
		browser.driver.sleep(500);
		}).then(function(){
		robot.typeStringDelayed(filePath, 0);
		robot.keyTap("enter");
		browser.driver.sleep(500);
		})
	};
	
	
	// gets a random number between min and max
	this.getRandomNum = function(min, max){
		return parseInt(Math.random() * (max - min) + min);
	};

	
	// gets a random string
	this.getRandomString = function(length) {
		var string = '';
		var letters = 'abcdefghijklmnopqrstuvwxyz' //Include numbers if you want
        for (i = 0; i < length; i++) {
            string += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return string;
    };
	
	
	// wait for element to appear
	this.waitForElement = function(el, waitTimeoutMilliseconds){
		return browser.wait(function() { return el.isPresent(); }, waitTimeoutMilliseconds)
		.then(function(){
			return browser.wait(function() { return el.isDisplayed(); }, waitTimeoutMilliseconds);
		})
	};
};
module.exports = new util(); 