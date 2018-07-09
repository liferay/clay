const clay = require('clay-css');
const path = require('path');

module.exports = {
    plugins: [
        'gatsby-plugin-react-next',
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
                        resolve: 'gatsby-remark-foreach-icons'
                    },
                    {
                        resolve: 'gatsby-remark-component',
                        options: {
                            components: ['clay-chart']
                        }
                    },
                    {
                        resolve: 'gatsby-remark-images',
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'gatsby-code-'
                        }
                    },
                    {
                        resolve: 'gatsby-remark-use-clipboard'
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-37033501-10',
            },
        },
        'gatsby-plugin-react-helmet'
    ]
}