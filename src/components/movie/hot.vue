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
      await this.getMovieHotData({
        start: 0,
        count: 6
      });
      const data = this.movie.hotData;
      console.log(data);
      if (data && data.subject_collection_items && data.subject_collection_items.length) {
        this.listData = data.subject_collection_items;
        setTimeout(() => {
          lazyInstance.addElements(this.$el);
        }, 0);
      }
    });
  },

  computed: {
    ...mapState([
      'movie'
    ]),
  },
  methods: {
    ...mapActions([
      'getMovieHotData'
    ]),
  },
}
</script>
