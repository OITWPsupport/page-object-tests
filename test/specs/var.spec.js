var expect = require('chai').expect;

var site = process.env.SITE;
var pageObject = '../pageobjects/' + site + '.page';
var ThisPage = require(pageObject);

//
// These are the page-specific values to change for each new test
//

var testURL = process.env.URL;
var title = process.env.TITLE;
var header = process.env.HEADER;

describe('test suite for ' + testURL, function () {
    var path = testURL.substring(testURL.indexOf('.edu/')+4);
    ThisPage.open(path);
    console.log('Testing ' + testURL);

    it('should load the page in under 7 seconds', function () {
	var path = testURL.substring(testURL.indexOf('.edu/')+4);
        var startTimestamp = new Date().getTime();
        ThisPage.open(path);
	ThisPage.footerDiv.waitForVisible();
        var endTimestamp = new Date().getTime();
        var pageLoadTime = (endTimestamp-startTimestamp);
        console.log('It took ' + pageLoadTime + ' ms to load the page.');
	expect(pageLoadTime).to.be.below(7000);
    });

    it('should verify the URL', function () {
        expect(ThisPage.currentURL).to.equal(testURL);
    } );

    it('should verify the link to International Admissions', function () {
	expect(ThisPage.intl_admissions_href).to.equal('https://globaleducation.boisestate.edu/international/');
    } );

    it('should check that the search_field exists', function () {
        expect(ThisPage.search_field).to.be.true;
    });

    it('should check that the search_all exists', function () {
        expect(ThisPage.search_all).to.be.true;
    });

    it('should check that the search_this exists', function () {
        expect(ThisPage.search_this).to.be.true;
    });

    it('should check that the search_toggle exists', function () {
        expect(ThisPage.search_toggle).to.be.true;
    });

    it('should confirm that the search controls are present and correct', function () {
	expect(ThisPage.search_toggle_text).to.include('SEARCH ALL BOISE STATE');
	expect(ThisPage.search_toggle_text).to.include('SEARCH THIS SECTION');
    } );

    it('should confirm that the theme version is correct', function () {
	expect(ThisPage.themeversion).to.equal(ThisPage.currentthemeversion);
    } );

    it('should read the value of footer', function () {
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.deptNameString);
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.phoneNumberString);
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.emailAddressString);
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.addressString);
	expect(ThisPage.header.getText()).to.equal(header);
	expect(ThisPage.header.getText()).to.not.equal('The page you requested could not be found.');
    });

    it('should check that the nav_home exists', function () {
        expect(ThisPage.nav_home).to.be.true;
    });

    it('should check for the navigation back to www.boisestate.edu', function () {
	expect(ThisPage.nav_home_link).to.equal('http://www.boisestate.edu/');
    });

    it('should check the title', function () {
        expect(ThisPage.title).to.equal(title);
    });

    it('should check that the mega menu exists', function () {
        expect(ThisPage.mega_menu).to.be.true;
    });

    it('should check the contents of the mega menu', function () {
        expect(ThisPage.mega_menu_text).to.include('RESEARCH');
        expect(ThisPage.mega_menu_text).to.include('ADMINISTRATION');
        expect(ThisPage.mega_menu_text).to.include('ABOUT');
        expect(ThisPage.mega_menu_text).to.include('ADMISSIONS');
        expect(ThisPage.mega_menu_text).to.include('ACADEMICS');
        expect(ThisPage.mega_menu_text).to.include('GIVING');
        expect(ThisPage.mega_menu_text).to.include('ALUMNI');
    });

});
