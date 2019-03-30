import * as JasmineConsoleReporter from  "jasmine-console-reporter";
import * as Jasmine2HtmlReporter from "protractor-jasmine2-html-reporter"

export const consoleReporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: "indent",
    timeUnit: "ms",
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
    activity: "dots",
    emoji: true,
    beep: true
});

export const htmlReporter = new Jasmine2HtmlReporter({
    savePath: "temp/report"
});
