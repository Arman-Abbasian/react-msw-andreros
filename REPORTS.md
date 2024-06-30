# react-sample-app reports

Reporting in any web application can be very helpful for a number of reasons ranging from optimization to bug detection. This application has installed `statoscope` webpack plugin to generate reports on the application.

## Statoscope reference links

- GitHub page: [https://github.com/statoscope/statoscope](https://github.com/statoscope/statoscope)
- NPM page: [https://www.npmjs.com/package/@statoscope/webpack-plugin](https://www.npmjs.com/package/@statoscope/webpack-plugin)
- Article "Statoscope: A Course Of Intensive Therapy For Your Bundle": [https://www.smashingmagazine.com/2022/02/statoscope-course-intensive-therapy-bundle/](https://www.smashingmagazine.com/2022/02/statoscope-course-intensive-therapy-bundle/)

## Enabling report generation

In your `webpack.config.js` file you will find the following code block:

```javascript
    plugins: [
        new StatoscopeWebpackPlugin({
            saveReportTo: 'reports/report-[hash].html',
            saveStatsTo: 'reports/stats-[hash].json',
            watchMode: false // define as `true` to enable application reporting in `development` mode
        })
    ],
```
With the `StatoscopeWebpackPlugin` plugin installed in the application, the plugin will run on every application run when in `"production"` mode. If we wish to enable report generation in `"development"` mode, please follow the instructions above.

When the application is run, the plugin will create an HTML report into the `./reports` folder and open it in the browser automatically.
