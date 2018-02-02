var expect = require('chai').expect;

var site = 'oshconcart';
var pageObject = '../../pageobjects/carts/' + site + '.page';
var ThisPage = require(pageObject);

//
// These are the page-specific values to change for each new test
//

var testURL = process.env.URL;
var title = process.env.TITLE;
var header = process.env.HEADER;

describe('test suite for ' + testURL, function () {

var startTimestamp = new Date().getTime();

    // This one just loads the page. If any of the test 
    // are only'd, this one has to be, too. (It's OK to do 
    // multiple 'it.only' statements.)
    it.only('Loads the page', function () {
	ThisPage.open(testURL);
	console.log('Testing ' + testURL);
//	var startTimestamp = new Date().getTime();
    } );

    it('should load the page in under 7 seconds', function () {
	ThisPage.post_footerDiv().waitForVisible();
        var endTimestamp = new Date().getTime();
        var pageLoadTime = (endTimestamp-startTimestamp);
        console.log('It took ' + pageLoadTime + ' ms to load the page.');
	expect(pageLoadTime).to.be.below(7000);
    });

    it.only('should verify the URL', function () {
        expect(ThisPage.currentURL()).to.equal(testURL);
    } );

    it.only('should check that the search_field exists', function () {
        expect(ThisPage.search_field).to.be.true;
    });

    it('should confirm that the theme version is correct', function () {
	expect(ThisPage.themeversion()).to.equal(ThisPage.currentthemeversion);
    } );

    it.skip('should read the value of the page header', function () {
	expect(ThisPage.header().getText()).to.equal(header);
	expect(ThisPage.header().getText()).to.not.equal('The page you requested could not be found.');
    });

    it.only('should read the value of post-footer', function () {
        expect(ThisPage.footerDiv().getText()).to.include('Storefront designed by WooCommerce');
    } );

    it('should check that the nav_home exists', function () {
        expect(ThisPage.nav_home()).to.be.true;
    });

    it.only('should check the title', function () {
        expect(ThisPage.title()).to.equal(title);
    });

});
