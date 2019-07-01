import { Config } from "protractor";
import { consoleReporter } from "./spec/support/reporter";
import { htmlReporter } from "./spec/support/reporter";
import { DEFAULT_USERNAME } from "./spec/support/data";

export let config: Config = {
    baseUrl: "http://www.way2automation.com/angularjs-protractor/banking/#/login",
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    params: {
        username: DEFAULT_USERNAME
    },
    specs: [
        "spec/**/*.spec.js"
    ],
    onPrepare: () => {
        jasmine.getEnv().addReporter(consoleReporter);
        jasmine.getEnv().addReporter(htmlReporter);
    }
}
