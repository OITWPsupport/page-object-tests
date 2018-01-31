var page = require('./page');

var ecampusPage = Object.create(page, {

    /**
     * define elements
     */

	deptNameString: { get: function () { return 'eCAMPUS CENTER'; } },
	phoneNumberString: { get: function () { return '(208) 426-1709'; } },
	emailAddressString: { get: function () { return 'eCAMPUS@BOISESTATE.EDU'; } },
	addressString: { get: function () { return '220 E. PARKCENTER BLVD.  BOISE, ID  83706-3940'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },

});

module.exports = ecampusPage;
