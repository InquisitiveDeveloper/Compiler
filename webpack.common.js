const path = require("path");

module.exports = {
  entry: {
   
    nav: {
      import: './src/js/nav.js',
      dependOn: 'shared',
    },
    footer: {
      import: './src/js/footer.js',
      dependOn: 'shared',
    },

    main: {
      import: './src/js/app.js',
      dependOn: 'shared',
    }, 
    vendor:{
      import: './src/js/vendor.js',
      dependOn: 'shared',
    },
    shared: ['jquery', 'popper.js',  'moment', 'bootstrap'],
  },

 
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            publicpath: '../imgs',
            outputPath: "/imgs",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            publicpath: '../fonts',
            outputPath: "/fonts",
          },
        },
      },
    ],
  },
};