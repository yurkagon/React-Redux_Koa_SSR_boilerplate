const posts = [
  {
    id: 1,
    title: 'Some title',
    body: 'some awesome text'
  },
  {
    id: 2,
    title: 'Something',
    body: 'some awesafdsdf'
  },
  {
    id: 3,
    title: 'Some fwadtitle',
    body: 'some 2342awesome text'
  },
  {
    id: 4,
    title: 'Some asdftitle',
    body: 'some a asdfwesome text'
  }
]

export const getPosts = () => new Promise(resolve =>
  setTimeout(() => resolve(posts), 100)
);
