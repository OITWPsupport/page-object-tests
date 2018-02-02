var page = require('./carts_page');

var oshconcartPage = Object.create(page, {

    /**
     * define elements
     */

//	deptNameString: { get: function () { return 'ADVISING AND ACADEMIC SUPPORT CENTER'; } },
//	phoneNumberString: { get: function () { return '(208) 426-4049'; } },
//	emailAddressString: { get: function () { return ' ACADEMIC@BOISESTATE.EDU'; } },
//	addressString: { get: function () { return 'SMASH BUILDING, FIRST FLOOR'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
	search_field: { get: function () { return browser.isExisting('#woocommerce-product-search-field-0'); } },
});

module.exports = oshconcartPage;
