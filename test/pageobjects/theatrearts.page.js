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
	footerDiv: { get: function () { return $('#content > div.post-footer > p'); } },
	title: { get: function () { return browser.getTitle(); } },
	header: { get: function () { return $('.entry-title'); } },
	post_footer: { get: function () { return browser.isExisting('#fw-mega-menu'); } },
	mega_menu_text: { get: function () { return browser.getText("#fw-mega-menu"); } },
	intl_admissions_href: { get: function () { return browser.getAttribute('=International Admissions', 'href'); } },
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
        page.open.call(this, 'https://theatrearts.boisestate.edu' + path);
    } }

});

module.exports = theatreartsPage;
