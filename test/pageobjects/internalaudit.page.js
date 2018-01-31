var page = require('./page');

var iaPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'INTERNAL AUDIT AND ADVISORY SERVICES'; } },
	phoneNumberString: { get: function () { return 'PHONE : (208) 426-1000'; } },
	emailAddressString: { get: function () { return 'FAX: (208) 426-4835'; } },
	addressString: { get: function () { return '1117 DENVER'; } },
        currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = iaPage;
