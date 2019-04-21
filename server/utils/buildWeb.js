import webpack from 'webpack';
import config from '~/webpack.config.js';

const buildWeb = () => new Promise((resolve, reject) => {
  console.log('starting to build web...');

  webpack(config, (err, stats) => {
    const error = err || stats.hasErrors();
    if (error) {
      reject(error);
    }
    console.log('Web is built!');
    resolve();
  });
});

export default buildWeb;
