var page = require('./page');

var eduPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'COLLEGE OF EDUCATION'; } },
	phoneNumberString: { get: function () { return '208-426-1134'; } },
	emailAddressString: { get: function () { return 'BOISESTATECOE@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'EDUCATION BUILDING, 7TH FLOOR'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = eduPage;
