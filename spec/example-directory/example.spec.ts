import { browser } from "protractor";
import { config } from "./../../config";
import { CustomerLogin } from "./../pages/customer-login.page";
import { Home } from "./../pages/home.page";

const customerLogin: CustomerLogin = new CustomerLogin();
const home: Home = new Home();

describe('XYZ Bank', () => {
    it('should go to a valid URL', () => {
        browser.get(config.baseUrl);
        expect(browser.getCurrentUrl()).toEqual(config.baseUrl);
    });
    it('should go to Customer Login page', () => {
        home.customerLoginButton.click();
        expect(customerLogin.yourNameInput.isDisplayed()).toEqual(true);
    });
});
