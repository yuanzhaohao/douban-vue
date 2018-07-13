<style lang="less">
@import '../../less/mixins.less';

.movie-module {
  width: 100%;
}

.type-list {
  width: 100%;
  color: #42bd56;
  border-top: 1px solid #e7e7e7;/*no*/
  .clearfix;
}

.type-item {
  float: left;
  position: relative;
  width: 50%;
  height: 80px;
  padding-left: 30px;
  border-bottom: 1px solid #e7e7e7;/*no*/
  font-size: 28px;/*px*/
  line-height: 80px;
  box-sizing: border-box;

  &:nth-of-type(n+1) {
    border-right: 1px solid #e7e7e7;/*no*/
  }

  &:after {
    content: '';
    position: absolute;
    right: 30px;
    top: 32px;
    width: 15px;
    height: 15px;
    border-right: 1px solid #ccc;/*no*/
    border-bottom: 1px solid #ccc;
    transform: rotate(-45deg);
  }
}
</style>

<template>
  <div class="movie-module">
    <ModuleTitle title="分类浏览" />
    <div class="type-list">
      <div class="type-item">经典</div>
      <div class="type-item">冷门佳片</div>
      <div class="type-item">豆瓣高分</div>
      <div class="type-item">动作</div>
      <div class="type-item">喜剧</div>
      <div class="type-item">爱情</div>
      <div class="type-item">悬疑</div>
      <div class="type-item">恐怖</div>
      <div class="type-item">科幻</div>
      <div class="type-item">治愈</div>
      <div class="type-item">文艺</div>
      <div class="type-item">成长</div>
      <div class="type-item">动画</div>
      <div class="type-item">华语</div>
      <div class="type-item">欧美</div>
      <div class="type-item">韩国</div>
      <div class="type-item">日本</div>
  </div>
  </div>
</template>

<script>
import ModuleTitle from '../common/module-title';

export default {
  components: {
    ModuleTitle,
  }
}
</script>
