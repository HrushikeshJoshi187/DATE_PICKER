const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
{
  mode: 'production',
  entry:  
  {
    date_picker_website: './src/index.js'
  },
  plugins:
  [
    new HtmlWebpackPlugin(
      {
        title: 'DATE_PICKER',
        templateContent : 
        `
          <html>
            <body>
              <div id='root' class='root' aria-label='root' data-test-id='root'></div>
            </body>
          </html>
        `
      }
    )
  ],
  output: 
  {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/date_picker_website/'),
    clean: true
  },
  module: 
  {
    rules: 
    [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: 
        {
          loader: 'babel-loader',
          options: 
          {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      }
    ],
  },
  optimization: 
  {
    runtimeChunk: 'single',
    splitChunks: 
    {
      cacheGroups: 
      {
        vendor: 
        {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};