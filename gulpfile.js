var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config');

// webpack-dev-server will serve files from memory
gulp.task('default', (callback) => {
  config.entry.app.unshift(`webpack-dev-server/client?http://${config.devServer.host}:${config.devServer.port}/`);
  new WebpackDevServer(new webpack(config), config.devServer)
    .listen(config.devServer.port, config.devServer.host, (err) => {
      if (err) throw new gutil.PluginError('webpack-dev-server', err);
      gutil.log(gutil.colors.cyan(`http://${config.devServer.host}:${config.devServer.port}`));
    });
});

// output will be built to the `dist` folder.
gulp.task('build', (callback) => {
  webpack(config, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    stats.toString(config.devServer.stats).split('\n').map((line) => {
      gutil.log(gutil.colors.green('[webpack]'), line);
    });
    callback();
  });
});
