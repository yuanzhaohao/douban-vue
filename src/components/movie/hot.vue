<style lang="less">
@import '../../less/mixins.less';

.movie-hot {
  width: 100%;
}
</style>

<template>
  <div class="movie-hot">
    <ModuleTitle />
    <div v-if="listData && listData.length" class="movie-list">

    </div>
  </div>
</template>

<script>
import Lazyload from 'data-lazyload';
import { mapState, mapActions } from 'vuex';

import ModuleTitle from '../common/module-title';

export default {
  components: {
    ModuleTitle
  },

  data() {
    return {
      listData: null
    }
  },

  mounted() {
    const lazyInstance = Lazyload.instance();
    lazyInstance.addCallback(this.$el, () => {
      let resp = this.getMovieHotList(6);
      console.log(resp);
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
