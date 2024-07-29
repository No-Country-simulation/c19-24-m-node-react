/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bgPrincipal: "#E0E7DE",
                bgGreen: "#416A32",
            },
            backgroundImage: {
                "custom-bg": "url('./src/images/fondo.png')",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },

            keyframes: {
                "slide-right": {
                    "0%": { transform: "translate(0, 0)" },
                    "50%": { transform: "translate(50%, 20px)" },
                    "100%": { transform: "translate(100%, 100px)", opacity: 0 },
                },
                "slide-left": {
                    "0%": { transform: "translate(0, 0)" },
                    "50%": { transform: "translate(-50%, 20px)" },
                    "100%": {
                        transform: "translate(-100%, 100px)",
                        opacity: 0,
                    },
                },
            },
            animation: {
                "slide-right": "slide-right 0.5s ease-out",
                "slide-left": "slide-left 0.5s ease-out",
            },
        },
    },
    plugins: [],
};
