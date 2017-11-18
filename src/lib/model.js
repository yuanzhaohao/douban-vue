import reqwest from 'reqwest';

export const async getHotList = () => {
  let resp = reqwest({
    url: 'https://api.douban.com/v2/movie/in_theaters',
    data: {
      city: '杭州',
      start: 0,
      count: 9
    },
    type: 'jsonp'
  });

  return resp;
};
