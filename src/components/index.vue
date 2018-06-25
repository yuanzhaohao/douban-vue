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
    },
    handleScroll() {
      const scrollFn = buffer(() => {
        if (this.isEnough) window.removeEventListener('scroll', scrollFn, false)
        if (this.isEnough || this.isLoading) return
        if (window.scrollY + window.innerHeight >= this.$el.clientHeight - 300) this.loadData()
      }, 200, this);
      window.removeEventListener('scroll', scrollFn, false);
      window.addEventListener('scroll', scrollFn, false);
    },
  }
}
</script>
