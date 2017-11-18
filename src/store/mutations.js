import {
  GET_MOVIE_HOT,
  GET_MOVIE_NEW,
  GET_MOVIE_FREE,
} from './types.js';

export default {
	/**
   * 获取热门电影
   */
	[GET_MOVIE_HOT](state, listData) {
		state.movieHotList = listData;
	},
  /**
   * 获取新片速递
   */
	[GET_MOVIE_NEW](state, listData) {
		state.movieNewList = listData;
	},

  /**
   * 获取免费在线电影
   */
	[GET_MOVIE_FREE](state, listData) {
		state.movieFreeList = listData;
	},
}
