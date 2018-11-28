import { browser } from "protractor";

describe('TODO', () => {
    it('should go to a valid URL', () => {
        browser.get("http://todomvc.com/examples/angularjs/#/");
        expect(browser.getCurrentUrl()).toEqual("http://todomvc.com/examples/angularjs/#/");
    });
});
