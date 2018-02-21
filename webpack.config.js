const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

const main = {
	target: 'electron-main',
    entry: './src/main/main.js',
    output: {
		path: __dirname + '/dist',
        filename: './main/main.js'
	},
	node: {
		__dirname: false,
		__filename: false
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				use: [
					{ loader: 'babel-loader' }
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		// delete 'dist' folder on re-build.
		new CleanWebpackPlugin(['dist/']),
	],
	watch: true // configure webpack to watch for changes.
}

const rektPlayer = {
	target: 'electron-renderer',
    entry: './src/renderer/app/rekt-player.js',
    output: {
		path: __dirname + '/dist',
        filename: './renderer/app/rekt-player.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				use: [
					{ loader: 'babel-loader' },
					{ loader: 'linaria/loader' }
				],
				exclude: /node_modules/
			},
			{
			    test: /\.svg/,
			    use: {
			        loader: 'svg-url-loader',
			        options: { }
			    }
			},
			{
				test: /\.(png|jpg|gif|ttf)$/,
				use: {
					loader: 'url-loader',
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			}
		]
	},
	plugins: [
		// delete 'dist' folder on re-build.
		new CleanWebpackPlugin(['dist/']),
		
		// copy to 'dist' folder.
		new CopyWebpackPlugin([
			{ from: './src/renderer/app/index.html', to: './renderer/app' },
			{ from: './src/renderer/app/style.css', to: './renderer/app' },
			{ from: './src/renderer/assets', to: './renderer/assets' },
			{ from: './src/renderer/remoteCtrlServer', to: './renderer/remoteCtrlServer' },
		])
	],
	watch: true // configure webpack to watch for changes.
}

module.exports = [
	main,
	rektPlayer
];