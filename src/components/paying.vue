<template>
  <div style="padding-bottom:60px">
    <x-header style="background-color:#ee5e81" _:left-options="{showBack: false}">立即购买</x-header>

     <div class="weui_media_box weui_media_appmsg" style='background:#fff;overflow:hidden'>
         <div class="weui_media_hd">
           <span class="weui_media_appmsg_thumb"></span>
         </div>
         <div class="weui_media_bd">
           <h4 class="weui_media_title">天涯海角任我游</h4>
           <p class="weui_media_desc">报名日期：2016-6-1 至 2016-8-30</p>
           <p class="weui_media_desc">活动地点：大兴区/北京</p>
         </div>
     </div>
     <div class="weui_cells_title">出行日期</div>
     <div class="pad-left">
       <checker :value.sync="activityTime" default-item-class="checker-item" selected-item-class="checker-item-selected">
         <checker-item v-for="i in [1, 2, 3]" :value="i">2016-7-{{i*3}}</checker-item>
       </checker>
     </div>

     <group title="选择商品">
     <x-number :min="0" title="亲子双人套餐" :value="1">
       <span slot="content" class="weui_cell_bd_center">￥100</span>
     </x-number>
     <x-number :min="0" title="家庭套餐">
       <span slot="content" class="weui_cell_bd_center">￥200</span>
     </x-number>
     </group>

    <group title="优惠">
      <switch title="使用积分抵扣现金" :value="true">
        <p class="vux-label-desc" slot="inlineDesc">本次可用600积分, 抵扣 <span class="text-primary">6</span> 元现金</p>
      </switch>
    </group>

     <group ——title="联系人信息">
       <ul class="list-text">
         <li>用户名：<span>Kolf</span></li>
         <li>手机号：<span>18611441234</span></li>
         <li>订单编号：<span>201606121234123123111</span></li>
         <li>下单时间：<span>2016-6-12 14:11</span></li>
       </ul>
     </group>

    <div class="fixed-bottom fixed-bottom-pay">
      <p>支付金额：<span class="text-primary text-lg">￥800</span></p>
      <span class="btn" v-link="'/paySuccess'">去支付</span>
    </div>
  </div>
</template>

<script>
import {Rater, XHeader, XButton, Flexbox, FlexboxItem, Cell, Group, Switch, XNumber, Checker, CheckerItem} from 'vux-components'

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
    XNumber,
    Checker,
    CheckerItem
  },
  data () {
    return {
      list: [],
      activityTime: 1
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
  background:rgba(255, 255, 255, 0.5);
}
.fixed-bottom-pay{
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0 !important;
  height: 46px;
  line-height: 46px;
  border-top:2px solid #ee5e81;
  p{
    width:180px;
    padding:0 15px;
    background-color: #fff;
  }
  .btn{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background:#ee5e81;

    color:#fff;
    text-align: center;
  }
}
.checker-item {
  width: 100px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 4px 4px 10px 0;
}
.checker-item-selected {
  border-color: #ff4a00;
}
.weui_cell_bd_center{
  float: right;
  padding-right: 15px;
  color:red;
}
</style>
