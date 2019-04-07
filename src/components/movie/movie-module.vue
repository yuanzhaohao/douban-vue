<style lang="less">
@import '../../less/mixins.less';

.movie-module {
  width: 100%;
}

.movie-list {
  width: 100%;
  height: 440 * 3px;
  .clearfix;
}

.module-loading {
  display: flex;
  height: 440 * 1.5px;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="movie-module">
    <ModuleTitle :title="title" />
    <div class="movie-list">
      <template v-if="listData && listData.length">
        <MovieItem v-for="(itemData, index) in listData" :itemData="itemData" :key="index" />
      </template>
      <div class="module-loading" v-else>
        <Loading />
      </div>
    </div>
  </div>
</template>

<script>
import Lazyload from 'data-lazyload';
import { mapState, mapActions } from 'vuex';

import ModuleTitle from '../common/module-title';
import Loading from '../common/loading';
import MovieItem from './movie-item';
const lazyInstance = Lazyload.instance();
lazyInstance.diff = 0;

export default {
  props: ['type', 'title', 'dataKey'],
  components: {
    ModuleTitle,
    MovieItem,
    Loading,
  },

  data() {
    return {
      listData: null
    }
  },

  mounted() {
    lazyInstance.addCallback(this.$el, async () => {
      const { dataKey, type } = this.$props;
      if (!this.movie[dataKey]) {
        await this.getMovieData({
          start: 0,
          count: 9,
          type,
        });
      }
      let data = this.movie[dataKey];
      if (data && data.subjects && data.subjects.length) {
        this.listData = data.subjects;
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
