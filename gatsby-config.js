module.exports = {
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images/`,
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `documents`,
				path: `${__dirname}/src/assets/documents/`,
			},
		},

		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Poppins\:700`, `Nunito Sans\:300, 400, 600, 700`],
				display: 'swap',
			},
		},
	],
	siteMetadata: {
		title: 'Walson Ferrao | Web Development',
		description: 'Portfolio website of Walson Ferrao',
		author: 'Walson Ferrao',
		contact: 'walsongodwin@gmail.com',
	},
};
