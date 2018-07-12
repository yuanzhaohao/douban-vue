<style lang="less">
@import '../../less/mixins.less';

.detail-title {
  margin-top: 30px;
  font-size: 56px;/*px*/
}

.detail-info {
  width: 100%;
  margin-top: 10px;
  color: #999;
  .clearfix;

  > .left {
    float: left;
    width: 460px;
  }

  > .right {
    float: right;
    width: 200px;
    height: 286px;
    .item-img-bg;
  }

  p {
    font-size: 24px;/*px*/
    margin-bottom: 10px;
  }

  .rating {
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;

    > span {
      margin-left: 10px;
    }
  }

}
</style>

<template lang="html">
  <div>
    <div class="detail-title">{{detail.title}}</div>

    <div class="detail-info">
      <div class="left">
        <div class="rating" v-if="detail.rating && detail.rating.average">
          <RatingStars :rating="detail.rating" />
          <span>{{detail.rating.average}}</span>
          <span>{{detail.ratings_count}}</span>
        </div>
        <div class="rating" v-else>暂无评分</div>
        <p><span>{{detail.year}}</span><span v-for="genre in detail.genres"> / {{genre}}</span></p>
        <p>原名：{{detail.original_title}}</p>
      </div>
      <div class="right lib-lazyload" :data-lazyload="detail.images.medium"></div>
    </div>
  </div>
</template>

<script>
import RatingStars from '../common/rating-stars';

export default {
  components: {
    RatingStars,
  },
  props: ['detail']
}
</script>
