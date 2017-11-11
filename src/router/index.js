import App from '../page/index';

const Movie = r => require.ensure([], () => r(require('../page/movie')), 'movie');

export default [{
  path: '/',
  component: App,
  children: [{
    path: '/movie',
    component: Movie
  }, {
    path: '*',
    redirect: '/movie'
  }]
}];
