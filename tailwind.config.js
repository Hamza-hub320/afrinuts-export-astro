/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Color mapping from your CSS variables
            colors: {
                // Neutral
                white: 'var(--white)',
                'light-grey': 'var(--light-grey)',
                'warm-grey': 'var(--warm-grey)',
                'cool-grey': 'var(--cool-grey)',
                taupe: 'var(--taupe)',
                'black-shadow': 'var(--black-shadow)',

                // Brand
                'navy-blue': 'var(--navy-blue)',
                'deep-blue': 'var(--deep-blue)',
                teal: 'var(--teal)',
                'lime-green': 'var(--lime-green)',
                'olive-green': 'var(--olive-green)',
                'forest-green': 'var(--forest-green)',
                orange: 'var(--orange)',
                'dark-orange': 'var(--dark-orange)',

                // Semantic
                primary: 'var(--primary)',
                accent: 'var(--accent)',
                secondary: 'var(--secondary)',
                background: 'var(--background)',
                'text-dark': 'var(--text-dark)',
                'text-light': 'var(--text-light)',
                highlight: 'var(--highlight-color)'
            },

            // Other utilities from your CSS
            borderRadius: {
                DEFAULT: 'var(--border-radius)'
            },
            boxShadow: {
                DEFAULT: 'var(--box-shadow)'
            },
            fontFamily: {
                base: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'sans-serif'
                ]
            },
            spacing: {
                section: '4rem',
                'section-sm': '3rem',
                'section-xs': '2rem'
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        // Custom plugin to handle your CSS variables
        function({ addBase }) {
            addBase({
                'html': {
                    scrollBehavior: 'smooth',
                    '&:target': {
                        animation: 'highlight 1.5s ease'
                    }
                },
                '.target-section': {
                    scrollMarginTop: '100px'
                },
                '@keyframes highlight': {
                    '0%': { backgroundColor: 'var(--highlight-color)' },
                    '100%': { backgroundColor: 'transparent' }
                }
            })
        }
    ],
}