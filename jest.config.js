// jest.config.js

module.exports = {
    verbose: true,
    testRegex: "src/tests/.*\\.(js|jsx)$",
    reporters: [
        "default",
        [
            "./node_modules/jest-html-reporter",
            {
                pageTitle: "Test Report",
                outputPath: "./output/test-report.html"
            }
        ]
    ]
}