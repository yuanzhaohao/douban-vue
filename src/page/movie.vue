<style lang="less">
@import '../less/mixins.less';

.page-movie {
  padding-top: 92px;/*px*/
}
</style>

<template>
  <div class="page-movie">
    <MovieHeader />
    <MovieModule
      v-for="(itemData, index) in modulesData"
      :title="itemData.title"
      :type="itemData.type"
      :dataKey="itemData.dataKey"
      :key="index" />
    <MovieType />
  </div>
</template>

<script>
import MovieHeader from '../components/movie/header';
import MovieModule from '../components/movie/movie-module';
import MovieType from '../components/movie/movie-type';

export default {
  components: {
    MovieHeader,
    MovieModule,
    MovieType,
  },

  data() {
    return {
      modulesData: [
        {
          type: 'showing',
          title: '影院热映',
          dataKey: 'showingData',
        }, {
          type: 'free',
          title: '豆瓣排行榜',
          dataKey: 'freeData',
        }, {
          type: 'latest',
          title: '即将上映',
          dataKey: 'latestData',
        }
      ]
    }
  }
}
</script>
