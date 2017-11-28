import {
  MOVIE_SHOWING,
  MOVIE_LATEST,
  MOVIE_FREE,
  DETAIL
} from './types.js';

export default {
	/**
   * 获取电影首页热门电影
   */
	[MOVIE_SHOWING](state, data) {
		state.movie.showingData = data;
	},
  /**
   * 获取电影首页新片速递
   */
	[MOVIE_LATEST](state, data) {
		state.movie.latestData = data;
	},

  /**
   * 获取电影首页免费在线电影
   */
	[MOVIE_FREE](state, data) {
		state.movie.freeData = data;
	},

  [DETAIL](state, data) {
		state.detail = data;
	},
}
