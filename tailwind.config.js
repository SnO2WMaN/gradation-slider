module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["src/**/*.tsx", "stories/**/*.stories.tsx"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
