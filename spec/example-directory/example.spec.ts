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
        expect(customerLogin.yourNameDropdown.isDisplayed()).toEqual(true);
    });
    it(`should login as ${USERNAME}`, () => {
        customerLogin.yourNameDropdown.click();
        customerLogin.customerList.get(4).click();
        customerLogin.loginButton.click();
        expect(userPanel.usernameLabel.getText()).toEqual(USERNAME);
    });
    it("should logout", () => {
        userPanel.logoutButton.click();
        expect(customerLogin.yourNameDropdown.isDisplayed()).toEqual(true);
    });
});
