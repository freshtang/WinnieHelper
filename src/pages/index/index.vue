<template>
  <div class="index-warp main-warp" @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" v-else src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=f2c9d5bcf61f3a295ec8d2cca924bce3/f9dcd100baa1cd110c160642bf12c8fcc3ce2d2b.jpg" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div class="grey-line"></div>
    <div class="grey-line"></div>
  </div>
</template>

<script>
import card from '@/components/card'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      motto: 'Hello miniprograme'
    }
  },

  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },

  onLoad () {
    console.log(this.userInfo)
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang=scss>
@import '../../utils/styles/vars.sass';

.index-warp.main-warp {
  padding: 0 20px;
  .userinfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    .userinfo-avatar {
      width: 128rpx;
      height: 128rpx;
      border-radius: 50%;
    }
    .userinfo-nickname {
      font-size: $big-font-size;
      margin-left: 15px;
    }
  }
}
</style>
