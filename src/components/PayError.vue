<template>
  <div>
    <!-- <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">支付结果</x-header> -->
    <div class="msg">
    <div class="weui_msg">
        <div class="weui_icon_area"><i class="weui_icon weui_icon_warn icon_big weui_icon_msg"></i></div>
        <div class="weui_text_area">
            <h2 class="weui_msg_title">支付失败</h2>
            <p class="weui_msg_desc">您支付失败，请重新支付</p>
        </div>
        <div class="weui_opr_area">
            <p class="weui_btn_area">
                <a href="javascript:;" class="weui_btn weui_btn_warn">重新支付</a>
            </p>
        </div>
        <div class="weui_extra_area">
            <a href="">查看详情</a>
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
