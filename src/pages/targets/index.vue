<template>
  <div class="main-warp" @click="clickHandle">
    <div class="target-list-wrap" >
      <div class="target-list-content">
        <div class="weui-cells weui-cells_after-title">
          <navigator :key="item.name" v-for="item in targetList" url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
            <text :class="[item.className, 'iconfont target-icon weui-cell__hd']"></text>
            <div class="weui-cell__bd content">
              <text class="content-text">{{item.name}}</text>
              <text class="punch-day-wrap content-text"> 已经打卡<text class="punch-day-content">{{item.punchDay}}</text>天</text>
            </div>
            <text class="iconfont icon-right"></text>
          </navigator>
        </div>
      </div>
      <div class="add-target">
        <button class="weui-btn" type="primary" plain="true">
          <text>添加目标</text>
          <!-- <text class="iconfont icon-winnie"></text> -->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      targetList: [{
        name: '早起',
        className: 'icon-sun',
        punchDay: 3
      }, {
        name: '吃早餐',
        className: 'icon-eat',
        punchDay: 3
      }],
      motto: 'Hello miniprograme'
    }
  },

  components: {
    card
  },

  methods: {
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

/* list */
.main-warp {
  height: 100%;
  box-sizing: border-box;
  padding: 5px 7px;
}

.target-list-wrap {
  height: 100%;
  box-shadow: #888 0px 0px 1px;
  display: flex;
  flex-direction: column;
}

.target-list-content {
  flex: 1;
}

.target-list-content .icon-right{
  font-size: 24px;
  color: $primary-color;
}
.target-list-content .target-icon {
  margin-right: 25px;
  font-size: 34px;
  color: $primary-color;
}

.target-list-content .content {
  flex-direction: column;
}

.target-list-content .content .punch-day-wrap {
  color: grey;
  font-size: 12px;
}

.target-list-content .content .punch-day-content {
  color: $primary-color;
}

.target-list-content .content .content-text {
  display: block;
}

.add-target {
  height: 50px;
}

.add-target .weui-btn {
  color: $primary-color;
  border:1px solid $primary-color;
  width: 130px;
  font-size: 14px;
  border-radius: 14px;
  line-height: 30px;
  height: 30px;
}

.add-target .icon-winnie {
  font-size: 20px;
  margin-right: 5px;
}

/* native */

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
