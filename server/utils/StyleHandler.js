import sass from 'node-sass';

class StyleHandler {
  static removeCommentsInStyles = str =>
    str.replace(/\/\*[^*]*\*+([^\/][^*]*\*+)*\//, '');

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
        const cssData = result.css.toString();
        const css = StyleHandler.removeCommentsInStyles(cssData);
        this._styleData = css;

        console.log('Sass is compiled!');
        resolve(css);
      }
    })
  })
}

export default new StyleHandler();
