var page = require('./page');

var admissionsPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'ADMISSIONS'; } },
	phoneNumberString: { get: function () { return '(208) 426-1156'; } },
	emailAddressString: { get: function () { return 'ADMISSIONS@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'STUDENT UNION BUILDING, 1ST FLOOR'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = admissionsPage;
