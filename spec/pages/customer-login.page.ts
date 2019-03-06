import { ElementFinder, $ } from "protractor";

export class CustomerLogin {
    private yourNameInputCss: string = "#userSelect";

    public yourNameInput: ElementFinder;

    constructor() {
        this.yourNameInput = $(this.yourNameInputCss);
    }
}
