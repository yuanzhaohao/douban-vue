<style lang="less">
@import '../less/mixins.less';

.page-detail {
  padding-top: 92px;/*px*/
}

.container {
  width: 690px;
  margin-left: 30px;
}



</style>

<template>
  <div class="page-detail">
    <MovieHeader />
    <div class="container" v-if="detail">
      <DetailInfo :detail="detail" />
      <DetailSummary :detail="detail" />
    </div>
  </div>
</template>

<script>
import MovieHeader from '../components/movie/header';
import Lazyload from 'data-lazyload';
import { mapState, mapActions } from 'vuex';

import DetailInfo from '../components/detail/detail-info';
import DetailSummary from '../components/detail/detail-summary';

const lazyInstance = Lazyload.instance();

export default {
  components: {
    MovieHeader,
    DetailInfo,
    DetailSummary,
  },

  mounted: async function() {
    const subjectId = this.$route.params.subjectId;
    await this.getDetailData({
      subjectId
    });

    console.log(this.detail);
    setTimeout(() => {
      lazyInstance.addElements(this.$el);
    }, 0);
  },

  computed: {
    ...mapState([
      'detail'
    ]),
  },
  methods: {
    ...mapActions([
      'getDetailData'
    ]),
  },
}
</script>
