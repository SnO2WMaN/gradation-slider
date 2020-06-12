module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["src/**/*.tsx", "stories/**/*.stories.tsx"],
  },
  theme: {
    extend: {
      inset: {
        "-full": "-100%",
        "full": "100%",
      },
      margin: {
        "-full": "-100%",
        "-1/2": "-50%",
      },
      spacing: {
        // 1/2
        "1/2": `${(100 / 2) * 1}%`,
        // 1/3
        "1/3": `${(100 / 3) * 1}%`,
        "2/3": `${(100 / 3) * 2}%`,
        // 1/4
        "1/4": `${(100 / 4) * 1}%`,
        "2/4": `${(100 / 4) * 2}%`,
        "3/4": `${(100 / 4) * 3}%`,
      },
    },
  },
  variants: {},
  plugins: [],
};
