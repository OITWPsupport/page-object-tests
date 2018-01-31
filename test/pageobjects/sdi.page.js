var page = require('./page');

var sdiPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'STUDENT DIVERSITY AND INCLUSION'; } },
	phoneNumberString: { get: function () { return '208-426-5950'; } },
	emailAddressString: { get: function () { return 'EVANGELINEBEAVER@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'STUDENT UNION BUILDING, 2ND FLOOR'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = sdiPage;
