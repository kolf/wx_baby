<template>
  <div>
    <x-header style="background-color:#ee5e81" _:left-options="{showBack: false}">发表评论<a class="icon header-icon" slot="right">&#xe609;</a></x-header>
    <cell title="总体印象" style="overflow-x:hidden">
      <rater :value.sync="data3" slot="value"></rater>
    </cell>
    <div class="edit-box">
      <x-textarea :max="1000" placeholder="说些什么吧! 最多可以输入1000个字符哦..." style="padding:0"></x-textarea>
      <!-- <textarea name="text" placeholder='说些什么吧...' rows="8" cols="40"></textarea> -->
    </div>
    <ul class="upload-list pad">
      <li class="upload-btn"><span class="icon">&#xe611</span></li>
    </ul>

    <!-- <div class="pad">
      <x-button type="warn">发表评论</x-button>
    </div> -->

  </div>
</template>

<script>
import {Rater, XHeader, XButton, Flexbox, FlexboxItem, Cell, Group, XTextarea} from 'vux-components'

export default {
  components: {
    Rater,
    XButton,
    XHeader,
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    XTextarea
  },
  data () {
    return {
      list: [],
      isShowFace: false
    }
  },
  methods: {
    showFace () {
      console.log(1)
    }
  },
  ready () {
    console.log(1)
  }
}
</script>

<style lang="less">
.face{
  &-btn{
    box-sizing: border-box;
    position: fixed;
    left: 0;
    right: 0;
    height: 50px;
    padding:7px 15px;
    bottom:0;
    background:#ccc;
    span{
      font-size: 24px;
    }
  }
}
.weui_textarea_counter{
  padding:0 15px;
  background:#fff
}

.edit{
  &-box{
    height:145px;
    overflow:hidden;
    textarea{
      box-sizing: border-box;
      border:none;
      width: 100%;
      height:120px;
      outline: none;
      padding:15px;
    }
  }
}
.upload{
  &-btn{
    position: relative;
    span{
      position: absolute;
      left: 0;
      top: 0;
      height: 75%;
      width: 100%;
      text-align: center;
      padding-top:25%;
      font-size:20px;
      color:#ccc
    }
  }
  &-list{
    overflow: hidden;
    background:#fff;
    li{
      width:18%;
      height:0;
      padding-top:18%;
      float:left;
      background:#eee;
      margin:1%;
    }
  }

}
</style>
