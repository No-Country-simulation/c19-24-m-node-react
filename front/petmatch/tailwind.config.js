/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bgPrincipal: '#E0E7DE',
                bgGreen: '#416A32'
            },
            backgroundImage: {
                'custom-bg': "url('./src/images/fondo.png')",
              },
            fontFamily: {
                sans: ["Inter", 'sans-serif']
            },
        },
    },
    plugins: [],
};
