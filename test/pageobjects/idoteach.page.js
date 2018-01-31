var page = require('./page');

var idoteachPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'IDOTEACH'; } },
	phoneNumberString: { get: function () { return '(208) 426-2824'; } },
	emailAddressString: { get: function () { return 'IDOTEACH@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ACADEMIC & CAREER SERVICES, ROOM 217'; } },
        currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = idoteachPage;
