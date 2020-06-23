const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Elias Bendjaballah',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Elias Bendjaballah',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Elias Bendjaballah',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Elias Bendjaballah',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Elias Bendjaballah',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
