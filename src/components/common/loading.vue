<style lang="less">
.loading-box {
  width: 100%;
  height: 40px;/*px*/
  line-height: 40px;/*px*/
  font-size: 26px;/*px*/
  color: #666;
  text-align: center;

  &:before {
    content: '';
    display: inline-block;
    width: 40px;/*px*/
    height: 40px;/*px*/
    margin-right: 16px;
    vertical-align: middle;
    background-image: url(../../assets/loading-icon.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
}

</style>

<template>
  <div class="loading-box">正在加载...</div>
</template>

<script>
export default {
  name: 'loading'
};
</script>
