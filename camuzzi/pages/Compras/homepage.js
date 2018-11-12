
var homepage = function() {

	// property manager
	var prop = require('../../properties/properties');
	var util = require('../../util/util');
	

	this.LogoutComprador = function() {

		browser.ignoreSynchronization = true;
	
		element(by.xpath(prop.xpathUserIcon)).click();
		element(by.xpath(prop.xpathLogoutButtonComprador)).click();
		
		browser.ignoreSynchronization = false;
		browser.sleep(3000);
	};


	this.LogoutProveedor = function() {

		browser.ignoreSynchronization = true;
	
		element(by.xpath(prop.xpathUserIcon)).click();
		element(by.xpath(prop.xpathLogoutButtonProveedor)).click();
		
		browser.ignoreSynchronization = false;
		browser.sleep(3000);
	};		
	
	
};
module.exports = new homepage(); 