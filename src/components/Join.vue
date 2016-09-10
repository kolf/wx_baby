<template>
  <div>
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">用户注册</x-header>
    <div class="weui_cells_title">注册即代表同意 <span class="text-primary" v-link="{name: 'agreement'}">一起赢注册条款</span></div>
    <group style="margin-top:-1em">
      <x-input title="手机号" placeholder="请填写手机号" :require="true" :min="11" :max="11" :value.sync="phone">
        <captcha-btn :phone.sync="phone" :group="group"></captcha-btn>
      </x-input>
      <x-input title="验证码" placeholder="请填写验证码" :require="true" :min="6" :max="6" :value.sync="code"></x-input>
    </group>
    <div class="pad">
      <x-button type="primary" @click="check()">下一步</x-button>
    </div>
  </div>
</template>

<script>
import {XHeader, XButton, Group, XInput} from 'vux-components'
import CaptchaBtn from './CaptchaBtn'
import randomN from '../utils/randomN'
import {checkMsgCode} from '../vuex/actions'

export default {
  components: {
    XButton,
    XHeader,
    Group,
    XInput,
    CaptchaBtn
  },
  vuex: {
    getters: {
      checked: ({captcha}) => captcha.check.checked,
      checkMsg: ({captcha}) => captcha.check.msg
    },
    actions: {
      checkMsgCode
    }
  },
  created () {
    this.group = randomN('group_')
  },
  methods: {
    check () {
      let vm = this
      this.checkMsgCode({
        group: vm.group,
        userMobile: vm.phone,
        msgCode: vm.code
      })
    }
  }
}
</script>

<style lang="less">

</style>
