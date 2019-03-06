import { ElementFinder, $, $$ } from "protractor";

export class Home {
    private customerLoginButtonCss: string = "button.btn-primary";

    public customerLoginButton: ElementFinder;

    constructor() {
        this.customerLoginButton = $$(this.customerLoginButtonCss).first();
    }
}