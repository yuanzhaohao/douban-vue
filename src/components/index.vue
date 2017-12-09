<style lang="less">
@import '../less/mixins.less';
@import '../less/common.less';

.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>

<template>
  <router-view></router-view>
</template>

<script>
import reqwest from 'reqwest';

export default {
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
