require('./homepage.js');

var loginpage = function() {

	// property manager
	var prop = require('../../properties/properties');
	var util = require('../../util/util');	

	this.LoginToHomePage = function (user,password) {
	
		// Login procedure
		element(by.name(prop.nameUser)).sendKeys(user);
		element(by.name(prop.namePassword)).sendKeys(password);
		element(by.buttonText("Ingresar")).click();
		return require('./homepage.js');
	};
	
	
};
module.exports = new loginpage(); 