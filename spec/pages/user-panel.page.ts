import { ElementFinder, $, $$, promise } from "protractor";

export class UserPanel {
    private logoutButtonCss: string = "button.logout";
    private usernameLabelCss: string = "div.ng-scope strong > span";

    public logoutButton: ElementFinder;
    public usernameLabel: ElementFinder;

    constructor() {
        this.logoutButton = $(this.logoutButtonCss);
        this.usernameLabel = $(this.usernameLabelCss);
    }

    public logout(): void {
        this.logoutButton.click();
    }

    public getUsername(): promise.Promise<string> {
        return this.usernameLabel.getText();
    }
}