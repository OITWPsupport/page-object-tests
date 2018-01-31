var page = require('./page');

var gradCollPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'GRADUATE COLLEGE'; } },
	phoneNumberString: { get: function () { return '(208) 426-3903'; } },
	emailAddressString: { get: function () { return 'GRADCOLL@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'RIVERFRONT HALL, ROOM 307'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = gradCollPage;
