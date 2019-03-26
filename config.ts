import { Config } from "protractor";
import { consoleReporter } from "./spec/support/reporter";

export let config: Config = {
    baseUrl: "http://www.way2automation.com/angularjs-protractor/banking/#/login",
    directConnect: true,
    multiCapabilities: [
        {
            browserName: "firefox"
        },
        {
            browserName: "chrome"
        }
    ],
    specs: [
        "spec/**/*.spec.js"
    ],
    onPrepare: () => {
        jasmine.getEnv().addReporter(consoleReporter);
    }
}
