const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins']
			}
		}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
