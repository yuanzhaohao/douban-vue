<style lang="less">
@import '../../less/mixins.less';

.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  background: #fff;
}

.header-inner {
  display: flex;
  height: 92px;/*px*/
  padding: 0 36px;
  border-bottom: 1px solid #e7e7e7;/*no*/
  background: #fff;
  justify-content: space-between;
  box-sizing: border-box;
  .boxCenter();

  h1 {
    display: inline-block;
    width: 92px;/*px*/
    height: 44px;/*px*/
    font-size: 0;
    background-image: url('../../assets/douban-logo.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  nav {
    height: 100%;
    .clearfix();
  }
}
.header-item {
  float: left;
  height: 100%;
  margin-right: 38px;
  font-size: 30px;/*px*/
  .boxCenter();

  &:nth-of-type(1) {
    color: #2384E8;
  }
  &:nth-of-type(2) {
    color: #9F7860;
  }
  &:nth-of-type(3) {
    color: #E4A813;
  }
  &:nth-of-type(4) {
    color: #2AB8CC;
  }
}

.header-search {
  float: left;
  height: 100%;
  .boxCenter();

  &:before {
    content: '';
    width: 49px;/*px*/
    height: 36px;/*px*/
    margin-top: 8px;/*px*/
    background-image: url('../../assets/douban-search.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>

<template>
  <div class="header">
    <div class="header-inner">
      <h1>豆瓣</h1>
      <nav>
        <div class="header-item">电影</div>
        <div class="header-item">图书</div>
        <div class="header-item">广播</div>
        <div class="header-item">小组</div>
        <div class="header-search"></div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
