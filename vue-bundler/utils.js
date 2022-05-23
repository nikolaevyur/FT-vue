/* eslint-disable */
const path = require('path')
const config = require('../build.config')
const packageConfig = require('../package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const fse = require('fs-extra')
const chalk = require('chalk')

exports.PROD = () => process.env.NODE_ENV === 'production'

exports.assetsPath = function (_path) {
	const assetsSubDirectory = process.env.NODE_ENV === 'production'
		? config.build.assetsSubDirectory
		: config.dev.assetsSubDirectory
	
	return path.posix.join(assetsSubDirectory, _path)
}

exports.createNotifierCallback = () => {
	const notifier = require('node-notifier')
	
	return (severity, errors) => {
		if (severity !== 'error') return
		
		const error = errors[0]
		const filename = error.file && error.file.split('!').pop()
		
		notifier.notify({
			title: packageConfig.name,
			message: severity + ': ' + error.name,
			subtitle: filename || '',
			icon: path.join(__dirname, 'logo.png')
		})
	}
}

exports.styleLoaders = (extract) => {

	const loaders = () => {

		const resources = [
			path.resolve(__dirname, `../src/scss/inject.scss`),
		]

		return ['css-loader', 'sass-loader', {
			loader: 'sass-resources-loader',
			options: {
				resources
			}
		}]
	}

	let rules = [{
		test: /\.s?css$/,
		use: extract
			? ExtractTextPlugin.extract({
				use: loaders(),
				fallback: 'vue-style-loader'
			})
			: ['style-loader', ...loaders()]
	}]

	return rules
}

exports.assetsLoaders = () => {
	const rules = [
		{
			test: /\.(png|jpg|gif|svg)$/,
			// test: /\.(png|jpg|gif)$/,
			include: [
				path.resolve(__dirname, '../src/assets/images/'),
			],
			use: [
				{
					loader: 'file-loader',
					options: {
						filename: '[name].[ext]',
						outputPath: `assets/images/`,
						publicPath: process.env.NODE_ENV === 'production'
							? `../assets/images/`
							: `/assets/images/`
					}
				}
			]
		},

		{
			test: /\.svg$/,
			include: [
				path.resolve(__dirname, '../src/assets/icons/'),
			],
			use: [
				{
					loader: 'svg-sprite-loader',
					options: {}
				}
			]
		}
	]

	return rules
}

exports.scriptLoaders = () => {
	const rules = [
		{
			test: /\.js$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env']
					}
				},
			]
		}
	]

	return rules
}

exports.vueLoaders = () => {
	let rules = [
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				transformToRequire: {
					video: ['src', 'poster'],
					source: 'src',
					vector: 'src',
					img: 'src',
					image: 'xlink:href'
				}
			}
		}
	]

	return rules
}