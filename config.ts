import { Config } from "protractor";

export let config: Config = {
    baseUrl: "http://www.way2automation.com/angularjs-protractor/banking/#/login",
    directConnect: true,
    specs: [
        "spec/**/*.spec.js"
    ],
}
