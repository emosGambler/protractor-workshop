import { ElementFinder, $, $$, ElementArrayFinder, promise } from "protractor";

export class CustomerLogin {
    private customerListCss: string = "#userSelect > option";
    private loginButtonCss: string = "button[type]";
    private yourNameInputCss: string = "#userSelect";

    public customerList: ElementArrayFinder;
    public loginButton: ElementFinder;
    public yourNameDropdown: ElementFinder;

    constructor() {
        this.customerList = $$(this.customerListCss);
        this.yourNameDropdown = $(this.yourNameInputCss);
        this.loginButton = $(this.loginButtonCss);
    }

    public isYourNameDisplayed(): promise.Promise<boolean> {
        return this.yourNameDropdown.isDisplayed();
    }

    public loginAs(username: string): void {
        this.yourNameDropdown.click();
        switch (username) {
            case "Hermoine Granger":
                this.customerList.get(1).click();
                break;
            case "Harry Potter":
                this.customerList.get(2).click();
                break;
            case "Ron Weasly":
                this.customerList.get(3).click();
                break;
            case "Albus Dumbledore":
                this.customerList.get(4).click();
                break;
        }
        this.loginButton.click();
    }
}
