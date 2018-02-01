var page = require('./page');

var hsPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'HEALTH SERVICES'; } },
	phoneNumberString: { get: function () { return '(208) 426-1459'; } },
	emailAddressString: { get: function () { return 'HEALTHSERVICES@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'NORCO BUILDING'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = hsPage;
