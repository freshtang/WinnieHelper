<template>
  <div class="target-index main-warp">
    <spin v-if="isloading" fix custom></spin>
    <div class="target-list-wrap">
      <div class="target-list-content">
        <div v-if="!isloading" class="weui-cells weui-cells_after-title">
          <navigator
            :key="item._openid"
            v-for="item in targetsLists"
            :url="'/pages/targetDetail/main?name=' + item.name + '&target_id=' + item._id + '&lastCheck=' + item.lastCheckDate + '&_openid=' + item._openid + '&desc=' + item.desc"
            class="weui-cell weui-cell_access"
            hover-class="weui-cell_active"
          >
            <text :class="[item.className, 'iconfont target-icon weui-cell__hd']"></text>
            <div class="weui-cell__bd content">
              <text class="content-text">{{item.name}}</text>
              <text class="punch-day-wrap content-text">
                已经打卡
                <text class="punch-day-content">{{item.punchDay}}</text>天
              </text>
            </div>
            <text
              @click.stop="() => {}"
              :class="[item.lastCheck === curDate? 'icon-allright' : 'icon-right', 'iconfont', 'icon-normal']"
            ></text>
          </navigator>
        </div>
      </div>
      <div class="add-target">
        <button class="weui-btn" type="primary" plain="true" @click="toAddTarget">
          <text>添加目标</text>
          <!-- <text class="iconfont icon-winnie"></text> -->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { formatDate } from '@/utils'
import card from '@/components/card'
import spin from '@/components/spin'
// import apis from '@/apis'

export default {
  data () {
    return {
      curDate: formatDate(new Date()),
      isloading: true
    }
  },

  components: {
    card,
    spin
  },

  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      targetsLists: state =>
        state.targets.targetsLists.map(item => {
          return {
            ...item,
            lastCheckDate: item.lastCheck,
            lastCheck: formatDate(new Date(item.lastCheck))
          }
        })
    })
  },

  methods: {
    ...mapActions({
      loadTargets: 'targets/loadTargets'
    }),
    toAddTarget () {
      wx.navigateTo({ url: '/pages/targetAdd/main' })
      // apis.checkin.addCheckin({
      //   target_id: 'XJDSQXffS3SWK7Ud',
      //   time: new Date().toString()
      // }).then(res => {
      //   console.log(res)
      // })
    }
  },

  created () {
    this.loadTargets().then(res => {
      console.log(res)
      this.isloading = false
    })
    // let app = getApp()
  }
}
</script>

<style scoped lang=scss>
@import "../../utils/styles/vars.sass";

/* list */
.main-warp.target-index {
  height: 100%;
  box-sizing: border-box;
  padding: 5px 7px;
  background-color: #f8f8f8;
}

.target-list-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px;
}

.target-list-content {
  position: relative;
  flex: 1;
  .icon-normal {
    font-size: 24px;
    color: $primary-color;
  }
  .target-icon {
    margin-right: 25px;
    font-size: 34px;
    color: $primary-color;
  }
  .content {
    padding: 5px 0;
    flex-direction: column;
    .punch-day-wrap {
      color: grey;
      font-size: 12px;
    }

    .punch-day-content {
      color: $primary-color;
    }
    .content-text {
      display: block;
    }
  }
}

.add-target {
  height: 50px;
  .weui-btn {
    color: $primary-color;
    border: 1px solid $primary-color;
    width: 130px;
    font-size: 14px;
    border-radius: 14px;
    line-height: 30px;
    height: 30px;
  }
  .icon-winnie {
    font-size: 20px;
    margin-right: 5px;
  }
}
</style>
