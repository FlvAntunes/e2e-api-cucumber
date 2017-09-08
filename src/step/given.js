const { Request, Storage, Utils } = require('../support');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given }) => {
    Given(/^I set (.*) header to (.*)$/, (headerName, headerValue, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Given(/^I set cookie to (.*)$/, (cookie, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Given(/^I set headers to$/, (headers, callback) => {
        headers.hashes().forEach((h) => {
            const value = Utils.replaceVariables(h.value, Storage.getGlobalVariable());
            Request.setRequestHeader(h.name, value);
        });
        callback();
    });

    Given(/^I set body to (.*)$/, (bodyValue, callback) => {
        const value = Storage.getGlobalVariableByName(bodyValue);
        Request.setRequestBody(JSON.stringify(value));
        callback();
    });

    Given(/^I pipe contents of file (.*) to body$/, (file, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Given(/^I pipe contents of file (.*) as (.*) in global scope$/, (file, name, done) => {
        Utils.pipeFileContentsToRequestBody(file, (err, data) => {
            if (err) throw err;
            Storage.setGlobalVariable(name, data);
            done();
        });
    });

    Given(/^I set query parameters to$/, (queryParameters, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Given(/^I set form parameters to$/, (formParameters, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Given(/^I have basic authentication credentials (.*) and (.*)$/, (username, password, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Given(/^I store the raw value (.*) as (.*) in scenario scope$/, (value, variable, callback) => {
        // TODO: Falta implementar
        callback();
    });

    Given(/^I'll wait (.*) seconds$/, (time, done) => {
        setTimeout(() => {
            done();
        }, time);
    });
});
