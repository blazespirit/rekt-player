const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app/rekt-player.js',
    output: {
		path: __dirname + '/dist',
        filename: './rekt-player.js'
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
            { from: './src/main.js', to: './' },
			{ from: './src/index.html', to: './' },
			{ from: './src/style.css', to: './' },
			{ from: './src/assets', to: './assets' },
		])
	],
	watch: true // configure webpack to watch for changes.
};