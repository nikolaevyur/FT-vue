const BannerWebpackPlugin = require('banner-webpack-plugin')
const commonConfig = require('./config.common')
const config = require('../build.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const { assetsPath, styleLoaders, assetsLoaders, scriptLoaders, vueLoaders } = require('./utils')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const common = commonConfig()

const buildConfig = config.build

const defaultWebpackConfig = webpackMerge(common, {
	mode: process.env.npm_config_mode || 'production',
	watch: !!process.env.npm_config_watch || config.watch,
	output: {
		filename: '[name].bundle.js',
		path: buildConfig.assetsRoot
	},
	optimization: {
		// minimize: false,
		// splitChunks: {
		// 	chunks: 'all'
		// }
	},
	plugins: [
		// new webpack.ProgressPlugin((percentage, message) => {
		// 	console.log(`[${new Date()}] ${(percentage * 100).toFixed()}% ${message}`);
		// }),
		new webpack.ProvidePlugin({
			Vue: [path.resolve(__dirname, '../src/provider.js'), 'Vue'],
			'_': 'lodash',
		}),
		new ExtractTextPlugin({
			filename: assetsPath('css/[name].bundle.css'),
			allChunks: true,
		}),
	]
});


if (buildConfig.bundleAnalyzerReport) {
	const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
	defaultWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

let webpackConfig = [];

Object.keys(common.entry).forEach(entryKey => {
	webpackConfig.push(Object.assign({}, defaultWebpackConfig, {
		entry: {
			[entryKey]: common.entry[entryKey]
		},
		module: {
			rules: [
				...defaultWebpackConfig.module.rules,
				...vueLoaders(),
				...styleLoaders(true),
				...assetsLoaders(),
				...scriptLoaders()
			]
		},
		plugins: [
			...(buildConfig.plugins ? buildConfig.plugins : []),
			...defaultWebpackConfig.plugins,
			...(buildConfig.require ? 
				[
					new BannerWebpackPlugin({
						chunks: {
							[entryKey]: {
								beforeContent: `require([${ (buildConfig.require).modules.map(x => `"${x}"`).join(', ') }], function (${(buildConfig.require).args.join(',')}) {\n`,
								afterContent: `\n});`
							}
						}
					})
				] : []
			)
		]
	}))
})

module.exports = webpackConfig