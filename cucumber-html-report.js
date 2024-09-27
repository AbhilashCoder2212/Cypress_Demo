const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/screenshots",
    reportPath: "./Cypress/screenshots",
    metadata: {
        browser: {
            name: "chrome",
            version: "60",
        },
        device: "Local test machine",
        platform: {
            name: "ubuntu",
            version: "16.04",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Griffen project" },
            { label: "Release", value: "ACM 1.2.3" },
            { label: "Cycle", value: "B11221.34321" },
            { label: "Execution Start Time", value: "Sept 25th 2024, 02:31 PM EST" },
            { label: "Execution End Time", value: "Sept 25th 2024, 02:56 PM EST" },
        ],
    },
});