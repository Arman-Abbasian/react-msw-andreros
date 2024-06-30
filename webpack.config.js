const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;
const { DefinePlugin } = require('webpack');
const sourceFolder = './src/';
const defaultPort = 1111;

// Instantiate the plugin.
// The `template` property defines the source
// of a template file that this plugin will use.
// We will create it later.
const htmlPlugin = new HtmlWebPackPlugin({
    template: `${sourceFolder}index.html`,
    favicon: './public/assets/favicon.ico'
});

module.exports = () => {
    const DotEnvConfig = require('dotenv').config({ path: './.env' });
    const environmentVariables = Object(DotEnvConfig.parsed);

    return {
        // Our application entry point.
        entry: `${sourceFolder}index.tsx`,

        // These rules define how to deal
        // with files with given extensions.
        // For example, .tsx files
        // will be compiled with ts-loader,
        // a specific loader for webpack
        // that knows how to work with TypeScript files.
        module: {
            rules: [
                {
                    test: /\.(css|s[ac]ss)$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff)$/i,
                    type: 'asset/resource'
                }
            ]
        },

        // Telling webpack which extensions
        // we are interested in.
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@/assets': path.resolve(__dirname, 'public/assets/'),
                '@/components': path.resolve(__dirname, 'src/components/'),
                '@/hooks': path.resolve(__dirname, 'src/hooks/'),
                '@/mocks': path.resolve(__dirname, 'src/mocks/'),
                '@/models': path.resolve(__dirname, 'src/models/'),
                '@/pages': path.resolve(__dirname, 'src/pages/'),
                '@/react-query': path.resolve(__dirname, 'src/react-query/'),
                '@/routes': path.resolve(__dirname, 'src/routes/'),
                '@/services': path.resolve(__dirname, 'src/services/'),
                '@/tools': path.resolve(__dirname, 'src/tools/')
            }
        },

        // What file name should be used for the result file,
        // and where it should be placed.
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },

        plugins: [
            htmlPlugin,
            new DefinePlugin({ 'process.env': JSON.stringify(environmentVariables) }),
            new StatoscopeWebpackPlugin({
                saveReportTo: 'reports/report-[hash].html',
                saveStatsTo: 'reports/stats-[hash].json',
                watchMode: false
            })
        ],

        // Set up the directory
        // from which webpack will take the static content.
        // The port field defines which port on localhost
        // this application will take.
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            compress: true,
            port: defaultPort,
            historyApiFallback: true
        }
    };
};
