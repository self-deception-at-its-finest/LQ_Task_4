const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin.default(config)],
        })
    );
    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

module.exports = defineConfig({
    defaultCommandTimeout: 10000,
    execTimeout: 5000,
    taskTimeout: 5000,
    "chromeWebSecurity": false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        baseUrl: "https://telnyx.com",
        specPattern: "**/*.feature",
        supportFile: false,
        setupNodeEvents,
    },
});