var page = require('./page');

var hrsPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'HUMAN RESOURCE SERVICES'; } },
	phoneNumberString: { get: function () { return '208-426-1616'; } },
	emailAddressString: { get: function () { return 'HRS@BOISESTATE.EDU'; } },
	addressString: { get: function () { return '2225 W UNIVERSITY DR. CAPITOL VILLAGE #3 BOISE, ID 83725-1265'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = hrsPage;
