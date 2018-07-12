<style lang="less">
@import '../less/mixins.less';

.page-detail {
  padding-top: 92px;/*px*/
}

.container {
  width: 690px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 30px;
}

.detail-title {
  font-size: 56px;/*px*/
}

.detail-btn-wrapper {
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: space-between;
}

.detail-btn {
  display: flex;
  width: 330px;
  height: 60px;
  border: 1px solid #ffb712;/*no*/
  border-radius: 6px;
  color: #ffb712;
  font-size: 30px;/*px*/
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}

.detail-summary {
  margin-top: 20px;
  line-height: 44px;
  font-size: 28px;/*px*/
  color: #494949;
  white-space: pre-wrap;
  word-break: break-all;
  text-align: justify;
}

.detail-module-title {
  height: 50px;
  line-height: 50px;
  margin-top: 30px;
  color: #aaa;
  font-size: 32px;/*px*/
  font-weight: 400;
}

.detail-person {
  width: 100%;
  margin-top: 20px;
  .clearfix;
}

.detail-person-item {
  float: left;
  width: 159px;
  margin-right: 18px;

  &:last-child {
    margin-right: 0;
  }
}

.detail-person-pic {
  width: 159px;
  height: 229px;
  background-color: #f7f7f7;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.detail-person-title {
  margin-top: 16px;
  color: #494949;
  font-size: 28px;/*px*/
  line-height: 1.5;
  white-space: normal;
  text-align: center;
  overflow: hidden;
}
</style>

<template>
  <div class="page-detail">
    <MovieHeader />
    <div class="container">
      <template v-if="detail">
        <div class="detail-title">{{detail.title}}</div>

        <DetailInfo :detail="detail" />

        <div class="detail-btn-wrapper">
          <div class="detail-btn">想看</div>
          <div class="detail-btn">看过</div>
        </div>

        <div class="detail-module-title">剧情简介</div>
        <div class="detail-summary">{{detail.summary}}</div>

        <template v-if="detail.casts && detail.casts.length">
          <div class="detail-module-title">影人</div>
          <div class="detail-person">
            <div class="detail-person-item" v-for="(itemData, index) in detail.casts">
              <div class="detail-person-pic lib-lazyload" :data-lazyload="itemData.avatars.medium"></div>
              <div class="detail-person-title">{{itemData.name}}</div>
            </div>
          </div>
        </template>
      </template>
      <Loading v-else />
    </div>
  </div>
</template>

<script>
import MovieHeader from '../components/movie/header';
import Lazyload from 'data-lazyload';
import { mapState, mapActions } from 'vuex';

import Loading from '@/components/common/loading';
import DetailInfo from '@/components/detail/detail-info';

const lazyInstance = Lazyload.instance();

export default {
  components: {
    MovieHeader,
    DetailInfo,
    Loading,
  },

  mounted: async function() {
    const subjectId = this.$route.params.subjectId;
    await this.getDetailData({
      subjectId
    });

    console.log(this.detail);
    setTimeout(() => {
      lazyInstance.addElements(this.$el);
    }, 50);
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
