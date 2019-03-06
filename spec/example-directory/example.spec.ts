import { browser } from "protractor";
import { config } from "./../../config";

describe('XYZ Bank', () => {
    it('should go to a valid URL', () => {
        browser.get(config.baseUrl);
        expect(browser.getCurrentUrl()).toEqual(config.baseUrl);
    });
});
