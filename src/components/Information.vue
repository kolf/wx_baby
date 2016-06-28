<template>
  <div>
    <x-header style="background-color:#f04848" _:left-options="{showBack: false}">用户注册</x-header>
    <group title="用户信息">
      <!-- <radio fill-mode fill-label="手机号" fill-placeholder=""></radio>
      <radio class="vux-1px-t" fill-mode fill-label="验证码" fill-placeholder=""></radio> -->
      <!-- <address :title="title" :value.sync="value" :list="addressData" placeholder="请选择地址"></address> -->
      <x-input title="用户姓名" placeholder="" :required="true" v-ref:input_1></x-input>
      <address :title="title" :value.sync="value" :list="addressData" placeholder="请选择地址"></address>
        <x-input title="常用邮箱" placeholder="" :required="true" v-ref:input_2></x-input>
    </group>
    <group title="宝宝信息">
      <datetime :value.sync="value1" title="宝宝生日"></datetime>
      <popup-picker title="宝宝性别" :data="list1"></popup-picker>
    </group>
    <div class="pad">
      <x-button type="warn" v-link="'/paying'">确认</x-button>
    </div>
  </div>
</template>

<script>
import {Rater, XHeader, XButton, Flexbox, FlexboxItem, Cell, Group, Switch, Radio, Address, AddressChinaData, XInput, Datetime, PopupPicker,
Picker} from 'vux-components'

import value2name from 'vux/src/filters/value2name'

export default {
  components: {
    Rater,
    XButton,
    XHeader,
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    Switch,
    Radio,
    XInput,
    Address,
    Datetime,
    PopupPicker,
    Picker
  },
  data () {
    return {
      title: '所在城市',
      value: [],
      list1: [['王子', '公主']],
      title2: '手动设定',
      value2: ['广东省', '深圳市', '南山区'],
      value3: ['海南省', '儋州市', '--'],
      addressData: AddressChinaData,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区']
    }
  },
  methods: {
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    getName (value) {
      return value2name(value, AddressChinaData)
    },
    submit () {
      console.log('submit')
    }
  }
}
</script>

<style lang="less">
.fixed-bottom{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding:15px;
  background:rgba(255, 255, 255, 0.5);;
}
.weui_input{
  text-align: right;
  box-sizing: border-box;
  padding-right: 5px;
}
</style>
