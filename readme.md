# Cypress Test Script for https://reqres.in/api/users API

To clone it, you can go to https://github.com/raihanannafi/bvarta

This repository contains a Cypress test script for testing the API endpoints of the website `https://reqres.in/api/users`. The test script leverages test data stored in JSON format within the `fixtures` directory to perform various test cases. Additionally, a simple database with JSON format is provided in the `fixtures` directory to validate the API responses.

## Dynamic test / Data Driven Test

I use fixture `json` for test data instead of `other` because to avoid using additional library

The test data for each test case is stored in separate JSON files within the `fixtures` directory. Each JSON file contains the necessary input data required to execute the corresponding test case against the `https://reqres.in/api/users` API endpoint. These files are referenced in the test script to drive the test scenarios dynamically.

The `db_user.json` fixture represents a simple database with user information in JSON format. The test script uses this data to validate the API responses against expected user information.

## Test Cases and Assertions

The test script utilizes Cypress' powerful testing capabilities to execute multiple test cases against the `https://reqres.in/api/users` API endpoint. For each test case, the script:

1. Fetches the test data from the corresponding JSON file in the `fixtures` directory.
2. Sends API requests to the `https://reqres.in/api/users` endpoint using the Cypress `cy.request()` method.
3. Validates the response status code using the `expect()` assertion, ensuring the API response matches the expected status code provided in the test data.
4. Verifies the response body against the provided database fixture using the `expect()` assertion. The comparison ensures that the API response data matches the data stored in the simple database fixture.

## Note on Website's Requirements

Due to the website's specific API behavior, the test script includes custom assertions to handle potential edge cases or unexpected API responses. The expected status code for each test case is explicitly defined in the test data JSON file to accommodate these unique requirements.

## How to Run the Tests

1. Clone this repository to your local machine.
2. Ensure you have Node.js and Cypress installed globally or locally within the project.
```
Cypress already include in package.json, so just run

npm install

```
3. Navigate to the project directory and run Cypress.
```
to run all test suites, type in cli:

npx cypress run

```
4. Cypress will automatically detect and run the test script against the `https://reqres.in/api/users` API endpoint.

## Mochawesome Reporter Plugin

The test script is configured to use the Mochawesome reporter plugin for generating detailed test reports. After running the test suite, the Mochawesome report will be saved as an HTML file in the `report` folder.

Here quick screenshot for the report

![image](https://github.com/raihanannafi/bvarta/assets/48504245/83906114-85db-4b5c-b129-da0d156859e5)
![image](https://github.com/raihanannafi/bvarta/assets/48504245/eb7ca61a-cb05-4f56-a3cb-79355a8d9a7e)
![image](https://github.com/raihanannafi/bvarta/assets/48504245/aaf6850c-f174-426f-a3fc-a5665cd6c729)
![image](https://github.com/raihanannafi/bvarta/assets/48504245/0d2ff176-ba27-4999-b8c8-da0fce1c31fc)
![image](https://github.com/raihanannafi/bvarta/assets/48504245/c38a76a5-3d97-4b43-a1b3-dd4592d9f266)





