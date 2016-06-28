<template>
  <div>
    <x-header style="background-color:#f04848" _:left-options="{showBack: false}">用户注册</x-header>
    <group title="用户注册即代表同意XX协议">
      <!-- <radio fill-mode fill-label="手机号" fill-placeholder=""></radio>
      <radio class="vux-1px-t" fill-mode fill-label="验证码" fill-placeholder=""></radio> -->
      <!-- <address :title="title" :value.sync="value" :list="addressData" placeholder="请选择地址"></address> -->
      <x-input title="手机号">
        <x-button slot="right" mini plain v-ref:input>发送验证码</x-button>
      </x-input>
      <x-input title="验证码" placeholder="" :required="true" v-ref:input02></x-input>
    </group>
    <div class="pad">
      <x-button type="warn" v-link="'/information'">下一步</x-button>
    </div>
  </div>
</template>

<script>
import {Rater, XHeader, XButton, Flexbox, FlexboxItem, Cell, Group, Switch, Radio, Address, AddressChinaData, XInput} from 'vux-components'

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
    Address
  },
  data () {
    return {
      title: '所在城市',
      value: [],
      title2: '手动设定',
      value2: ['广东省', '深圳市', '南山区'],
      value3: ['海南省', '儋州市', '--'],
      addressData: AddressChinaData,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区']
    }
  },
  methods: {
    next () {
      console.log(1)
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
</style>
