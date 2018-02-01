var page = require('./page');

var hsPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'COLLEGE OF HEALTH SCIENCES'; } },
	phoneNumberString: { get: function () { return '208-426-4141'; } },
	emailAddressString: { get: function () { return 'COHS@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ADMINISTRATIVE OFFICES IN NORCO SUITE 408'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = hsPage;
