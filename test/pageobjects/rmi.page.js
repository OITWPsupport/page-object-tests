var page = require('./page');

var rmiPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'RISK MANAGEMENT AND INSURANCE'; } },
	phoneNumberString: { get: function () { return ''; } },
	emailAddressString: { get: function () { return ''; } },
	addressString: { get: function () { return 'RIVERFRONT HALL, SUITE 201'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = rmiPage;
