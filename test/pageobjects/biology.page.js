var page = require('./page');

var biologyPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'DEPARTMENT OF BIOLOGICAL SCIENCES'; } },
	phoneNumberString: { get: function () { return '208-426-3262'; } },
	emailAddressString: { get: function () { return 'BIOINFO@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'SCIENCE BLDG RM 107'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = biologyPage;
