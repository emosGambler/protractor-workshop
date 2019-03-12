import { ElementFinder, $, $$ } from "protractor";

export class UserPanel {
    private logoutButtonCss: string = "button.logout";
    private usernameLabelCss: string = "div.ng-scope strong > span";

    public logoutButton: ElementFinder;
    public usernameLabel: ElementFinder;

    constructor() {
        this.logoutButton = $(this.logoutButtonCss);
        this.usernameLabel = $(this.usernameLabelCss);
    }
}