var page = require('./page');

var thunderPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'BLUE THUNDER MARCHING BAND'; } },
	phoneNumberString: { get: function () { return ' (208) 426-1846'; } },
	emailAddressString: { get: function () { return 'THUNDER@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'KEITH AND CATHERINE STEIN BAND HALL'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
});

module.exports = thunderPage;
