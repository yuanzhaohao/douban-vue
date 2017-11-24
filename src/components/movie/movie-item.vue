<style lang="less" scoped>
@import '../../less/mixins.less';

.item {
  float: left;
  width: 210px;
  height: 440px;
  margin-left: 30px;
  color: #494949;
}

.item-img {
  width: 210px;
  height: 300px;
  .item-img-bg;
}

.item-title {
  margin-top: 10px;
  height: 48px;
  line-height: 48px;
  font-size: 28px;/*px*/
  text-align: center;
  .text-overflow;
}

.item-rating,
.item-rating-none {
  margin-top: 6px;
  width: 100%;
  height: 36px;/*px*/
  line-height: 36px;/*px*/
  text-align: center;
  font-size: 0;
}

.item-rating-none {
  font-size: 22px;/*px*/
  color: #aaa;
}

.rating-stars {
  display: inline-block;
  position: relative;
  width: 105px;/*px*/
  margin-right: 10px;
  height: 100%;
}

.rating-yellow,
.rating-gray {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 8px;/*px*/
  display: box;
  display: -webkit-box;
  box-lines: multiple;
  -webkit-box-lines: multiple;
  overflow: hidden;
  box-sizing: border-box;

  > i {
    display: block;
    width: 20px;/*px*/
    height: 20px;/*px*/
    margin-right: 1px;
    background-size: 20px;/*px*/
  }
}

.gray-star {
  background-image: url('../../assets/douban-gray-star.png');
}

.yellow-star {
  background-image: url('../../assets/douban-yellow-star.png');
}

.rating-text {
  display: inline-block;
  font-size: 24px;/*px*/
  color: #9b9b9b;
  vertical-align: top;
}
</style>

<template>
  <router-link class="item" :to="`/detail/${itemData.id}`">
    <div class="item-img lib-lazyload" :data-lazyload="itemData.cover.url"></div>
    <div class="item-title">{{itemData.title}}</div>
    <div class="item-rating" v-if="itemData.rating && itemData.rating.value">
      <div class="rating-stars">
        <div class="rating-gray">
          <i class="gray-star"></i>
          <i class="gray-star"></i>
          <i class="gray-star"></i>
          <i class="gray-star"></i>
          <i class="gray-star"></i>
        </div>
        <div  class="rating-yellow"
          v-bind:style="{width: `${itemData.rating.value / itemData.rating.max * 100}%`}"
        >
          <i class="yellow-star"></i>
          <i class="yellow-star"></i>
          <i class="yellow-star"></i>
          <i class="yellow-star"></i>
          <i class="yellow-star"></i>
        </div>
      </div>
      <div class="rating-text">{{itemData.rating.value.toFixed(1)}}</div>
    </div>
    <div v-else class="item-rating-none">暂无评分</div>
  </router-link>
</template>

<script>

export default {
  props: ['itemData', 'index']
}
</script>
