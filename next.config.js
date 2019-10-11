// next.config.js

// less 配置
const lessLoader = {
    loader: 'less-loader',
    options: {
        javascriptEnabled: true,
        modifyVars: {
            'primary-color': '#009cbd',
            'link-color': '#009cbd',
        }
    }
}
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');
const tsImportPluginFactory = require('ts-import-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const withSass = require('@zeit/next-sass');

// Where your antd-custom.less file lives

module.exports = withPlugins([[withTypescript], [withSass, {
        sassLoaderOptions: {
            javascriptEnabled: true,
        }
    }], [withLess, {
        lessLoaderOptions: {
            javascriptEnabled: true,
        }
    }], [withCss, {
        cssLoaderOptions: {
            javascriptEnabled: true,
        }
    }]],
    {
        webpack: (config) => {
            // Further custom configuration here
            config.plugins = [
                ...config.plugins,
                new FilterWarningsPlugin({
                    exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
                }),
            ];
            config.module.rules.push(
                {
                    test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                    use: [{
                        loader: 'emit-file-loader',
                        options: {
                            name: 'dist/[path][name].[ex' + 't]',
                        },
                    },
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 2000,
                                outputPath: 'static/fonts/',
                                publicPath: '/_next/',
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpeg)$/,
                    use:[{
                        loader: 'url-loader?&name=images/[hash:8].[name].[ext]',
                        options:{
                            publicPath:'./images'
                        }
                    }]

                },
            );
            return config
        }
    });

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => {
    };
    require.extensions['.less'] = file => {
    }
    require.extensions['.scss'] = file => {
    }
}
