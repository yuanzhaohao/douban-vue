import reqwest from 'reqwest';

export const getHotList = async ({ start, count }) => {
  const resp = reqwest({
    url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
    data: {
      loc_id: '108288',
      start,
      count
    },
    type: 'jsonp'
  });

  return resp;
};
