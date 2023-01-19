const path = require('path');

module.exports =
{
  mode: 'production',
  entry:  
  {
    date_picker: './src/date_picker/date_picker.js'
  },
  output: 
  {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/date_picker/'),
    clean: true,
    libraryTarget: 'commonjs2'
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
  },
  resolve: 
  {      
    alias: 
    {          
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
    }  
  },  
  externals: 
  {  
    react: 
    {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": 
    {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};