const { PROD } = require('./utils')
const config = require('../build.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const utils = require('./utils')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

const entry = Object
	.keys(config.entry)
	.reduce((res, entry) => {
		const
			term = process.env.npm_config_entry,
			register = name => res[name] = config.entry[name] 

		if(term) {
			//if(~entry.indexOf(term)) {
			if(entry === term) {
				register(entry)
			}
		} else {
			register(entry)
		}

		return res
	}, {})

module.exports = function() {
	return {
		entry,
		module: {
			rules: [

				{
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
					include: /node_modules/,
					loader: 'url-loader',
					options: {
					  limit: 10000,
					  name: utils.assetsPath('img/[name].[hash:7].[ext]')
					}
				},
				{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					include: /node_modules/,
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
						publicPath: process.env.NODE_ENV === 'production' ? '../' : '/'
					}
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					include: [
						path.resolve(__dirname, '../src/assets/fonts/'),
					],
					loader: 'file-loader',
					options: {
						name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
						publicPath: process.env.NODE_ENV === 'production' ? '../' : '/'
					}
				}
			]
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, '../src'),
			},
			extensions: ['.js', '.vue', '.json'],
		},
		plugins: [
			new VueLoaderPlugin(),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: `"${process.env.NODE_ENV}"`,
				}
			}),
			(() => {
				const paths = []

				paths.push({
					from: path.resolve(__dirname, '../src/static'),
					to: './static'
				})

				return new CopyWebpackPlugin(paths)
			})()
		]
	};
}