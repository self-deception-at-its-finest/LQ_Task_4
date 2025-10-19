## Tech stack

-   [NodeJS](https://nodejs.org/)
-   [Cypress](https://docs.cypress.io/app/get-started/why-cypress)

## Install

-   Install [NodeJS](https://nodejs.org/)

-   Install [Git](https://git-scm.com/)

## Dependencies

- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
- [@cypress/browserify-preprocessor](https://www.npmjs.com/package/@cypress/browserify-preprocessor)


Clone this repo:

```bash
git clone https://github.com/self-deception-at-its-finest/LQ_Task_4
```

-   Go to the project folder

```bash
cd LQ_Task_4
```

-   Install dependencies:

```bash
npm i
```
## Steps to run

To run all tests use the following commands:

-   In headless mode (without showing the browser):

```bash
npx cypress run
```
or to open GUI and run tests there:
```bash
npx cypress open
```

-   In headed mode (with showing the browser):

```bash
npx cypress run --headed
```

## Reports


### CI

When running the `workflow.yml` workflow, the HTML report is deployed to the `test-reports` branch. The GitHub Pages feature is enabled in this branch, and you can view the deployed report by following this [link](https://self-deception-at-its-finest.github.io/LQ_Task_4/).

## GitHub Actions

In this Task, I use GitHub Actions to run all the tests and then deploy the report in the `test-reports` branch.