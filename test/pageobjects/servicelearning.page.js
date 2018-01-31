var page = require('./page');

var slPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'SERVICE-LEARNING PROGRAM'; } },
	phoneNumberString: { get: function () { return '(208) 426-1004'; } },
	emailAddressString: { get: function () { return 'SERVICELEARNING@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'SIMPLOT-MICRON ADVISING & SUCCESS HUB (ASH) ROOM 227'; } },
        currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = slPage;
