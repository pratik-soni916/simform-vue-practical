const path = require("path");
module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: { modules: [path.resolve("src"), "node_modules"] },
  },
};
