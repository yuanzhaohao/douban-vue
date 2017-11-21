<style lang="less">
.loading-circle {
  width: 40px;
  height: 40px;
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
      margin: 0 auto;
      width: 3px;/*px*/
      height: 10px;/*px*/
      background-color: #9d9d9d;
      border-radius: 3px;/*px*/
      -webkit-animation: fadeDelay 1.2s infinite ease-in-out both;
    }

    &:nth-of-type(2) {
      transform: rotate(30deg);

      &:before {
        -webkit-animation-delay: -1.1s;
      }
    }

    &:nth-of-type(3) {
      transform: rotate(60deg);
      &:before {
        -webkit-animation-delay: -1s;
      }
    }

    &:nth-of-type(4) {
      transform: rotate(90deg);
      &:before {
        -webkit-animation-delay: -0.9s;
      }
    }

    &:nth-of-type(5) {
      transform: rotate(120deg);
      &:before {
        -webkit-animation-delay: -0.8s;
      }
    }

    &:nth-of-type(6) {
      transform: rotate(150deg);
      &:before {
        -webkit-animation-delay: -0.7s;
      }
    }

    &:nth-of-type(7) {
      transform: rotate(180deg);
      &:before {
        -webkit-animation-delay: -0.6s;
      }
    }

    &:nth-of-type(8) {
      transform: rotate(210deg);
      &:before {
        -webkit-animation-delay: -0.5s;
      }
    }

    &:nth-of-type(9) {
      transform: rotate(240deg);
      &:before {
        -webkit-animation-delay: -0.4s;
      }
    }

    &:nth-of-type(10) {
      transform: rotate(270deg);
      &:before {
        -webkit-animation-delay: -0.3s;
      }
    }

    &:nth-of-type(11) {
      transform: rotate(300deg);
      &:before {
        -webkit-animation-delay: -0.2s;
      }
    }

    &:nth-of-type(12) {
      transform: rotate(330deg);
      &:before {
        -webkit-animation-delay: -0.1s;
      }
    }
  }
}

@-webkit-keyframes fadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

</style>

<template>
  <div class="loading-circle">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: 'loading-circle'
};
</script>
