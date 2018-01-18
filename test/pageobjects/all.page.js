var page = require('./page');

var allPage = Object.create(page, {

	footerDiv: { get: function () { return $('#content > div.post-footer > p'); } },
	intl_admissions_href: { get: function () { return browser.getAttribute('=International Admissions', 'href'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function(url) {
        page.open.call(this, url);
    } }

});

module.exports = allPage;
