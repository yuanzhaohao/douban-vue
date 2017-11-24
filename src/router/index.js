import App from '../page/index';

const Movie = r => require.ensure([], () => r(require('../page/movie')), 'movie');
const Detail = r => require.ensure([], () => r(require('../page/detail')), 'detail');

export default [{
  path: '/',
  component: App,
  children: [{
    path: '/movie',
    component: Movie,
  }, {
      path: '/detail/:movieId',
      component: Detail,
  }, {
    path: '*',
    redirect: '/movie'
  }]
}];
