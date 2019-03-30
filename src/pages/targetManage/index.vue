<template>
  <div class="main-warp">
    <div class="target-list-wrap" >
      <div class="target-header">
        <text class="target-title">全部目标</text>
        <navigator class="target-manage">管理目标</navigator>
      </div>
      <div class="target-list-content">
          <navigator :key="item._openid" v-for="(item, index) in defaultTargetsLists" class="target-card">
            <!-- <text :class="[item.className, 'iconfont target-icon weui-cell__hd']"></text> -->
            <div class="img-container">
              <div v-if="ifAdd[index]" class="full-model">
                <text class="iconfont icon-nike"></text>
              </div>
              <img class="target-card-img" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl"/>
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
import card from '@/components/card'

export default {
  data () {
    return {
      ifAdd: [],
      defaultTargetsLists: defaultTargetsLists
    }
  },

  components: {
    card
  },

  onLoad () {
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

  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      targetsLists: state => state.targets.targetsLists
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


</style>
