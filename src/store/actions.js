import reqwest from 'reqwest';
import { GET_MOVIE_HOT } from './types.js';

export default {
  async getMovieHotList({ commit, state }, { start, count }) {
    const resp = await reqwest({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {
        city: '杭州',
        start: start,
        count: count
      },
      type: 'jsonp'
    });
    commit(GET_MOVIE_HOT, resp);
  }
}
