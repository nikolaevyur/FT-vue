
process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../build.config')
const webpackConfig = require('./config.prod')

const startDate = new Date()

console.log(chalk.cyan(`[${startDate}]  Build start.\n`))
const spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, (err, stats) => {
	spinner.stop()
	if (err) throw err
	
	// process.stdout.write(stats.toString({
	// 	colors: true,
	// 	modules: false,
	// 	chunkModules: false,
	// 	hash: true,
	// 	performance: true,
	// 	timings: true
	// }) + '\n\n')
	
	if (stats.hasErrors()) {
		stats.toJson().errors.forEach(error => {
			console.log(chalk.red(`${error}\n`))
		});
		console.log(chalk.red('  Build failed with errors.\n'))
		process.exit(1)
	}
	const endDate = new Date(),
		buildTime = new Date(endDate - startDate)

	console.log(chalk.cyan(`[${endDate}]  Build complete.\n`))
	console.log(chalk.cyan(`Total time:  ${('0' + buildTime.getUTCMinutes()).slice(-2)}:${('0' + buildTime.getUTCSeconds()).slice(-2)} min\n`))
});

// dengerous stuff
// rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
// 	if (err) throw err
// })