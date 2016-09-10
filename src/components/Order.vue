<template>
  <div class="pad-bottom">
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">我的订单</x-header>
    <sticky>
      <tab :animate="false">
        <tab-item :selected="orderType === 'all'" @click="orderTab('all')">全部</tab-item>
        <tab-item :selected="orderType === 'wait'" @click="orderTab('wait')">待支付</tab-item>
        <tab-item :selected="orderType === 'complete'" @click="orderTab('complete')">已完成</tab-item>
      </tab>
    </sticky>
    <div class="sticky-placeholder"></div>
    <div class="pad-top" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <card :header="{title:'待支付'}" :footer="{title:'查看订单',link:'orderdetail'}" @click="goToDetails(order)" v-for="(index, order) in orderList">
        <x-button class="pull-right" slot="header" mini type="primary">去支付</x-button>
        <div slot="content">
          <div class="weui_media_box weui_media_appmsg" v-for="(index, item) in order.EOrderList">
          <div class="weui_media_hd" style="width:100px;height:100px">
            <span class="weui_media_appmsg_thumb"></span>
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">{{item.TicketsName}}</h4>
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
        </div>
      </card>
    </div>
    <x-loader :show="loading.show" :loading="loading.loading" :text="loading.text"></x-loader>
  </div>
</template>

<script>
  import {XHeader, Tab, Card, TabItem, XButton, Sticky} from 'vux-components'
  import XLoader from './Loader'
  import randomN from '../utils/randomN'
  import {orderList} from '../vuex/getters'
  import {queryOrder} from '../vuex/actions'

  export default {
    components: {
      XHeader,
      Card,
      Tab,
      TabItem,
      XButton,
      Sticky,
      XLoader
    },
    vuex: {
      getters: {
        orderList,
        loading: ({loading}) => loading
      },
      actions: {
        queryOrder
      }
    },
    data () {
      return {
        pageIndex: 1
      }
    },
    created () {
      this.group = randomN('group_')
      this.orderType = this.$route.params.orderType
      this.orderQueryStartTime = this.getDay(-7)
      this.orderQueryEndTime = this.getDay()
      this.userId = this.$route.params.userId
      this.getList()
    },
    methods: {
      loadMore () {
        if (!this.loading.loading) {
          let vm = this
          vm.pageIndex++
          this.getList()
        }
      },
      goToDetails (data) {
        console.log(data)
      },
      orderTab (type) {
        this.orderType = type
        this.pageIndex = 1
        this.getList()
      },
      getList (startTime, endTime) {
        this.queryOrder({
          group: this.group,
          orderUserId: this.userId,
          orderQueryStartTime: startTime || this.orderQueryStartTime,
          orderQueryEndTime: endTime || this.orderQueryEndTime,
          orderType: this.orderType,
          pageIndex: this.pageIndex
        })
      },
      getDay (n) {
        n = n || 0
        let date = new Date()
        let day = date.getDate() + n
        date.setDate(day)
        return this.$options.filters.formatTime(date.getTime(), 'yyyy-MM-dd')
      }
    }
  }

</script>

<style lang="less">
  .weui_panel_hd {
    button {
      position: relative;
      top: -5px;
    }
  }
</style>
