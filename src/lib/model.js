import reqwest from 'reqwest';

const URL = {
  // showing: '//m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
  // free: '//m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items',
  // latest: '//m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items'
  showing: '//api.douban.com/v2/movie/in_theaters',
  free: '//api.douban.com/v2/movie/top250',
  latest: '//api.douban.com/v2/movie/coming_soon',
};

export const getMovie = async ({ type, start, count }) => {
  const resp = reqwest({
    url: URL[type],
    data: {
      loc_id: '108288',
      city: '杭州',
      start,
      count
    },
    type: 'jsonp'
  });

  return resp;
};


export const getDetail = async ({ subjectId }) => {
  const resp = reqwest({
    url: `//api.douban.com/v2/movie/subject/${subjectId}`,
    type: 'jsonp'
  });

  return resp;
};
