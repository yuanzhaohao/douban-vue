<style lang="less" scoped>
@import '../../less/mixins.less';

.movie-item {
  float: left;
  width: 210px;
  margin-left: 30px;
  margin-bottom: 40px;
}

.movie-img {
  width: 210px;
  height: 300px;
  background-color: #f7f7f7;
}
</style>

<template>
  <div class="movie-item" v-on:click="onItemClick(itemData)">
    <div class="movie-img lib-lazyload" :data-lazyload="itemData.radioPicUrl"></div>
  </div>
</template>

<script>

export default {
  props: ['itemData', 'index'],
  methods: {
    onItemClick() {
    }
  }
}
</script>
