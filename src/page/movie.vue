<style lang="less">
@import '../less/mixins.less';

.page-movie {
  padding-top: 92px;/*px*/
}
</style>

<template>
  <div class="page-movie">
    <MovieHeader />
    <MovieHot />
  </div>
</template>

<script>
import MovieHeader from '../components/movie/header';
import MovieHot from '../components/movie/hot';

export default {
  components: {
    MovieHeader,
    MovieHot,
  }
}
</script>
