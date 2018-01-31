var page = require('./page');

var ipPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'DEPARTMENT NAME'; } },
	phoneNumberString: { get: function () { return 'DEPARTMENT PHONE'; } },
	emailAddressString: { get: function () { return 'DEPARTMENT EMAIL'; } },
	addressString: { get: function () { return 'DEPARTMENT LOCATION'; } },
        currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = ipPage;
