const clay = require('clay-css');
const path = require('path');

module.exports = {
    plugins: [
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
                    )
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
				name: "packages",
				path: `${__dirname}/content`,
			},
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'gatsby-code-'
                        }
                    }
                ]
            }
        },
        'gatsby-plugin-react-helmet'
    ]
}
