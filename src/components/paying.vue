<template>
  <div style="padding-bottom:60px">
    <x-header style="background-color:#f04848" _:left-options="{showBack: false}">立即购买</x-header>
    <group title="订单信息">
      <cell title="产品名称" value="九寨沟五日游《亲子之旅》"></cell>
      <cell title="单价" value="￥1500"></cell>
      <x-number title="数量"></x-number>
      <cell title="总价" value="￥4500"></cell>
      <switch title="使用积分抵扣现金" inline-desc="本次可用600积分, 抵扣6元现金" :value="true"></switch>
    </group>
  <group title="联系人信息">
    <ul class="pad list-v">
      <li>用户名： 一起赢 13000000010</li>
      <li>订单编号：201606121234123123111</li>
      <li>下单时间：2016-6-12 14:11</li>
    </ul>
  </group>
  <ul class="pad pay-list">
    <li>优惠金额：<span>-6.00</span></li>
    <li>实际支付：<span class="pay-text">4030.00</span></li>
  </ul>
    <div class="fixed-bottom">
      <x-button type="warn">确认支付</x-button>
    </div>
  </div>
</template>

<script>
import {Rater, XHeader, XButton, Flexbox, FlexboxItem, Cell, Group, Switch, XNumber} from 'vux-components'

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
    XNumber
  },
  data () {
    return {
      list: []
    }
  }
}
</script>

<style lang="less">
.list{
  &-v{
    li{
      padding:5px 0;
    }
  }
}
.pay{
  &-text{
    font-size: 2.4em;
    color:#f04848;
  }
  &-list{
    li{
      padding:5px 0;
      span{
        float: right;

      }
    }
  }
}
.fixed-bottom{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding:15px;
  background:rgba(255, 255, 255, 0.5);;
}
</style>
