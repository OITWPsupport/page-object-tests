function Page () {
}

Page.prototype.open = function (path) {
    browser.url(path);
};

Page.prototype.themeversion = function() {
	return browser.getAttribute('[name="theme-version"]', 'content');
};

Page.prototype.footerDiv = function () { return $('#content > div.post-footer > p'); };
Page.prototype.title = function () { return browser.getTitle(); };
Page.prototype.header = function () { return $('.entry-title'); };
Page.prototype.mega_menu = function () { return browser.isExisting('#fw-mega-menu'); };
Page.prototype.mega_menu_text = function () { return browser.getText("#fw-mega-menu"); };
Page.prototype.intl_admissions_href = function () { return browser.getAttribute('=International Admissions', 'href'); };

Page.prototype.nav_home = function() { return browser.isExisting('#breadcrumb_wrap .nav_home'); };
Page.prototype.nav_home_link = function () { return browser.getAttribute('#breadcrumb_wrap .nav_home', 'href'); };
Page.prototype.currentURL = function () { return browser.getUrl(); };
Page.prototype.search_field = function () { return browser.isExisting('#q'); };
Page.prototype.search_all = function () { return browser.isExisting('.all_s'); };
Page.prototype.search_this = function () { return browser.isExisting('.this_s'); };
Page.prototype.search_toggle = function () { return browser.isExisting('#search_toggle'); };
Page.prototype.search_toggle_text = function () { return browser.getText("#search_toggle"); };

module.exports = new Page();
