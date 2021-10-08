// tailwind.config.cjs
module.exports = {
	mode: 'jit',
	// you dont need `purge: enabled: production` because you are using jit
	purge: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	],
	darkMode: 'class',
	theme: {
		extend: {},
		fontFamily: {
			// prettier-ignore
			'neue': '"Comic Neue", cursive'
		},

		colors: {
			primary: {
				lightest: '#8963BB',
				light: '#744BAA',
				DEFAULT: '#4A306D',
				200: '#4A306D',
				400: '#3A2555'
			},

			prussian: {
				lightest: '#1F5784',
				light: '#174163',
				DEFAULT: '#0E273C',
				200: '#081621',
				400: '#040B11'
			}
		}
	},
	variants: {},
	plugins: []
};
