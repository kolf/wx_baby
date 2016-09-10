<template>
  <div class="app-inner">
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">个人信息</x-header>
      <div style="background-color:#ff9d00;color:#eee">
        <div class="avater">
          <span v-if="userInfo.userHeadImg" :style="{backgroundImage: 'url('+userInfo.userHeadImg+')'}"></span>
          <span v-else></span>
          <p>{{userInfo.userRealName}}</p>
        </div>
      </div>
      <flexbox class="bg-white user-box" :gutter="0">
        <flexbox-item>
          <div class="item text-center" v-link="{name: 'order', params: {orderType: 'all', userId: userInfo.userId}}">
            <span class="icon" slot="icon">&#xe607;</span>
            <div class="text">全部订单</div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="item text-center" v-link="{name: 'order', params: {orderType: 'wait', userId: userInfo.userId}}">
            <span class="icon" slot="icon">&#xe613;</span>
            <div class="text">待支付订单</div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="item text-center" v-link="{name: 'order', params: {orderType: 'complete', userId: userInfo.userId}}">
            <span class="icon" slot="icon">&#xe619;</span>
            <div class="text">已完成订单</div>
          </div>
        </flexbox-item>
      </flexbox>
    <group title="联系方式">
      <cell title="手机号" @click="showPhone=true" link="javascript:;" :value="userInfo.userMobile">
        <span class="icon" slot="icon">&#xe60b;</span>
      </cell>
      <cell title="邮箱" @click="showEmail=true" link="javascript:;" :value="userInfo.userEmail">
        <span class="icon" slot="icon">&#xe60e;</span>
      </cell>
      <address title="所在城市" icon="&#xe610;" :value="userInfo.address" raw-value :list="addressData" hide-district>
      </address>
    </group>
    <div class="weui_cells_title">我的宝宝<div class="pull-right">添加</div></div>
    <div class="weui_cells">
      <cell :title="kid.kidsName" is-link :inline-desc="kid.kidsName" v-for="kid in userInfo.kidsList">
      </cell>
    </div>

    <!-- <group>
      <cell title="我的订单" v-link="{name: 'order'}">
        <span class="icon" slot="icon">&#xe60f;</span>
      </cell>
    </group> -->

    <confirm :show.sync="showPhone" title="手机号" @on-cancel="onCancel()" @on-confirm="onConfirm()">
      <p style="text-align:center;">修改手机号需要向新的手机进行验证</p>
      <x-input type="tel" class="modal-input" :value.sync="userInfo.newPhone" is-type="china-mobile" placeholder="请输入新的手机号"></x-input>
      <x-input placeholder="请输入验证码" class="weui_vcode modal-verify">
        <captcha-btn :phone.sync="userInfo.newPhone" :group="group"></captcha-btn>
      </x-input>
    </confirm>

    <confirm :show.sync="showEmail" title="邮箱" @on-cancel="onCancel()" @on-confirm="onConfirm()">
      <p style="text-align:center;">请输入修改后的邮箱</p>
      <x-input class="modal-input" placeholder="请输入邮箱地址" :value.sync="userInfo.newEmail" is-type="email"></x-input>
    </confirm>
</div>
</template>

<script>
import {XHeader, XInput, Cell, Group, XButton, Confirm, Address, AddressChinaData, Flexbox, FlexboxItem} from 'vux-components'
import CaptchaBtn from './CaptchaBtn'
import value2name from 'vux/src/filters/value2name'
import randomN from '../utils/randomN'
import {queryUserInfos} from '../vuex/actions'

export default {
  components: {
    XHeader,
    Cell,
    Group,
    Confirm,
    Address,
    AddressChinaData,
    XInput,
    XButton,
    CaptchaBtn,
    Flexbox,
    FlexboxItem
  },
  vuex: {
    getters: {
      userInfo: ({user}) => user.userInfo
    },
    actions: {
      queryUserInfos
    }
  },
  beforeCompile () {

  },
  created () {
    this.group = randomN('group_')
    this.userWeChat = this.$route.params.userWeChat
    this.queryUserInfos({
      group: this.group,
      userWeChat: this.userWeChat
    })
  },
  data () {
    return {
      addressData: AddressChinaData,
      showPhone: false,
      showEmail: false
    }
  },
  methods: {
    getName (value) {
      return value2name(value, AddressChinaData)
    },
    onCancel () {
      console.log('cancal')
    },
    onConfirm () {
      console.log('onConfirm')
    }
  }
}
</script>

<style lang="less">
.avater{
  padding:35px 0 25px;
  text-align:center;
  font-size:0;
  &>span{
    display:inline-block;
    border-radius:50%;
    width:80px;
    height: 0;
    padding-top:80px;
    background:#ccc url(../assets/avatar.jpg);
    background-size:cover;
  }
  p{
    font-size: 16px;
    padding:5px 0;
  }
}
.modal-verify{
  background:#eee;
  margin-top:10px;
  &:before{
    border:none;
  }
  .weui_cell_ft{
    padding:6px;
  }
}
.modal-input{
  background:#eee;
  padding:8px 6px;
  margin-top:10px;
  &:before{
    width: 0
  }
  input{
    text-align:center;
  }
}
.weui_cell_hd .icon{
  color:#999;
  font-size:20px;
}
.user{
  &-box{
    padding:8px 0 12px;
    color: #999;
    .text{
      color:#333;
      font-size: 12px;
      margin-top: -2px
    }
    .icon{
      font-size:26px
    }
  }
}
</style>
