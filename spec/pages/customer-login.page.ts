import { ElementFinder, $, $$, ElementArrayFinder } from "protractor";

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
}
