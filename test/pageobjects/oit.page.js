var page = require('./page');

var oitPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'OFFICE OF INFORMATION TECHNOLOGY'; } },
	phoneNumberString: { get: function () { return '(208) 426-4357'; } },
	emailAddressString: { get: function () { return 'HELPDESK@BOISESTATE.EDU'; } },
	addressString: { get: function () { return '1910 UNIVERSITY DRIVE'; } },
        currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = oitPage;
