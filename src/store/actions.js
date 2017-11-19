import reqwest from 'reqwest';
import { MOVIE_HOT } from './types.js';
import { getHotList } from '../lib/model';

export default {
  async getMovieHotData({ commit, state }, { start, count }) {
    const resp = await getHotList({
      start,
      count
    })
    commit(MOVIE_HOT, resp);
  }
}
