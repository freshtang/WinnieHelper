<template>
  <view
    :class="['i-class', 'i-spin', size === 'large' ? 'i-spin-large' : '', size === 'small' ? 'i-spin-small' : '', fix ? 'i-spin-fix' : '', custom ? 'i-spin-show-text' : '', fullscreen ? 'i-spin-fullscreen' : '']">
    <div class="i-spin-main">
      <view class="i-spin-dot"></view>
      <div class="i-spin-text">
        <!-- <slot></slot> -->
        <div v-if="custom" class="loading"></div>
      </div>
    </div>
  </view>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        value: 'default'
      },
      fix: {
        type: Boolean,
        value: false
      },
      fullscreen: {
        type: Boolean,
        value: false
      },
      custom: {
        type: Boolean,
        value: false
      }
    },
    externalClasses: ['i-class']
  }
</script>

<style scoped lang=scss>
  @import '../utils/styles/vars.sass';

  .center-loadding {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .i-spin-fixed {
    position: relative;
    color: $primary-color;
    vertical-align: middle;
    text-align: center
  }

  .loading {
    display: inline-block;
    margin-right: 12px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    border: 2px solid $primary-color;
    border-color: $primary-color $primary-color $primary-color transparent;
    animation: loading-spin 0.6s linear;
    animation-iteration-count: infinite;
  }

  .i-spin-dot {
    position: relative;
    display: block;
    border-radius: 50%;
    background-color: $primary-color;
    width: 20px;
    height: 20px;
    animation: ani-spin-bounce 1s 0s ease-in-out infinite
  }

  .i-spin-large .i-spin-dot {
    width: 32px;
    height: 32px
  }

  .i-spin-small .i-spin-dot {
    width: 12px;
    height: 12px
  }

  .i-spin-fix {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .9)
  }

  .i-spin-fullscreen {
    z-index: 2010
  }

  .i-spin-fullscreen-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
  }

  .i-spin-fix .i-spin-main {
    position: fixed;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
  }

  .i-spin-fix .i-spin-dot {
    display: inline-block
  }

  .i-spin-show-text .i-spin-dot,
  .i-spin-text {
    display: none
  }

  .i-spin-show-text .i-spin-text {
    display: block;
    font-size: 14px
  }

  @keyframes loading-spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes ani-spin-bounce {
    0% {
      transform: scale(0)
    }

    100% {
      transform: scale(1);
      opacity: 0
    }
  }
</style>
