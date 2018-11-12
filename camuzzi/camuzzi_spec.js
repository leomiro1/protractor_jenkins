describe("Camuzzi homepage", function () {

	// property manager
	var prop = require('./properties/properties');
	var randomData = require('./properties/randomData');
	
	var util = require('./util/util');
	
	var loginPage = require('./pages/Compras/loginpage');
	var homePage = require('./pages/Compras/homepage');
	var homepageWebmail = require('./pages/Webmail/homepageWebmail');
	
	var since = require('jasmine2-custom-message');
	
	beforeEach(function () {
		// something that I want to run before every test case
	});

	afterEach(function() {
		// something that I want to run after every test case
    });


	it("should login to Camuzzi homepage", function () {

		// launch Camuzzi compras page
		browser.get(prop.CamuzziComprasURL);
		browser.driver.manage().window().maximize();
	
		// login procedure
		var homePage = loginPage.LoginToHomePage(prop.dataUser,prop.dataPassword);
		
		browser.sleep(5000);
		
		browser.ignoreSynchronization = true;
		
		// check if "Concursos" header is there after login
		since('Resultado del login').expect(element(by.xpath(prop.xpathCabeceraListaConcursos)).isPresent()).toEqual(true);
		
		browser.ignoreSynchronization = false;
	
		// logout procedure
		var logout = homePage.LogoutComprador();
		
	});
	
	
});
