const isServer = typeof window === 'undefined';

export const switcher = ({ browser, server }, ...args) => {
  return isServer ?
    (server && server(...args)) :
    (browser && browser(...args))
};
