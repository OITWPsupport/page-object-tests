var page = require('./page');

var careerPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'CAREER CENTER'; } },
	phoneNumberString: { get: function () { return '(208) 426-1747'; } },
	emailAddressString: { get: function () { return 'CAREER@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ACADEMIC & CAREER SERVICE BUILDING, ROOM 111'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = careerPage;
