// Jasmine html reporter
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// An example configuration file.
exports.config = {
	directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome'
	},

	// Framework to use. Jasmine is recommended.
	framework: 'jasmine',

	// Spec patterns are relative to the current working directory when
	// protractor is called.
	specs: ['camuzzi_spec.js'],
	//allScriptsTimeout: 400000,

	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		showColors: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 400000
	},

	// For reporting purposes
	onPrepare: function () {
		jasmine.getEnv().addReporter(
			new Jasmine2HtmlReporter({
				savePath: 'reports'
			}));
	}

};
