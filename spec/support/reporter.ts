import * as JasmineConsoleReporter from  "jasmine-console-reporter";

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
