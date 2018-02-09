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

var startTimestamp = new Date().getTime();

    // This one just loads the page. If any of the test 
    // are only'd, this one has to be, too. (It's OK to do 
    // multiple 'it.only' statements.)
    it.only('Loads the page', function () {
	ThisPage.open(testURL);
	console.log('Testing ' + testURL);
//	var startTimestamp = new Date().getTime();
    } );

    it.only('should load the page in under 9 seconds', function () {
	ThisPage.post_footerDiv().waitForVisible();
        var endTimestamp = new Date().getTime();
        var pageLoadTime = (endTimestamp-startTimestamp);
        console.log('It took ' + pageLoadTime + ' ms to load the page.');
	expect(pageLoadTime).to.be.below(9000);
    });

    it.only('should verify the URL', function () {
        expect(ThisPage.currentURL()).to.equal(testURL);
    } );

    it('should verify the link to International Admissions', function () {
	expect(ThisPage.intl_admissions_href()).to.equal('https://globaleducation.boisestate.edu/international/');
    } );

    it('should check that the search_field exists', function () {
        expect(ThisPage.search_field()).to.be.true;
    });

    it('should check that the search_all exists', function () {
        expect(ThisPage.search_all()).to.be.true;
    });

    it('should check that the search_this exists', function () {
        expect(ThisPage.search_this()).to.be.true;
    });

    it('should check that the search_toggle exists', function () {
        expect(ThisPage.search_toggle()).to.be.true;
    });

    it('should confirm that the search controls are present and correct', function () {
	expect(ThisPage.search_toggle_text()).to.include('SEARCH ALL BOISE STATE');
	expect(ThisPage.search_toggle_text()).to.include('SEARCH THIS SECTION');
    } );

    it.only('should confirm that the theme version is correct', function () {
	expect(ThisPage.themeversion()).to.equal(ThisPage.currentthemeversion);
    } );

    it.only('should read the value of post-footer', function () {
	expect(ThisPage.post_footerDiv().getText()).to.include(ThisPage.deptNameString);
	expect(ThisPage.post_footerDiv().getText()).to.include(ThisPage.phoneNumberString);
	// expect(ThisPage.post_footerDiv().getText()).to.include(ThisPage.emailAddressString);
	expect(ThisPage.post_footerDiv().getText()).to.include(ThisPage.addressString);
	expect(ThisPage.footerDiv().getText()).to.include('2018 Boise State University 1910 University Dr., Boise, ID 83725 (208) 426-1000');
    } );


    it.only('should read the value of the page header', function () {
	expect(ThisPage.header().getText()).to.equal(header);
	expect(ThisPage.header().getText()).to.not.equal('The page you requested could not be found.');
    });

    it('should check that the nav_home exists', function () {
        expect(ThisPage.nav_home()).to.be.true;
    });

    it('should check for the navigation back to www.boisestate.edu', function () {
	expect(ThisPage.nav_home_link()).to.equal('http://www.boisestate.edu/');
    });

    it('should check that the footer-nav exists', function () {
        expect(ThisPage.footer_nav()).to.be.true;
    });

    it('should check that the link to myBoiseState in the global footer exists', function () {
        expect(ThisPage.myBoiseState_footer()).to.be.true;
    });

    it('should check for the footer navigation to my.boisestate.edu', function () {
        expect(ThisPage.myBoiseState_footer_link()).to.equal('https://my.boisestate.edu/');
    });

    it('should check that the bScoial icon in the global footer exists', function () {
        expect(ThisPage.bSocial_footer()).to.be.true;
    });

    it('should check for the footer navigation to news.boisestate.edu/social', function () {
        expect(ThisPage.bSocial_footer_link()).to.equal('http://news.boisestate.edu/social/');
    });

    it.only('should check the title', function () {
        expect(ThisPage.title()).to.equal(title);
    });

    it('should check that the mega menu exists', function () {
        expect(ThisPage.mega_menu()).to.be.true;
    });

    it('should check the contents of the mega menu', function () {
        expect(ThisPage.mega_menu_text()).to.include('RESEARCH');
        expect(ThisPage.mega_menu_text()).to.include('ADMINISTRATION');
        expect(ThisPage.mega_menu_text()).to.include('ABOUT');
        expect(ThisPage.mega_menu_text()).to.include('ADMISSIONS');
        expect(ThisPage.mega_menu_text()).to.include('ACADEMICS');
        expect(ThisPage.mega_menu_text()).to.include('GIVING');
        expect(ThisPage.mega_menu_text()).to.include('ALUMNI');
    });

});
