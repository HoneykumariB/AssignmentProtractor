import { Config,Capabilities  } from "protractor";
import * as reporter from "cucumber-html-reporter"

export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    Capabilities: {
        browserName: 'chrome'
    },

    specs: [
        './e2e/features/.'
      ],

    cucumberOpts: {
        // require: 'Features/Step_Definitions/StepDef.js',
        format: 'json:test-reports/cucumber-test-results.json',
        // format: ['progress', 'pretty:output.txt'],
        //format:'pretty:./cucumberreports2.txt',

        onComplete: () => {
            //var reporter = require('cucumber-html-reporter');

            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumber-test-results.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome 89.0.4389.114",
                    "Platform": "MAC OS",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };

            reporter.generate(options);

        },
        require: [
            './e2e/**/*.steps.ts'
        ]
    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            openReportInBrowser: true,
            pageTitle: "Project Report",
            pageFooter: "<div><p>Protractor with cucumber</p></div>",
            customData: {
                title: 'Protractor Cucucmber Report',
                data: [
                    { label: 'Project', value: 'Protractor with Cucumber test' },
                    { label: 'Created By', value: 'Honey Kumari Barnwal' }
                ]
            }
        },

    }]
}