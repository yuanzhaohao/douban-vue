<style lang="less">
@import '../less/mixins.less';
@import '../less/reset.less';
@import '../less/common.less';
</style>

<template>
  <MovieHeader />
</template>

<script>
import reqwest from 'reqwest';
import MovieHeader from '../components/movie/header';

export default {
  components: {
    MovieHeader,
  },
  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      reqwest({
        url: 'https://api.douban.com/v2/movie/in_theaters',
        data: {
          city: '杭州',
          start: 0,
          count: 9
        },
        type: 'jsonp',
        success: function(resp) {
          console.log(resp);
        }
      });
    }
  }
}
</script>
