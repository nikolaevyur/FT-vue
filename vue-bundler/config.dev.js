const commonConfig = require('./config.common')
const config = require('../build.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const portfinder = require('portfinder')
const { createNotifierCallback, styleLoaders, assetsLoaders, scriptLoaders, vueLoaders } = require('./utils')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const HOST = process.env.HOST || (process.env.npm_config_host ? `${process.env.npm_config_host}` : config.dev.host)
const PORT = process.env.PORT || process.env.npm_config_port

process.env.NODE_ENV = 'development'

const devWebpackConfig = webpackMerge(commonConfig(), {
	mode: 'development',
	devServer: {
		clientLogLevel: 'warning',
		contentBase: false, // since we use CopyWebpackPlugin.
		compress: true,
		host: HOST,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: { warnings: false, errors: true },
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,
		quiet: true, // necessary for FriendlyErrorsPlugin
		https: config.dev.https || !!process.env.npm_config_https3 || false,
		// watchOptions: {
		// 	poll: true,
		// }
	},
	module: {
		rules: [
			...vueLoaders(),
			...styleLoaders(false),
			...assetsLoaders(),
			...scriptLoaders()
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default'],
			'_': 'lodash',
		}),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
});


module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = PORT || config.dev.port
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err)
		} else {
			process.env.PORT = port

			devWebpackConfig.devServer.port = port
			const protocol = 'http' + (devWebpackConfig.devServer.https ? 's': '')
			
			devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
				compilationSuccessInfo: {
					messages: [`Application is running here: ${protocol}://${devWebpackConfig.devServer.host}:${port}\n\n`],
				},
				onErrors: createNotifierCallback()
			}))
			
			resolve(devWebpackConfig)
		}
	})
})