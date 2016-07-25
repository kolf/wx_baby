<template>
  <div>
    <x-header style="background-color:#ee5e81" _:left-options="{showBack: false}">个人信息</x-header>
    <div class="weui_cells_title  text-right">
      <span class="icon text-primary">&#xe605;</span>积分：300/8900
    </div>
    <div class="avater">
      <span :style="{backgroundImage: 'url('+user.avatar+')'}"></span>
      <p>{{user.name}}</p>

    </div>

    <group>
      <cell title="手机号" @click="showPhone=true" link="javascript:;" :value="user.phone">
        <span class="icon" slot="icon">&#xe60b;</span>
      </cell>
      <cell title="邮箱" @click="showEmail=true" link="javascript:;" :value="user.email">
        <span class="icon" slot="icon">&#xe60e;</span>
      </cell>
      <address title="所在城市" icon="&#xe610;" :value.sync="user.address" raw-value :list="addressData" hide-district>
      </address>
    </group>

    <group>
      <cell title="宝宝生日" value="2014-3-12">
        <span class="icon" slot="icon">&#xe60c;</span>
      </cell>
      <cell title="宝宝性别" value="小公主">
        <span class="icon" slot="icon">&#xe60d;</span>
      </cell>
    </group>

    <group>
      <cell title="我的订单" link="order">
        <span class="icon" slot="icon">&#xe60f;</span>
      </cell>
    </group>

    <confirm :show.sync="showPhone" title="手机号" cancelText="取消" confirmText="确定" @on-cancel="onCancel" @on-confirm="onConfirm">
      <p style="text-align:center;">修改手机号需要向新的手机进行验证</p>
      <input type="tel" class="modal-input" v-model="user.newPhone" placeholder="请输入新的手机号">
      <x-input placeholder="请输入验证码" class="weui_vcode modal-verify">
        <x-button slot="right" mini plain>发送验证码</x-button>
      </x-input>
    </confirm>

    <confirm :show.sync="showEmail" title="邮箱" cancelText="取消" confirmText="确定" @on-cancel="onCancel" @on-confirm="onConfirm">
      <p style="text-align:center;">请输入修改后的邮箱</p>
      <input type="tel" class="modal-input" v-model="user.email">
    </confirm>
</div>
</template>

<script>
import {XHeader, XInput, Cell, Group, XButton, Confirm, Address, AddressChinaData} from 'vux-components'

import value2name from 'vux/src/filters/value2name'

export default {
  components: {
    XHeader,
    Cell,
    Group,
    Confirm,
    Address,
    AddressChinaData,
    XInput,
    XButton
  },
  data () {
    return {
      user: {
        avatar: 'http://pic.58pic.com/58pic/14/00/69/66858PICNfJ_1024.jpg',
        name: 'Kolf',
        phone: '18611440251',
        email: '13006666666@139.com',
        address: ['北京市', '北京市市辖区']
      },
      addressData: AddressChinaData,
      showVerify: false,
      showPhone: false,
      showEmail: false,
      showCity: false
    }
  },
  methods: {
    getName (value) {
      return value2name(value, AddressChinaData)
    }
  }
}
</script>

<style lang="less">
.avater{
  padding:35px 0 15px;
  text-align:center;
  font-size:0;
  &>span{
    display:inline-block;
    border-radius:50%;
    width:80px;
    height: 0;
    padding-top:80px;
    background:#ccc;
    background-size:cover;
  }
  p{
    font-size: 16px;
    padding:5px 0;
  }
}
.modal-verify{
  padding:6px;
  background:#eee;
  margin-top:10px;
  &:before{
    border:none;
  }
}
.modal-input{
  background:#eee;
  border:none;
  width: 100%;
  padding:10px;
  box-sizing: border-box;
  margin-top:10px;
  font-size: 15px
}
.weui_cell_hd .icon{
  color:#999;
  font-size:20px;
}
</style>
