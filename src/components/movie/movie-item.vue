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
      <RatingStars :rating="itemData.rating" />
      <div class="rating-text">{{itemData.rating.value.toFixed(1)}}</div>
    </div>
    <div v-else class="item-rating-none">暂无评分</div>
  </router-link>
</template>

<script>
import RatingStars from '../common/rating-stars';

export default {
  components: {
    RatingStars,
  },
  props: ['itemData', 'index']
}
</script>
