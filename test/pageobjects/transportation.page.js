var page = require('./page');

var transportationPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'TRANSPORTATION & PARKING'; } },
	phoneNumberString: { get: function () { return 'PHONE: 208-426-7275'; } },
	emailAddressString: { get: function () { return 'PARKINGQUESTIONS@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'STUDENT UNION BUILDING, TRANSIT CENTER 8AM-5PM M-F'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
});

module.exports = transportationPage;
