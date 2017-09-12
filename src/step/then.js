const { Assert, Request, Storage, Utils } = require('../support/index');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Then }) => {
    Then(/^response code should be (.*)$/, (responseCode, callback) => {
        const assertion = Assert.assertResponseCode(responseCode);
        Assert.callbackWithAssertion(callback, assertion);
    });

    Then(/^response code should not be (.*)$/, (responseCode, callback) => {
        const assertion = Assert.assertResponseCode(responseCode);
        Assert.callbackWithAssertion(callback, assertion);
    });

    Then(/^response header (.*) should exist$/, (header, callback) => {
        const success = typeof Request.getResponseObject().headers[
            Utils.replaceVariables(header).toLowerCase()
        ] === 'undefined';

        Assert.callbackWithAssertion(callback, Assert.getAssertionResult(success, true, false));
    });

    Then(/^response header (.*) should not exist$/, (header, callback) => {
        const success = typeof Request.getResponseObject().headers[
            Utils.replaceVariables(header).toLowerCase()
        ] !== 'undefined';

        Assert.callbackWithAssertion(callback, Assert.getAssertionResult(success, true, false));
    });

    Then(/^response header (.*) should be (.*)$/, (header, expression, callback) => {
        Assert.callbackWithAssertion(
            callback,
            Assert.assertHeaderValue(
                Utils.replaceVariables(header),
                Utils.replaceVariables(expression)
            )
        );
    });

    Then(/^response header (.*) should not be (.*)$/, (header, expression, callback) => {
        Assert.callbackWithAssertion(
            callback,
            !Assert.assertHeaderValue(
                Utils.replaceVariables(header),
                Utils.replaceVariables(expression)
            )
        );
    });

    Then(/^response body should be valid (xml|json)$/, (contentType, callback) => {
        const assertion = Assert.assertResponseBodyContentType(contentType);
        Assert.callbackWithAssertion(callback, assertion);
    });

    Then(/^response body should contain (.*)$/, (expression, callback) => {
        Assert.callbackWithAssertion(
            callback,
            Assert.assertResponseBodyContainsExpression(
                Utils.replaceVariables(expression)
            )
        );
    });

    Then(/^response body should not contain (.*)$/, (expression, callback) => {
        Assert.callbackWithAssertion(
            callback,
            !Assert.assertResponseBodyContainsExpression(
                Utils.replaceVariables(expression)
            )
        );
    });

    Then(/^response body path (.*) should be (((?!of type).*))$/, (path, value, callback) => {
        Assert.callbackWithAssertion(
            callback,
            Assert.assertPathInResponseBodyMatchesExpression(
                Utils.replaceVariables(path),
                Utils.replaceVariables(value)
            )
        );
    });

    Then(/^response body path (.*) should not be (((?!of type).+))$/, (path, value, callback) => {
        Assert.callbackWithAssertion(
            callback,
            !Assert.assertPathInResponseBodyMatchesExpression(
                Utils.replaceVariables(path),
                Utils.replaceVariables(value)
            )
        );
    });

    Then(/^response body path (.*) should be of type array$/, (path, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Then(/^response body path (.*) should be of type array with length (.*)$/, (path, length, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Then(/^response body should be valid according to schema file (.*)$/, (schemaFile, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Then(/^response body should be valid according to openapi description (.*) in file (.*)$/, (definitionName, swaggerSpecFile, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Then(/^I store the value of body path (.*) as access token$/, (path, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Then(/^I store the value of response header (.*) as (.*) in global scope$/, (headerName, variableName, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Then(/^I store the value of body path (.*) as (.*) in global scope$/, (pathParam, variableName, callback) => {
        const value = Utils.evaluatePath(pathParam, Request.getResponseObject().body);
        Storage.setGlobalVariable(variableName, value);
        callback();
    });

    Then(/^I store the value of response header (.*) as (.*) in scenario scope$/, (name, variable, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Then(/^I store the value of body path (.*) as (.*) in scenario scope$/, (path, variable, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Then(/^value of scenario variable (.*) should be (.*)$/, (variableName, variableValue, callback) => {
        // TODO: Falta implementar
        callback();
    });
});
