
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


const ruleForJS = {
	test: /\.js$/,
	loader: 'babel-loader',
	options: {
		presets: [
			[
				'@babel/preset-react',
				{
					runtime: 'automatic'
				}
			]
		]
	}
}

const ruleForJSON = {
	test: /\.json$/,
    use: ['json-loader'],
    type: 'javascript/auto'
}

const ruleForMedia = {
	test: /\.(png|svg|jpe?g|webp)$/,
	use: 'file-loader?name=./images/[name].[ext]'
}

const ruleForStyle = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader']
}

const rules = [ruleForJS, ruleForStyle, ruleForMedia, ruleForJSON]

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build')
	},
	plugins: [ new htmlWebpackPlugin({template: './src/index.html'}) ],
	module: {rules},
	devServer: {
		open: false,
		port: 3020,
		compress: true
	}
}