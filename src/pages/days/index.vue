<template>
  <div class="days-index">
    <top-header :isIndex="true"></top-header>
    <div style="margin-top: 60px; width:1px; height: 1px;"></div>
    <div class="list-wrap" >
      <div class="list-content">
        <spin v-if="isloading" fix custom>
          <div class="loading"></div>
        </spin>
        <div v-if="!isloading" class="weui-cells weui-cells_after-title">
          <navigator :key="item._openid" v-for="item in dayLists" :url="'/pages/targetDetail/main?target=' + item.name + '&_id=' + item._id + '&_openid=' + item._openid + '&desc=' + item.desc" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
            <text :class="[item.className, 'iconfont target-icon weui-cell__hd']"></text>
            <div class="weui-cell__bd content">
              <text class="content-text">{{item.name}}</text>
              <text class="punch-day-wrap content-text"> 已经打卡<text class="punch-day-content">{{item.punchDay}}</text>天</text>
            </div>
            <text @click.stop="() => {}" :class="[item.lastCheck === curDate? 'icon-allright' : 'icon-right', 'iconfont', 'icon-normal']"></text>
          </navigator>
        </div>
      </div>
      <div class="add-list">
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
import spin from '@/components/spin'
import topHeader from '@/components/topHeader'
// import apis from '@/apis'

export default {
  data () {
    return {
      curDate: formatDate(new Date()),
      isloading: false
    }
  },

  components: {
    spin,
    topHeader
  },

  onLoad () {
    console.log(this.dayLists)
  },

  computed: {
    ...mapState({
      dayLists: state => state.days.dayLists
    })
  },

  methods: {
    ...mapActions({
      loadTargets: 'targets/loadTargets'
    }),
    toAddTarget () {
      wx.navigateTo({url: '/pages/targetManage/main'})
      // apis.checkin.addCheckin({
      //   target_id: 'XJDSQXffS3SWK7Ud',
      //   time: new Date().toString()
      // }).then(res => {
      //   console.log(res)
      // })
    }
  },

  created () {
    // this.loadTargets()
    //   .then(res => {
    //     console.log(res)
    //     this.isloading = false
    //   })
    // let app = getApp()
  }
}
</script>

<style scoped lang=scss>
@import '../../utils/styles/vars.sass';

.days-index {
  padding-top: 55px;
  position: relative;
  line-height: 1.5;
  color: #24292e;
  padding: 0;
  margin: 0;
  .list-wrap {
    box-sizing: border-box;
    border-top: 1rpx #e1e4e8 solid;
  }
  .weui-btn {
    color: $primary-color;
    border:1px solid $primary-color;
    width: 130px;
    font-size: 14px;
    border-radius: 14px;
    line-height: 30px;
    height: 30px;
  }
}
</style>
