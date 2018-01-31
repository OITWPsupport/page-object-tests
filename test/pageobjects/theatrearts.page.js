var page = require('./page');

var theatreartsPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'THEATRE ARTS DEPARTMENT'; } },
	phoneNumberString: { get: function () { return '208-426-3957'; } },
	emailAddressString: { get: function () { return 'THEATREARTS@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'MORRISON CENTER, ROOM MCC100'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
});

module.exports = theatreartsPage;
