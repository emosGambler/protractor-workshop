import { browser } from "protractor";
import { config } from "./../../config";
import { CustomerLogin } from "./../pages/customer-login.page";
import { Home } from "./../pages/home.page";
import { UserPanel } from "../pages/user-panel.page";
import { USERNAME } from "./../support/data";

const customerLogin: CustomerLogin = new CustomerLogin();
const home: Home = new Home();
const userPanel: UserPanel = new UserPanel();

describe("XYZ Bank app", () => {

    beforeAll(() => {
        browser.get(config.baseUrl);
    });

    it("should go to a valid URL", () => {
        expect(browser.getCurrentUrl()).toEqual(config.baseUrl);
    });
    it("should go to Customer Login page", () => {
        home.customerLoginButton.click();
        expect(customerLogin.isYourNameDisplayed()).toEqual(true);
    });
    it(`should login as ${USERNAME}`, () => {
        customerLogin.loginAs(USERNAME);
        expect(userPanel.getUsername()).toEqual(USERNAME);
    });
    it("should logout", () => {
        userPanel.logout();
        expect(customerLogin.isYourNameDisplayed()).toEqual(true);
    });
});
