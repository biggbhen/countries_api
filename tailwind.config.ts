import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		screens: {
			xxsm: '280px',
			lxsm: '450px',
			lsm: '500px',
			xsm: '550px',
			sm: '640px',
			md: '768px',
			xmd: '900px',
			lg: '1024px',
			xlg: '1150px',
			sxl: '1200px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
