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
    <div class="movie-list">
      <template v-if="listData && listData.length">
        <MovieItem v-for="(itemData, index) in listData" :itemData="itemData" :key="index" />
      </template>
      <Loading v-else />
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
      let data;
      await this.getMovieData({
        start: 0,
        count: 6,
        type,
      });
      data = this.movie[dataKey];
      console.log(data);
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
