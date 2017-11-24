<style lang="less">
.loading-circle {
  width: 40px;/*px*/
  height: 40px;/*px*/
  position: relative;
  transform: translateZ(0);

  .circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &:before {
      content: '';
      display: block;
      width: 3px;/*px*/
      height: 10px;/*px*/
      background-color: #9d9d9d;
      margin: 0 auto;
      border-radius: 3px;/*px*/
      -webkit-animation: fadeDelay 1.2s infinite ease-in-out both;
    }

    &.light {
      &:before {
        background-color: #f7f7f7;
      }
    }

    &:nth-of-type(2) {
      -webkit-transform: rotate(30deg);
      transform: rotate(30deg);

      &:before {
        -webkit-animation-delay: -1.1s;
      }
    }

    &:nth-of-type(3) {
      -webkit-transform: rotate(60deg);
      transform: rotate(60deg);
      &:before {
        -webkit-animation-delay: -1s;
      }
    }

    &:nth-of-type(4) {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      &:before {
        -webkit-animation-delay: -0.9s;
      }
    }

    &:nth-of-type(5) {
      -webkit-transform: rotate(120deg);
      transform: rotate(120deg);
      &:before {
        -webkit-animation-delay: -0.8s;
      }
    }

    &:nth-of-type(6) {
      -webkit-transform: rotate(150deg);
      transform: rotate(150deg);
      &:before {
        -webkit-animation-delay: -0.7s;
      }
    }

    &:nth-of-type(7) {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
      &:before {
        -webkit-animation-delay: -0.6s;
      }
    }

    &:nth-of-type(8) {
      -webkit-transform: rotate(210deg);
      transform: rotate(210deg);
      &:before {
        -webkit-animation-delay: -0.5s;
      }
    }

    &:nth-of-type(9) {
      -webkit-transform: rotate(240deg);
      transform: rotate(240deg);
      &:before {
        -webkit-animation-delay: -0.4s;
      }
    }

    &:nth-of-type(10) {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
      &:before {
        -webkit-animation-delay: -0.3s;
      }
    }

    &:nth-of-type(11) {
      -webkit-transform: rotate(300deg);
      transform: rotate(300deg);
      &:before {
        -webkit-animation-delay: -0.2s;
      }
    }

    &:nth-of-type(12) {
      -webkit-transform: rotate(330deg);
      transform: rotate(330deg);
      &:before {
        -webkit-animation-delay: -0.1s;
      }
    }
  }
}

@-webkit-keyframes fadeDelay {
  0%, 39%, 100% { opacity: 0.1; }
  40% { opacity: 1; }
}

</style>

<template>
  <div class="loading-circle">
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
    <div v-bind:class="['circle', {light: type === 'light'}]"></div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  name: 'loading-circle'
};
</script>
