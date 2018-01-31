var page = require('./page');

var irPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'OFFICE OF INSTITUTIONAL RESEARCH'; } },
	phoneNumberString: { get: function () { return '(208) 426-1575'; } },
	emailAddressString: { get: function () { return 'IR@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'RIVERFRONT HALL 308'; } },
        currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = irPage;
