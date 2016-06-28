<template>
  <div>
    <x-header style="background-color:#f04848" _:left-options="{showBack: false}">发表评论<span class="icon header-publish" slot="right">&#xe609;</span></x-header>
    <cell title="总体印象" style="overflow-x:hidden">
      <rater :value.sync="data3" slot="value"></rater>
    </cell>
    <div class="edit-box">
      <x-textarea :max="1000" placeholder="说些什么吧! 最多可以输入1000个字符哦..." style="padding:0"></x-textarea>
      <!-- <textarea name="text" placeholder='说些什么吧...' rows="8" cols="40"></textarea> -->
    </div>
    <ul class="updata-list pad">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <!-- <div class="pad">
      <x-button type="warn">发表评论</x-button>
    </div> -->
    <div class="face-box">
      <div class="face-btn hide"><span class="icon">&#xe60a;</span></div>
      <div class="face-list">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
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
    let oText = document.querySelector('textarea')
    let oBtn = document.querySelector('.face-btn')

    oText.onblur = (ev) => {
      oBtn.classList.add('hide')
    }

    oText.onfocus = (ev) => {
      oBtn.classList.remove('hide')
    }

    oBtn.onclick = (ev) => {
      oText.focus()
    }
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
.header{
  &-publish{
    position:relative;
    top:-2px;
    color:#fff;
    font-size: 24px;
  }
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
.updata-list{
  overflow: hidden;
  background:#fff;
  li{
    width:18%;
    height:0;
    padding-top:18%;
    float:left;
    background:#ccc;
    margin:1%;
  }
}
</style>
