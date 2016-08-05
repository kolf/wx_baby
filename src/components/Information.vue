<template>
  <div>
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">用户注册</x-header>
    <group title="用户信息">
      <x-input title="用户昵称" class="input-right" placeholder="请输入2-10位的汉字或字母" :require="true" v-ref:input_1></x-input>
      <x-input title="常用邮箱" class="input-right" placeholder="请输入你的邮箱" :require="true" v-ref:input_2></x-input>
      <address title="所在城市" :value.sync="value" :list="addressData" raw-value hide-district placeholder="请选择地址"></address>
    </group>
    <group title="宝宝信息">
      <datetime title="宝宝生日"></datetime>
      <popup-picker title="宝宝性别" :data="list1"></popup-picker>
    </group>
    <div class="pad">
      <x-button type="primary" v-link="'paying'">确认</x-button>
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
      value4: ['北京市', '北京市市辖区'],
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
.input-right{
  input{
    text-align:right;
    padding-right: 5px;
    box-sizing:border-box;
  }
}
</style>
