import reqwest from 'reqwest';
import { MOVIE_SHOWING, MOVIE_FREE, MOVIE_LATEST } from './types.js';
import { getMovie } from '../lib/model';

export default {
  async getMovieData({ commit, state }, { type, start, count }) {
    const resp = await getMovie({
      type,
      start,
      count
    });
    const config = {
      showing: MOVIE_SHOWING,
      latest: MOVIE_LATEST,
      free: MOVIE_FREE,
    };
    commit(config[type], resp);
  }
}
