<template>
  <div>
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">我的订单</x-header>
    <sticky>
    <tab :animate="false">
      <tab-item active-class="active-1" :selected="demo1 === '全部'" @click="demo1 = '全部'">全部</tab-item>
      <tab-item active-class="active-2" :selected="demo1 === '待支付'" @click="demo1 = '待支付'">待支付</tab-item>
      <tab-item active-class="active-3" :selected="demo1 === '已完成'" @click="demo1 = '已完成'">已完成</tab-item>
    </tab>
  </sticky>
  <div class="sticky-placeholder"></div>
    <card :header="{title:'待支付'}" :footer="{title:'查看订单',link:'orderdetail'}">
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
    <card :header="{title:'已完成'}" :footer="{title:'查看订单',link:'orderdetail'}">
      <x-button class="pull-right" slot="header" mini type="primary">说些什么</x-button>
     <div slot="content" class="weui_media_box weui_media_appmsg">
         <div class="weui_media_hd">
           <span class="weui_media_appmsg_thumb"></span>
         </div>
         <div class="weui_media_bd">
           <h4 class="weui_media_title">天涯海角任我游</h4>
           <p class="weui_media_desc">亲子双人套餐： ￥300 <span class="pull-right">x1</span></p>
           <p class="weui_media_desc">
             积分优惠：<span class="pull-right">-￥5</span>
           </p>
           <p class="weui_media_desc">
             实付金额：<span class="pull-right text-primary text-lg">￥400</span>
           </p>
         </div>
     </div>
   </card>
   <card :header="{title:'待支付'}" :footer="{title:'查看订单',link:'orderdetail'}">
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
   <card :header="{title:'已完成'}" :footer="{title:'查看订单',link:'orderdetail'}">
     <x-button class="pull-right" slot="header" mini type="primary">说些什么</x-button>
    <div slot="content" class="weui_media_box weui_media_appmsg">
        <div class="weui_media_hd">
          <span class="weui_media_appmsg_thumb"></span>
        </div>
        <div class="weui_media_bd">
          <h4 class="weui_media_title">天涯海角任我游</h4>
          <p class="weui_media_desc">亲子双人套餐： ￥300 <span class="pull-right">x1</span></p>
          <p class="weui_media_desc">
            积分优惠：<span class="pull-right">-￥5</span>
          </p>
          <p class="weui_media_desc">
            实付金额：<span class="pull-right text-primary text-lg">￥400</span>
          </p>
        </div>
    </div>
  </card>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Panel, Tab, Card, TabItem, XButton, Sticky} from 'vux-components'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Panel,
    Card,
    Tab,
    TabItem,
    XButton,
    Sticky
  },
  data: function () {
    return {
      demo1: '全部'
    }
  }
}
</script>

<style lang="less">
  .weui_panel_hd{
    button{
      position: relative;
      top:-5px;
    }
  }
</style>
