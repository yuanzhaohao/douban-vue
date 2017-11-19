<style lang="less">
@import '../../less/mixins.less';

.module-title {
  position: relative;
  width: 750px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  background-color: #ffffff;
  box-sizing: border-box;
  .clearfix;
}

.module-text {
  display: inline-block;
  height: 48px;
  line-height: 48px;
  font-size: 36px;/*px*/
  color: #111;
}

.module-btn {
  float: right;
  height: 48px;
  line-height: 48px;
  font-size: 28px;/*px*/
  color: #42bd56;
}
</style>

<template>
  <div class="module-title">
    <p class="module-text">{{title}}</p>
    <div class="module-btn" v-on:click="onBtnClick(url)">更多</div>
  </div>
</template>

<script>

export default {
  props: ['title', 'url'],
  methods: {
    onBtnClick(url) {
      console.log(url);
    }
  }
};
</script>
