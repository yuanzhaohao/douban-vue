<style lang="less">

.rating-stars {
  display: inline-block;
  position: relative;
  width: 105px;/*px*/
  height: 36px;/*px*/
  margin-right: 10px;
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
</style>

<template lang="html">
  <div class="rating-stars">
    <div class="rating-gray">
      <i class="gray-star"></i>
      <i class="gray-star"></i>
      <i class="gray-star"></i>
      <i class="gray-star"></i>
      <i class="gray-star"></i>
    </div>
    <div  class="rating-yellow"
      v-bind:style="{width: `${(rating.value || rating.average) / rating.max * 100}%`}"
    >
      <i class="yellow-star"></i>
      <i class="yellow-star"></i>
      <i class="yellow-star"></i>
      <i class="yellow-star"></i>
      <i class="yellow-star"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rating-stars',
  props: ['rating']
}
</script>
