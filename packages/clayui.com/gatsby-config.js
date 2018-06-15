const clay = require('clay-css');
const path = require('path');

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
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
    ]
}
