import sass from 'node-sass';

class StyleHandler {
  _styleData = '';

  getStyleData = () => this._styleData;

  loadStyles = () => new Promise((resolve, reject) => {
    console.log('Starting to compile Sass...')
    sass.render({
      file: 'web/style/index.scss',
      outputStyle: 'compressed'
    }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const css = result.css.toString();
        this._styleData = css;

        console.log('Sass is compiled!');
        resolve(css);
      }
    })
  })
}

export default new StyleHandler();
