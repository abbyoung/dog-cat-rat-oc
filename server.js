var catPhotos = [
  '/img/cat-face-1.png',
  '/img/cat-face-2.png',
  '/img/cat-face-3.png',
  '/img/cat-face-4.png',
  '/img/cat-face-5.png',
  '/img/cat-face-6.png',
  '/img/cat-face-7.png',
  '/img/cat-face-8.png',
  '/img/cat-face-9.png',
  '/img/cat-face-10.png',
  '/img/cat-face-11.png',
  '/img/cat-face-12.png',
  '/img/cat-face-13.png',
  '/img/cat-face-14.png',
  '/img/cat-face-15.png',
  '/img/cat-face-16.png',
];



export const data = (context, callback) => {
  const { name } = context.params;
  const { staticPath } = context;

  callback(null, {
    name,
    staticPath,
    photo: catPhotos[Math.floor(Math.random()*catPhotos.length)]
  });
};