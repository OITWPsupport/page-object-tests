var page = require('./page');

var webguidePage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'COMMUNICATIONS AND MARKETING - UNIVERSITY WEB'; } },
	phoneNumberString: { get: function () { return '(208) 426-1577'; } },
	emailAddressString: { get: function () { return 'WEBTEAM@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ALUMNI AND FRIENDS CENTER'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = webguidePage;
