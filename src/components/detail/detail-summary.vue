<style lang="less">

.detail-summary {
  margin-top: 30px;

  > h5 {
    color: #aaa;
    font-size: 30px;/*px*/
    font-weight: 400;
  }

  > p {
    margin-top: 20px;
    line-height: 44px;
    font-size: 28px;/*px*/
    color: #494949;
    white-space: pre-wrap;
    word-break: break-all;
    text-align: justify;
  }
}
</style>

<template lang="html">
  <div class="detail-summary">
    <h5>剧情简介</h5>
    <p>{{detail.summary}}</p>
  </div>
</template>

<script>
export default {
  props: ['detail']
}
</script>
