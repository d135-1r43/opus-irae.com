module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extends: {},
        fontFamily: {
            inter: ['inter', 'sans-serif'],
            poppins: ['poppins', 'serif'],
            'fira-mono': ['fira-mono'],
            trajan: ['trajan-pro-3', 'serif'],
			krete: ['krete', 'serif']
        }
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    // daisyUI config (optional)
    daisyui: {
        themes: [
            {
                opusirae: {
                    primary: '#eeeaea',
                    secondary: '#3e8fb0',
                    accent: '#eb6f92',
                    neutral: '#092145',
                    'base-100': '#0C1822',
                    info: '#9ccfd8',
                    success: '#c4a7e7',
                    warning: '#f6c177',
                    error: '#b4637a'
                }
            }
        ]
    }
};
