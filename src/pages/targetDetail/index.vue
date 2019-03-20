<template>
  <div class="main-warp">
    <div class="target-list-wrap" >
      <div class="target-header">
        <text class="target-title">全部目标</text>
      </div>
      <div class="kind-list__item">
        <card :text="userInfo.nickName"></card>
      </div>
      <div class="kind-list__item">
        <Calendar/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { defaultTargetsLists } from '@/utils'
import card from '@/components/card'
import Calendar from 'mpvue-calendar'
import 'mpvue-calendar/src/style.css'

export default {
  data () {
    return {
      defaultTargetsLists: defaultTargetsLists
    }
  },

  components: {
    card,
    Calendar
  },

  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },

  onLoad (options) {
    console.log(options)
  },

  methods: {
    ...mapActions({
      addTarget: 'targets/addTarget'
    }),
    addSelectTarget (target) {
      console.log(target)
      this.addTarget(target)
        .then(res => {
          console.log(res)
        })
    }
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
        height:32vw;
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
