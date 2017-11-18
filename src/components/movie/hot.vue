<style lang="less">
@import '../../less/mixins.less';

.movie-hot {
  width: 100%;
}

.movie-list {
  .clearfix;
}
</style>

<template>
  <div class="movie-hot">
    <ModuleTitle />
    <div v-if="listData && listData.length" class="movie-list">
      <MovieItem v-for="(itemData, index) in listData" :itemData="itemData" :key="index" />
    </div>
  </div>
</template>

<script>
import Lazyload from 'data-lazyload';
import { mapState, mapActions } from 'vuex';

import ModuleTitle from '../common/module-title';
import MovieItem from './movie-item';

export default {
  components: {
    ModuleTitle,
    MovieItem
  },

  data() {
    return {
      listData: null
    }
  },

  mounted() {
    const lazyInstance = Lazyload.instance();
    lazyInstance.addCallback(this.$el, async () => {
      await this.getMovieHotList({
        start: 0,
        count: 6
      });
      this.listData = this.movieHotList.subjects;
      console.log(this.listData);
    });
  },

  computed: {
    ...mapState([
      'movieHotList'
    ]),
  },
  methods: {
    ...mapActions([
      'getMovieHotList'
    ]),
  },
}
</script>
