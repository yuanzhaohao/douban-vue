<style lang="less">
@import '../less/mixins.less';

.page-detail {
  padding-top: 92px;/*px*/
}
</style>

<template>
  <div class="page-detail">
    <MovieHeader />
  </div>
</template>

<script>
import MovieHeader from '../components/movie/header';

export default {
  components: {
    MovieHeader,
  },

  mounted() {
    const movieId = this.$route.params.movieId;
    console.log(movieId);
  }
}
</script>
