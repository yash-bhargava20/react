/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Sans-Serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        insetBlack: "inset 0 0 8px 4px rgba( 0,0,0,0.4)",
      },
      keyframes: {
        borderRadius: {
          "0%": { borderRadius: "60% 40% 30% 70%" },
          "50%": { borderRadius: "40% 60% 70% 30%" },
          "100%": { borderRadius: "60% 40% 30% 70%" },
        },
      },
      animation: {
        borderRadius: "borderRadius 9s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
};
