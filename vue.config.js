const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
        "@C": path.join(__dirname, "src/components/"),
      },
    },
  },
};
