module.exports = {
  plugins: {
    // Deal with @import and url()
    // https://github.com/postcss/postcss-import
    // https://github.com/postcss/postcss-url
    "postcss-import": {},
    "postcss-url": {},

    // Parse CSS and add vendor prefixes to rules by Can I Use.
    // To edit target browsers: use "browserslist" field in package.json.
    // https://github.com/postcss/autoprefixer
    // https://github.com/browserslist/browserslist
    autoprefixer: {},

    // Convert modern CSS into something browsers understand.
    // https://github.com/csstools/postcss-preset-env
    "postcss-preset-env": {},

    // Deliver your website's styles, faster.
    // https://github.com/cssnano/cssnano
    cssnano: process.env.NODE_ENV === "production" ? {} : false,

    // Convert pixel units to rem (root em) units using PostCSS.
    // https://github.com/cuth/postcss-pxtorem
    "postcss-pxtorem": {
      rootValue: 40,
      unitPrecision: 5,
      minPixelValue: 2,
      propList: ["*"],
      selectorBlackList: [/^.mint-/, /^.van-/],
      exclude: /node_modules/i,
    },
  },
};
