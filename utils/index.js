const isServer = typeof window === 'undefined';

export const switcher = ({ browser, server }, ...args) => {
  return isServer ?
    (server && server(...args)) :
    (browser && browser(...args))
};

export const onlyBrowser = (target, key, descriptor) =>  {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args) {
    return switcher({
      browser: () => originalMethod.apply(this, args)
    });
  }

  return descriptor;
};
