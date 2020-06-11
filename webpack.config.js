const resolve = require( 'path' ).resolve
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' )

const externals = {
	jquery: 'jQuery',
	lodash: 'lodash',
	react: 'React',
	moment: 'moment',
	'react-dom': 'ReactDOM',
	'@yaireo/tagify': 'Tagify',
	'@rankMath/analyzer': 'rankMathAnalyzer',

	// WordPress Packages.
	'@wordpress/api-fetch': 'wp.apiFetch',
	'@wordpress/blocks': 'wp.blocks',
	'@wordpress/block-editor': 'wp.blockEditor',
	'@wordpress/components': 'wp.components',
	'@wordpress/compose': 'wp.compose',
	'@wordpress/data': 'wp.data',
	'@wordpress/date': 'wp.date',
	'@wordpress/dom': 'wp.dom',
	'@wordpress/editor': 'wp.editor',
	'@wordpress/edit-post': 'wp.editPost',
	'@wordpress/element': 'wp.element',
	'@wordpress/hooks': 'wp.hooks',
	'@wordpress/html-entities': 'wp.htmlEntities',
	'@wordpress/i18n': 'wp.i18n',
	'@wordpress/keycodes': 'wp.keycodes',
	'@wordpress/media-utils': 'wp.mediaUtils',
	'@wordpress/plugins': 'wp.plugins',
	'@wordpress/rich-text': 'wp.richText',
	'@wordpress/url': 'wp.url',

	// Elementor
	Marionette: 'Marionette',
	'@elementor/modules': 'window.elementorModules',
}

const alias = {
	'@blocks': resolve( __dirname, './assets/admin/src/blocks' ),
	'@components': resolve(
		__dirname,
		'./assets/admin/src/sidebar/components'
	),
	'@containers': resolve(
		__dirname,
		'./assets/admin/src/sidebar/containers'
	),
	'@snippets': resolve(
		__dirname,
		'./assets/admin/src/sidebar/components/rich-snippets'
	),
	'@helpers': resolve( __dirname, './assets/admin/src/helpers' ),
	'@slots': resolve( __dirname, './assets/admin/src/sidebar/slots' ),
	'@classic': resolve( __dirname, './assets/admin/src/classic' ),
}

const entryPoints = {
	blocks: './assets/admin/src/blocks.js',
	classic: './assets/admin/src/classic/classic.js',
	gutenberg: './assets/admin/src/gutenberg/gutenberg.js',
	elementor: './assets/admin/src/elementor/elementor.js',
	'gutenberg-formats': './assets/admin/src/gutenberg/formats/index.js',
	'gutenberg-primary-term': './assets/admin/src/gutenberg-primary-term.js',
	'glue-custom-fields': './assets/admin/src/glue-custom-fields.js',
	common: './assets/admin/src/common.js',
	'custom-fields': './assets/admin/src/custom-fields.js',
	dashboard: './assets/admin/src/dashboard.js',
	feedback: './assets/admin/src/feedback.js',
	'import-export': './assets/admin/src/import-export.js',
	'option-panel': './assets/admin/src/option-panel.js',
	'post-list': './assets/admin/src/post-list.js',
	wizard: './assets/admin/src/wizard.js',
	wplink: './assets/admin/src/wplink.js',
	validate: './assets/admin/src/validate.js',
	'acf-analysis': './includes/modules/acf/assets/index.js',
	'product-description': './includes/modules/woocommerce/assets/js/main.js',
}

// Adding our UglifyJS plugin
const uglifyjs = new UglifyJSPlugin( {
	uglifyOptions: {
		mangle: true,
		compress: {
			pure_getters: true,
			unsafe: true,
			unsafe_comps: true,
			conditionals: true,
			unused: true,
			comparisons: true,
			sequences: true,
			dead_code: true,
			evaluate: true,
			if_return: true,
			join_vars: true,
		},
		output: {
			beautify: false,
			comments: false,
		},
	},
} )

module.exports = function( env ) {
	const mode =
		( env && env.environment ) || process.env.NODE_ENV || 'production'

	return {
		devtool:
			mode === 'development' ? 'cheap-module-eval-source-map' : false,
		entry: entryPoints,
		output: {
			path: resolve( __dirname, './assets/admin/js' ),
			filename: '[name].js',
		},
		resolve: {
			alias,
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: [ '@babel/preset-env' ],
					},
				},
				{
					test: /.svg$/,
					use: [ { loader: 'svg-react-loader' } ],
				},
			],
		},
		externals,
		plugins: [ uglifyjs ],
	}
}
