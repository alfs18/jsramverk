/**
 * Test for getting started with Selenium.
 */
"use strict";

var assert = require("assert");   // hämtas från Mocha
// const test = require("selenium-webdriver/testing");
// const webdriver = require("selenium-webdriver");
// const By = webdriver.By;

const {By, Builder} = require('selenium-webdriver');

let browser;

// Test suite
describe("Jsramverk", function() {
    before(async function () {
        browser = await new Builder().forBrowser('chrome').build();
    });

    // Test case
    it("Test index", async function() {
        await browser.get('http://localhost:5173/');

        // Check correct title
        let title = await browser.getTitle();
        assert.equal("Jsramverk", title);

        await browser.manage().setTimeouts({implicit: 500});

        // Check correct heading
        let element = await browser.findElement(By.css("h1"));
        let text = await element.getText();
        assert.equal("Välkommen!", text);
    });


    it("Test go to Kmom01", async function() {
        // Use nav link to go to home page
        await browser.findElement(By.linkText("Kmom01")).then(function(element) {
            element.click();
        });

        await browser.manage().setTimeouts({implicit: 500});

        await browser.findElement(By.linkText("Kmom01")).then(function(element) {
            element.click();
        });

        // Check correct heading
        let element = await browser.findElement(By.css("h1"));
        let text = await element.getText();
        assert.notEqual("Välkommen!", text);
        assert.equal("Kursmoment 1", text);

        // Check correct content
        let element2 = await browser.findElement(By.css("a.gh"));
        let text2 = await element2.getText();
        assert.notEqual("Skapa text", text2);
        assert.equal("Github", text2);


        // Check correct URL ending
        let url = await browser.getCurrentUrl();
        assert.ok(url.endsWith("/week/1"));
    });


    it("Test go to Create report", async function() {
        // Use nav link to go to home page
        await browser.findElement(By.linkText("Create report")).then(function(element) {
            element.click();
        });

        await browser.manage().setTimeouts({implicit: 500});

        await browser.findElement(By.linkText("Create report")).then(function(element) {
            element.click();
        });

        // Check correct heading
        let element = await browser.findElement(By.css("h1"));
        let text = await element.getText();
        assert.notEqual("Välkommen!", text);
        assert.equal("Skapa text", text);

        // Check correct content
        let element2 = await browser.findElement(By.css("p"));
        let text2 = await element2.getText();
        assert.notEqual("Skapa text", text2);
        assert.equal("Vänligen logga in för att ta del av innehållet.", text2);


        // Check correct URL ending
        let url = await browser.getCurrentUrl();
        assert.ok(url.endsWith("/create"));
    });



    it("Test go to Login", async function() {
        // Use nav link to go to home page
        await browser.findElement(By.linkText("Login")).then(function(element) {
            element.click();
        });

        await browser.manage().setTimeouts({implicit: 500});

        await browser.findElement(By.linkText("Login")).then(function(element) {
            element.click();
        });

        // Check correct heading
        let element = await browser.findElement(By.css("h1"));
        let text = await element.getText();
        assert.equal("Logga in", text);

        // Check that the page contains a form with content
        let element2 = await browser.findElement(By.css("form"));
        let text2 = await element2.getText();
        assert.equal("E-post\nLösenord", text2);

        // Check that the first label is correct
        let element3 = await browser.findElement(By.css("label"));
        let text3 = await element3.getText();
        assert.equal("E-post", text3);

        // Check that the first label is correct
        let element4 = await browser.findElement(By.css("input[type='submit']"));
        let text4 = await element4.getAttribute("value");
        assert.equal("Logga in", text4);

        // Check correct URL ending
        let url = await browser.getCurrentUrl();
        assert.ok(url.endsWith("/login"));
    });

    after(async () => await browser.quit());
});
