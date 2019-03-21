<template>
  <div class="main-warp">
    <div class="target-list-wrap">
      <div class="target-header">
        <text class="target-title">全部目标</text>
      </div>
      <div class="kind-list__item">
        <card :text="userInfo.nickName"></card>
      </div>
      <div class="kind-list__item">
        <Calendar :value="value" :multi="true" :range="false" @select="select" />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  import card from '@/components/card'
  import Calendar from 'mpvue-calendar'
  import 'mpvue-calendar/src/style.css'
  import { formatDate } from '@/utils'
  
  import apis from '@/apis'

  // const year = new Date().getFullYear()
  // const month = new Date().getMonth() + 1

  export default {
    data () {
      return {
        value: []
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
      apis.checkin.queryCheckin({
        target_id: options.target_id
      }).then(res => {
        console.log(res)
        this.value = res.result.data.map(item => {
          return formatDate(new Date(item.time)).split('/').map(n => parseInt(n))
        })
        console.log(this.value)
      })
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
      },
      select (val, val2) {
        console.log(val)
        console.log(val2)
        console.log(this.value)
      }
    },

    created () {
      // let app = getApp()
    }
  }
</script>

<style lang=scss>
  @import '../../utils/styles/vars.sass';

  .main-warp {
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

</style>
