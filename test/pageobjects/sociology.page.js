var page = require('./page');

var sociologyPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'DEPARTMENT OF SOCIOLOGY'; } },
	phoneNumberString: { get: function () { return '(208) 426-3406'; } },
	emailAddressString: { get: function () { return 'SOCIOLOGY@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'RIVERFRONT HALL 214'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
});

module.exports = sociologyPage;
