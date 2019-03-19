<template>
  <div class="main-warp">
    <div class="target-list-wrap" >
      <div class="target-header">
        <text class="target-title">全部目标</text>
      </div>
      <div class="target-list-content">
          <navigator :key="item._openid" v-for="item in targetList" :url="item._openid" class="target-card">
            <!-- <text :class="[item.className, 'iconfont target-icon weui-cell__hd']"></text> -->
            <div class="img-container">
              <img class="target-card-img" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl"/>
            </div>
            <div class="content-container">
              <text class="card-content">{{item.name}}</text>
              <text class="iconfont normal-icon icon-add"></text>
            </div>
          </navigator>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import card from '@/components/card'

export default {
  data () {
    return {
      targetList: [{
        name: '早起',
        className: 'icon-sun',
        _openid: '1',
        color: 'event.color',
        desc: 'event.desc'
      }, {
        name: '吃早餐',
        className: 'icon-eat',
        _openid: '2',
        color: 'event.color',
        desc: 'event.desc'
      }]
    }
  },

  components: {
    card
  },

  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },

  methods: {
    ...mapActions({
      addTarget: 'targets/addTarget'
    })
  },

  created () {
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

.target-list-wrap {
  height: 100%;
  width: 100%;
  .target-header {
    margin-left: 10px;
    margin-bottom: 10px;
    .target-title {
      font-size: $big-font-size;
      font-weight: 500;
    }
  }
  .target-list-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .target-card {
      width: 49%;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px;
      .img-container {
        /* overflow: hidden;
        height: 0;
        padding-bottom: 70%;  */
        width: 100%;
        height:36.5vw;
      }
      .content-container {
        width: 100%;
        height:12.5vw;
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
