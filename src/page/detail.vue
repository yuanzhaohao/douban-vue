<style lang="less">
@import '../less/mixins.less';

.page-detail {
  padding-top: 92px;/*px*/
}

.container {
  width: 690px;
  margin-left: 30px;
}

.detail-title {
  margin-top: 30px;
  font-size: 56px;/*px*/
}

.detail-summary {
  margin-top: 10px;

  > h5 {
    color: #aaa;
    font-size: 30px;/*px*/
    font-weight: 400;
  }

  > p {
    margin-top: 20px;
    line-height: 44px;
    font-size: 28px;/*px*/
    color: #494949;
    word-wrap: break-word;
  }
}
</style>

<template>
  <div class="page-detail">
    <MovieHeader />
    <div class="container" v-if="detail">
      <div class="detail-title">{{detail.title}}</div>
      <div class="detail-summary">
        <h5>剧情简介</h5>
        <p>{{detail.summary}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MovieHeader from '../components/movie/header';
import Lazyload from 'data-lazyload';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    MovieHeader,
  },

  mounted: async function() {
    const subjectId = this.$route.params.subjectId;
    await this.getDetailData({
      subjectId
    });

    console.log(this.detail);
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
