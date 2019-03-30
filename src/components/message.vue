<template>
  <view  v-show="showToast" :class="['i-class', 'i-message', 'i-message-' + type, value ? 'i-message-show' : '']">
    {{ content }}
</view>
</template>

<script>

export default {
  data: {
    showToast: this.value
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    content: {
      type: [String, Number],
      default: ''
    },
    duration: {
      type: Number,
      default: 1500
    }
  },
  externalClasses: ['i-class'],
  watch: {
    value (val) {
      this.showToast = val
    },
    showToast (val) {
      console.log('val' + val)
      if (val) {
        this.timer = setTimeout(() => {
          this.showToast = false
        }, this.duration)
      }
      this.$emit('input', val)
    }
  },
  methods: {
    // handleShow (options) {
    //   const { type = 'default', duration = 2 } = options

    //   this.setData({
    //     ...options,
    //     type,
    //     duration,
    //     visible: true
    //   })

    //   const d = this.data.duration * 1000

    //   if (timmer) clearTimeout(timmer)
    //   if (d !== 0) {
    //     timmer = setTimeout(() => {
    //       this.handleHide()
    //       timmer = null
    //     }, d)
    //   }
    // },

    // handleHide () {
    //   this.setData({
    //     ...defaultData
    //   })
    // }
  }
}
</script>

<style scoped lang=scss>
@import "../utils/styles/vars.sass";

.i-message {
  display: block;
  width: 100%;
  min-height: 32px;
  line-height: 2.3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #2d8cf0;
  color: #fff;
  text-align: center;
  font-size: 14px;
  z-index: 1010;
  opacity: 0;
  -webkit-transform: translateZ(0) translateY(-100%);
  transition: all 0.4s ease-in-out;
}
.i-message-show {
  -webkit-transform: translateZ(0) translateY(0);
  opacity: 1;
}
.i-message-default {
  background: #2d8cf0;
}
.i-message-success {
  background: #19be6b;
}
.i-message-warning {
  background: #f90;
}
.i-message-error {
  background: #ed3f14;
}
</style>
