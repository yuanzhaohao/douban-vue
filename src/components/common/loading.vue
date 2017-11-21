<style lang="less">
.loading-box {
  width: 100%;
  height: 40px;/*px*/
  line-height: 40px;/*px*/
  font-size: 26px;/*px*/
  color: #666;
  text-align: center;

  > div {
    display: inline-block;
    margin-right: 16px;
    vertical-align: middle;
  }
}
</style>

<template>
  <div class="loading-box"><div><LoadingCircle /></div><span>正在加载...</span></div>
</template>

<script>
import LoadingCircle from './loading-circle';
export default {
  components: {
    LoadingCircle
  },
  name: 'loading'
};
</script>
