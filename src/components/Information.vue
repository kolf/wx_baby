<template>
  <div>
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">用户注册</x-header>
    <group title="用户信息">
      <x-input title="用户姓名" class="input-right" placeholder="请输入2-10位的汉字或字母" :require="true" :value.sync="userRealName"></x-input>
      <x-input title="常用邮箱" class="input-right" placeholder="请输入你的邮箱" :require="true" :value.sync="userEmail"></x-input>
      <address title="所在城市" :value.sync="userCity" :list="addressData" raw-value hide-district placeholder="请选择地址"></address>
    </group>
    <group title="宝宝信息">
      <x-input title="宝宝姓名" class="input-right" placeholder="请输入2-10位的汉字或字母" :require="true" :value.sync="kidsName"></x-input>
      <datetime title="宝宝生日" :value.sync="kidsBirthday"></datetime>
      <popup-picker title="宝宝性别" :data="sex" :value.sync="kidsGender"></popup-picker>
    </group>
    <div class="pad">
      <x-button type="primary" @click="reg()">确认</x-button>
    </div>
  </div>
</template>

<script>
import {XHeader, XButton, Cell, Group, XInput, Address, AddressChinaData, PopupPicker, Picker, Datetime} from 'vux-components'
import value2name from 'vux/src/filters/value2name'
import randomN from '../utils/randomN'
import {userRegister} from '../vuex/actions'

export default {
  components: {
    XButton,
    XHeader,
    Cell,
    Group,
    XInput,
    Address,
    Datetime,
    PopupPicker,
    Picker
  },
  vuex: {
    actions: {
      userRegister
    }
  },
  created () {
    this.group = randomN()
    this.moble = this.$route.params.userMobile
  },
  data () {
    return {
      addressData: AddressChinaData,
      address: ['北京市', '北京市市辖区'],
      sex: [['男孩', '女孩']]
    }
  },
  methods: {
    getName (value) {
      return value2name(value, AddressChinaData)
    },
    reg () {
      let kids = []
      kids.push(`{"kidsName": "${this.kidsName}", "kidsBirthday": "${this.kidsBirthday}", "kidsGender": 1}`)
      this.userRegister({
        group: this.group,
        urlPamrs: `{"type": "add","userId": "","userRealName": "${this.userRealName}","userMobile": "${this.moble}","userWeChat": "gxogle_3","userEmail": "${this.userEmail}","userCity": "${this.userCity}","kidsJsonArray": [${kids}]}`
      })
    }
  }
}
</script>

<style lang="less">
.input-right{
  input{
    text-align:right;
    padding-right: 5px;
    box-sizing:border-box;
  }
}
</style>
