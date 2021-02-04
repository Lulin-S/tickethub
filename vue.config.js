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
    workboxOptions: {
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5,
          },
          method: "GET",
          urlPattern:
            "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=SE",
        },
      ],
    },
  },
};
