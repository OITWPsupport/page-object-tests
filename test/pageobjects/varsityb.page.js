var page = require('./page');

var varsitybPage = Object.create(page, {



    /**
     * define elements
     */

	deptNameString: { get: function () { return 'VARSITY B CLUB'; } },
	phoneNumberString: { get: function () { return '208-426-5440'; } },
	emailAddressString: { get: function () { return 'VARSTIYB@BOISESTATE.EDU'; } },
	addressString: { get: function () { return 'ALLEN NOBLE HALL OF FAME 1910 UNIVERSITY DRIVE, BOISE, ID 83725'; } },
	currentthemeversion: { get: function () { return '2.8.15'; } },
	footerDiv: { get: function () { return $('#content > div.post-footer > p'); } },
	title: { get: function () { return browser.getTitle(); } },
	header: { get: function () { return $('.entry-title'); } },
	post_footer: { get: function () { return browser.isExisting('#fw-mega-menu'); } },
	mega_menu_text: { get: function () { return browser.getText("#fw-mega-menu"); } },
	nav_home_link: { get: function () { return browser.getAttribute('#breadcrumb_wrap .nav_home', 'href'); } },
	currentURL: { get: function () { return browser.getUrl(); } },
	search_field: { get: function () { return browser.isExisting('#q'); } },
	search_all: { get: function () { return browser.isExisting('.all_s'); } },
	search_this: { get: function () { return browser.isExisting('.this_s'); } },
	search_toggle: { get: function () { return browser.isExisting('#search_toggle'); } },
	search_toggle_text: { get: function () { return browser.getText("#search_toggle"); } },
	themeversion: { get: function () { return browser.getAttribute('[name="theme-version"]', 'content'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function(path) {
        page.open.call(this, 'https://varsityb.boisestate.edu' + path);
    } }

});

module.exports = varsitybPage;
