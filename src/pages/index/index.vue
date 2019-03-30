<template>
  <div class="index-warp" @click="clickHandle">
    <img class="winner-background" src="/static/images/winner_background.png" background-size="cover" />
    <div class="main-warp">
      <top-header :isIndex="true"></top-header>
      <div style="margin-top: 60px; width:1px; height: 1px;"></div>
      <div class="userinfo" @click="bindViewTap">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        <img class="userinfo-avatar" v-else src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=f2c9d5bcf61f3a295ec8d2cca924bce3/f9dcd100baa1cd110c160642bf12c8fcc3ce2d2b.jpg" background-size="cover" />

        <div class="userinfo-nickname">
          <card :text="userInfo.nickName"></card>
        </div>
      </div>
      <div class="grey-line"></div>
      <div class="achieve">
        <div class="achieve-item">
          <text class="achieve-item-score">{{targetsLists.length}}</text>
          <text class="achieve-item-content">参与目标</text>
        </div>
        <div class="achieve-item">
          <text class="achieve-item-score">0</text>
          <text class="achieve-item-content">纪念日子</text>
        </div>
        <div class="achieve-item">
          <text class="achieve-item-score">0</text>
          <text class="achieve-item-content">达成成就</text>
        </div>
      </div>
      <div class="grey-line"></div>
    </div>

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
      userInfo: state => state.userInfo,
      targetsLists: state => state.targets.targetsLists
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

.index-warp {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  .main-warp {
    padding: 0 20px;
    background-color: transparent;
  }
  .winner-background {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.5;
  }
  /* background: url("/static/images/winner_background.png") no-repeat; */
  /* padding: 0 20px; */
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
  .achieve {
    display: flex;
    justify-content: space-around;
    .achieve-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .achieve-item-score {
        font-size: $big-font-size;
      }
      .achieve-item-content {
        font-size: $normal-font-size;
        color: gray;
      }
    }
  }
}
</style>
