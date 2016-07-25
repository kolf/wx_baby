<template>
  <div>
    <!-- <x-header style="background-color:#ee5e81" _:left-options="{showBack: false}">支付结果</x-header> -->
    <div class="msg">
    <div class="weui_msg">
        <div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
        <div class="weui_text_area">
            <h2 class="weui_msg_title">支付成功</h2>
            <p class="weui_msg_desc">你已成功支付1000元</p>
        </div>
        <div class="weui_opr_area">
            <p class="weui_btn_area">
                <a href="javascript:;" v-link="'/'" style="background-color:#09bb07" class="weui_btn weui_btn_primary">确定</a>
            </p>
        </div>
        <div class="weui_extra_area">
            <a href="" v-link="'orderdetail'">查看详情</a>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import {XHeader, Cell, Group} from 'vux-components'

export default {
  components: {
    XHeader,
    Cell,
    Group
  },
  data () {
    return {
      user: {
        avatar: 'http://pic.58pic.com/58pic/14/00/69/66858PICNfJ_1024.jpg',
        name: 'Kolf'
      }
    }
  },
  methods: {
    submit () {
      console.log('submit')
    }
  }
}
</script>

<style lang="less">

</style>
