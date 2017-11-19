import {
  MOVIE_HOT,
  MOVIE_NEW,
  MOVIE_FREE,
} from './types.js';

export default {
	/**
   * 获取电影首页热门电影
   */
	[MOVIE_HOT](state, data) {
		state.movie.hotData = data;
	},
  /**
   * 获取电影首页新片速递
   */
	[MOVIE_NEW](state, data) {
		state.movie.newData = data;
	},

  /**
   * 获取电影首页免费在线电影
   */
	[MOVIE_FREE](state, data) {
		state.movie.freeData = data;
	},
}
