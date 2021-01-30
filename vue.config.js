module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
  },
  pwa: {
    manifestOptions: {
      background_color: "hotpink",
    },
    name: "Min app",
    themeColor: "steelblue",
  },
};
