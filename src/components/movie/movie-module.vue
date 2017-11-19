<style lang="less">
@import '../../less/mixins.less';

.movie-module {
  width: 100%;
}

.movie-list {
  width: 100%;
  height: 880px;
  .clearfix;
}
</style>

<template>
  <div class="movie-module">
    <ModuleTitle :title="title" />
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
  props: ['type', 'title', 'dataKey'],
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
      const { dataKey, type } = this.$props;
      let data;
      await this.getMovieData({
        start: 0,
        count: 6,
        type,
      });
      data = this.movie[dataKey];
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
      'getMovieData'
    ]),
  },
}
</script>
