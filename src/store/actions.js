import reqwest from 'reqwest';
import { GET_MOVIE_HOT } from './types.js';

export default {
  async getMovieHotList({ commit, state }) {
    console.log(state);
    const resp = reqwest({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {
        city: '杭州',
        start: 0,
        count: 9
      },
      type: 'jsonp'
    });
    commit(GET_MOVIE_HOT, resp);
  }
}
