<style lang="less">
@import '../less/mixins.less';
@import '../less/reset.less';
@import '../less/common.less';

.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>

<template>
  <transition name="router-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  components: {
  }
}
</script>
