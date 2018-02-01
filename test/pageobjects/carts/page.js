function Page () {
}

Page.prototype.open = function (path) {
    browser.url(path);
};

Page.prototype.footerDiv = function () { return $('//*[@id="colophon"]/div/div[1]'); };

Page.prototype.mega_menu = function () { return browser.isExisting('#fw-mega-menu'); };
Page.prototype.mega_menu_text = function () { return browser.getText("#fw-mega-menu"); };


Page.prototype.title = function () { return browser.getTitle(); };
Page.prototype.header = function () { return $('.page-title'); };
Page.prototype.search_field = function () { return browser.isExisting('//*[@id="masthead"]/div/div[2]/div/form/div/input[1]'); };

module.exports = new Page();
