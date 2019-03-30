<template>
  <div class="main-warp">
    <spin v-if="isloading" fix custom></spin>
    <div class="larger-header">
      <div class="checkin-wrap">
        <button v-if="!isCheckToday" @click="addCheckin" class="circle-button">
          <text style="margin-left: -20px;margin-right:-20px;">打卡</text>
        </button>
        <div v-if="isCheckToday" class="check-in-time">
          <text class="big-text">{{checkTime}}</text>
          <text class="small-text">今天打卡时间</text>
        </div>
      </div>
    </div>
    <div class="larger-header-content-warp">
      <div class="target-list-wrap">
        <div class="date-count kind-list__item">
          <div class="target-desc">
            <text class="target-desc-symbol">“</text>
            <text class="normal-text">{{options.desc}}</text>
            <text class="target-desc-symbol">”</text>
          </div>
          <div class="grey-line"></div>
          <div class="data-count-card-wrap">
            <div class="data-count-card">
              <text>{{value.length}}</text>
              <text class="grey-text small-text">累计打卡天数</text>
            </div>
            <div class="data-count-card">
              <text>{{monthCheckin}}</text>
              <text class="grey-text small-text">本月打卡天数</text>
            </div>
          </div>
        </div>
        <div class="kind-list__item">
          <Calendar :value="value" :multi="true" :range="false" @select="select" />
        </div>
        <div class="kind-list__item">
          <button @click="handleClickDel()" class="weui-btn del-btn" type="primary">删除此目标</button>
        </div>
      </div>
    </div>

    <mp-modal ref="mpModal" title="注意" :content="'是否确定删除 ' + options.name + ' 目标'" :showCancel="true" @confirm="confirmDelTarget" confirmText="删除" :confirmColor="primaryColor" @cancel="cancel"></mp-modal>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  import Calendar from 'mpvue-calendar'
  import mpModal from 'mpvue-weui/src/modal'
  import 'mpvue-calendar/src/style.css'
  import { formatDate, formatNumber } from '@/utils'
  import spin from '@/components/spin'
  
  import apis from '@/apis'

  // const year = new Date().getFullYear()
  // const month = new Date().getMonth() + 1

  export default {
    data () {
      return {
        value: [],
        calValue: [],
        options: {
          name: '',
          _id: '',
          desc: '',
          lastCheck: '1'
        },
        primaryColor: '#ffc200',
        isloading: false
      }
    },

    components: {
      mpModal,
      Calendar,
      spin
    },

    computed: {
      ...mapState({
        userInfo: state => state.userInfo
      }),
      monthCheckin () {
        return this.value.filter(item => item[1] === (new Date().getMonth() + 1)).length
      },
      isCheckToday () {
        return this.options.lastCheck !== '0' && formatDate(new Date(this.options.lastCheck)) === formatDate(new Date())
      },
      checkTime () {
        const date = new Date(this.options.lastCheck)
        return [date.getHours(), date.getMinutes()].map(formatNumber).join(':')
      }
    },

    onLoad (options) {
      console.log(options)
      this.options = options
      this.isloading = true
      apis.checkin.queryCheckin({
        target_id: options.target_id
      }).then(res => {
        this.value = res.result.data.map(item => {
          return formatDate(new Date(item.time)).split('/').map(n => parseInt(n))
        })
        this.calValue = JSON.parse(JSON.stringify(this.value))
        this.isloading = false
      })
    },

    methods: {
      ...mapActions({
        delTarget: 'targets/delTarget',
        loadTargets: 'targets/loadTargets'
      }),
      confirmDelTarget (res) {
        this.isloading = true
        if (res.confirm) {
          this.delTarget({_id: this.options.target_id})
            .then(res => {
              console.log(res)
              this.isloading = false
              wx.navigateBack({
                delta: 1
              })
            })
        }
      },
      handleClickDel () {
        this.$refs.mpModal.show()
      },
      select () {
        this.value = JSON.parse(JSON.stringify(this.calValue))
      },
      addCheckin () {
        this.isloading = true
        apis.checkin.addCheckin({
          target_id: this.options.target_id,
          time: new Date().toString()
        }).then(res => {
          this.isloading = false
          this.options.lastCheck = `${new Date()}`
          this.value = res.result.data.map(item => {
            return formatDate(new Date(item.time)).split('/').map(n => parseInt(n))
          })
          this.calValue = JSON.parse(JSON.stringify(this.value))
          this.loadTargets()
        })
      }
    },

    created () {
      // let app = getApp()
    }
  }
</script>

<style lang=scss>
  @import '../../utils/styles/vars.sass';

  .kind-list__item {
    background-color: white;
    margin-bottom: 12px;
    padding: 8px 12px;
  }

  .date-count {
    padding-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
    .target-desc{
      .target-desc-symbol{
        font-size: 30px;
      }
    }
    .data-count-card-wrap {
      display: flex;
      .data-count-card{
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
  }

  .larger-header-content-warp {
    margin-top: -40px;
    box-sizing: border-box;
    padding: 8px 8px;
    height: 100%;
    width: 100%;
    .mpvue-calendar ._td.selected ._span {
      background-color: $primary-color;
    }
    .mpvue-calendar ._td.selected ._span.mc-date-red {
      background-color: $primary-color;
    }
  }

  .larger-header {
    height:46vw;
    background-color: $primary-color;
    box-sizing: border-box;
    padding-bottom: 40px;
    display: flex;
    .checkin-wrap {
      margin-left: 25px;
      margin-top: 30px;
      .check-in-time {
        color: white;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        .big-text {
          font-size: 50px;
          margin-bottom:-10px;
        }
      }
    }
  }

</style>
