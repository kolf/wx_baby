<template>
  <x-button class="captcha-btn" :class="{'weui_btn_disabled': flag}" mini plain @click="send()">{{text}}</x-button>
</template>

<script>
  import {Spinner, XButton} from 'vux-components'
  import {getMsgCode} from '../vuex/actions'

  export default {
    components: {
      Spinner,
      XButton
    },
    props: {
      phone: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: '发送验证码'
      },
      flag: {
        type: Boolean,
        default: false
      },
      group: {
        type: String,
        default: ''
      }
    },
    vuex: {
      actions: {
        getMsgCode
      },
      getters: {

      }
    },
    methods: {
      send () {
        let vm = this
        if (this.flag) {
          return false
        }
        this.getMsgCode({
          userMobile: vm.phone,
          group: vm.group
        })
        this.flag = true
        let n = 60
        let timer = setInterval(function () {
          if (!n) {
            clearInterval(timer)
            vm.text = '发送验证码'
            vm.flag = false
          } else {
            n--
            vm.text = '发送中(' + n-- + ')'
          }
        }, 1000)
      }
    }
  }
</script>

<style lang="less">
.weui_btn_disabled{
  border-color:#ccc
}
.captcha-btn{
  margin-left:5px
}
</style>
