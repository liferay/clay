const clay = require('clay-css');
const path = require('path');

module.exports = {
	plugins: [
		'gatsby-plugin-meta-redirect',
		'gatsby-transformer-try-examples',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				precision: 8,
				includePaths: clay
					.includePaths
					.concat(
						path.join(
							clay.includePaths[0],
							'node_modules'
						)
					),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'packages',
				path: `${__dirname}/content`,
			},
		},
		{
			resolve: 'gatsby-mdx',
			options: {
				extensions: ['.mdx'],
				gatsbyRemarkPlugins: [
					{
						resolve: path.resolve(__dirname, './plugins/gatsby-remark-foreach-icons'),
					},
					{
						resolve: 'gatsby-remark-prismjs',
						pluginOptions: {
							classPrefix: 'gatsby-code-',
						},
					},
					{
						resolve: path.resolve(__dirname, './plugins/gatsby-remark-use-clipboard'),
					},
					{
						resolve: path.resolve(__dirname, './plugins/gatsby-remark-api-table'),
					},
				],
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-foreach-icons',
					},
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							classPrefix: 'gatsby-code-',
						},
					},
					{
						resolve: 'gatsby-remark-use-clipboard',
					},
					{
						resolve: 'gatsby-remark-api-table',
					},
					{
						resolve: 'gatsby-remark-typography',
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-37033501-10',
			},
		},
		'gatsby-plugin-react-helmet',
	],
};
