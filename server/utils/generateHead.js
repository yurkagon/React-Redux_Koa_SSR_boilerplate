import { Helmet } from 'react-helmet';

const generateHead = () => {
  const headData = Helmet.renderStatic();
  const head = Object.keys(headData).reduce((result, key) => {
    const el = headData[key].toString();

    return el ? result + el : result;
  }, '');

  return head;
};

export default generateHead;
