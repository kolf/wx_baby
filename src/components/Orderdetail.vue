<template>
  <div>
    <x-header style="background-color:#ee5e81" _:left-options="{showBack: false}">查看订单<a slot="right">取消订单</a></x-header>

    <card :header="{title:'待支付'}">
      <x-button class="pull-right" slot="header" mini type="primary">去支付</x-button>
      <div slot="content" class="weui_media_box weui_media_appmsg">
         <div class="weui_media_hd">
           <span class="weui_media_appmsg_thumb"></span>
         </div>
         <div class="weui_media_bd">
           <h4 class="weui_media_title">天涯海角任我游</h4>
           <p class="weui_media_desc">亲子双人套餐： ￥300 <span class="pull-right">x1</span></p>
           <p class="weui_media_desc">家庭套餐： ￥100 <span class="pull-right">x1</span></p>
           <p class="weui_media_desc">
             积分优惠：<span class="pull-right">-￥5</span>
           </p>
           <p class="weui_media_desc">
             实付金额：<span class="pull-right text-primary text-lg">￥400</span>
           </p>
         </div>
     </div>
   </card>
   <group title="用户信息">
     <ul class="list-text">
       <li>用户名：<span>Kolf</span></li>
       <li>手机号：<span>18611441234</span></li>
       <li>活动地点：<span>北京/朝阳</span></li>
       <li>活动积分：<span>100</span></li>
       <li>出行日期：<span>2016-7-1,2016-7-10</span></li>
     </ul>
   </group>
   <group title="订单信息">
     <ul class="list-text">
       <li>订单编号：<span>201606121234123123111</span></li>
       <li>下单时间：<span>2016-6-12 14:11</span></li>
       <li>订单状态：<span class="text-primary">待付款</span></li>
     </ul>
   </group>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Panel, Tab, Card, TabItem, XButton} from 'vux-components'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Panel,
    Card,
    Tab,
    TabItem,
    XButton
  },
  data: function () {
    return {
      demo1: '全部'
    }
  }
}
</script>

<style lang="less">

</style>
