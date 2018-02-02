function Page () {
}

Page.prototype.open = function (path) {
    browser.url(path);
};

Page.prototype.themeversion = function() {
        return browser.getAttribute('[name="theme-version"]', 'content');
};

Page.prototype.currentURL = function () { return browser.getUrl(); };
Page.prototype.footerDiv = function () { return $('//*[@id="colophon"]/div/div[1]'); };
Page.prototype.title = function () { return browser.getTitle(); };
Page.prototype.header = function () { return $('.page-title'); };
// Page.prototype.search_field = function () { return browser.isExisting('//*[@id="masthead"]/div/div[2]/div/form/div/input[1]'); };

module.exports = new Page();
