<template>
  <div class="main-warp">
    <top-header :back="true"></top-header>
    <div style="margin-top: 60px; width:1px; height: 1px;"></div>
    <message :type="messageType" v-model="isShowMessage" :content="messageContent"></message>
    <spin v-if="isloading" fix custom></spin>
    <div class="target-list-wrap" >
      <div class="target-header">
        <text class="target-title">全部目标</text>
        <!-- <navigator url="/pages/targetManage/main" class="target-manage">管理目标</navigator> -->
      </div>
      <div class="target-list-content">
          <navigator :key="item._openid" v-for="(item, index) in defaultTargetsLists" class="target-card">
            <!-- <text :class="[item.className, 'iconfont target-icon weui-cell__hd']"></text> -->
            <div class="img-container">
              <div v-if="ifAdd[index]" class="full-model">
                <text class="iconfont icon-nike"></text>
              </div>
              <img class="target-card-img" v-if="item.photo" :src="'/static/images/' + item.photo"/>
            </div>
            <div class="content-container">
              <text class="card-content">{{item.name}}</text>
              <text @click.stop="addSelectTarget(item)" :class="['iconfont', 'normal-icon', ifAdd[index] ?  '' : 'icon-add']"></text>
            </div>
          </navigator>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { defaultTargetsLists } from '@/utils'
import spin from '@/components/spin'
import topHeader from '@/components/topHeader'
import message from '@/components/message'

export default {
  data () {
    return {
      ifAdd: [],
      defaultTargetsLists: defaultTargetsLists,
      isloading: false,
      isShowMessage: false,
      messageContent: '',
      messageType: 'default'
    }
  },

  components: {
    spin,
    message,
    topHeader
  },

  onLoad () {
    this.refreshList()
    console.log(this.ifAdd)
  },

  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      targetsLists: state => state.targets.targetsLists
    })
  },

  methods: {
    ...mapActions({
      addTarget: 'targets/addTarget'
    }),
    addSelectTarget (target) {
      this.isloading = true
      console.log(target)
      this.addTarget(target)
        .then(res => {
          console.log(res)
          this.isloading = false
          this.refreshList()
          if (res) {
            this.showMessage({
              messageDuration: 1500,
              messageContent: '添加目标成功',
              messageType: 'success'
            })
          } else {
            this.showMessage({
              messageDuration: 1500,
              messageContent: '添加目标失败',
              messageType: 'error'
            })
          }
        })
    },
    refreshList () {
      this.ifAdd = this.defaultTargetsLists.map(item => {
        let res = false
        this.targetsLists.forEach(el => {
          if (el.targetId === item.targetId) {
            res = true
          }
        })
        return res
      })
    },
    showMessage (options) {
      this.messageContent = options.messageContent
      this.messageType = options.messageType || 'default'
      this.isShowMessage = true
      setTimeout(() => {
        this.isShowMessage = false
      }, options.messageDuration || 1500)
    }
  },

  created () {
    // componentCtx.handleShow()
    // let app = getApp()
  }
}
</script>

<style scoped lang=scss>
@import '../../utils/styles/vars.sass';
.main-warp {
  box-sizing: border-box;
  padding: 8px 8px;
  height: 100%;
  width: 100%;
}

.normal-icon{
  font-size: 24px;
  color: $primary-color;
  padding-right: 10px;
}

.full-model {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 100%;
  background-color: rgba(143, 137, 49, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-nike {
    font-size: 60px;
    color: white;
  }
}

.target-list-wrap {
  height: 100%;
  width: 100%;
  .target-header {
    margin-left: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    .target-title {
      font-size: $big-font-size;
      font-weight: 500;
      flex: 1;
    }
    .target-manage {
      float: right;
      color: $link-font-color;
      font-weight: 500;
      font-size: 18px;
    }
  }
  .target-list-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    .target-card {
      width: 49%;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px;
      margin-bottom:8px;
      .img-container {
        /* overflow: hidden;
        height: 0;
        padding-bottom: 70%;  */
        width: 100%;
        height:32vw;
        position: relative;
      }
      .content-container {
        width: 100%;
        height:17vw;
        display: flex;
        align-items:center;
        flex-direction: row;
        background-color: white;
        .card-content {
          flex: 1;
          margin-left: 10px;
        }
      }
      .target-card-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>
