var page = require('./page');

var iboPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'INTERMOUNTAIN BIRD OBSERVATORY'; } },
	phoneNumberString: { get: function () { return '208-426-4354'; } },
	emailAddressString: { get: function () { return 'IBO@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'CORNER OF CAPITOL BLVD AND UNIVERSITY DRIVE'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = iboPage;
