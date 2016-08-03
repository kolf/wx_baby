<template>
  <div>
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">评论详情</x-header>
    <div class="discuss_list">
      <div class="discuss_item" v-for="comment in list" href="#!/commentDateils">
        <div class="discuss_opr">
          <rater :value.sync="comment.like_num" slot="value" :font-size="20" disabled></rater>
        </div>
        <div class="user_info">
          <strong class="nickname">{{comment.name}}</strong>
          <img class="avatar" :src="comment.avatar">
        </div>
        <div class="discuss_message">
          <span class="discuss_status">{{comment.status}}</span>
          <div class="discuss_message_content">{{comment.content}}
            <flexbox style="padding-top:15px">
              <flexbox-item><div class="comment-pictrue"><img src="http://placeholder.qiniudn.com/200x200" alt="" /></div></flexbox-item>
              <flexbox-item><div class="comment-pictrue"><img src="http://placeholder.qiniudn.com/200x200" alt="" /></div></flexbox-item>
              <flexbox-item><div class="comment-pictrue"><img src="http://placeholder.qiniudn.com/200x200" alt="" /></div></flexbox-item>
            </flexbox>
            <flexbox>
              <flexbox-item><div class="comment-pictrue"><img src="http://placeholder.qiniudn.com/200x200" alt="" /></div></flexbox-item>
              <flexbox-item><div class="comment-pictrue"><img src="http://placeholder.qiniudn.com/200x200" alt="" /></div></flexbox-item>
              <flexbox-item><div class="comment-pictrue"><img src="http://placeholder.qiniudn.com/200x200" alt="" /></div></flexbox-item>
            </flexbox>
            <flexbox>
              <flexbox-item><div class="comment-pictrue"><img src="http://placeholder.qiniudn.com/200x200" alt="" /></div></flexbox-item>
              <flexbox-item><div class="comment-pictrue"><img src="http://placeholder.qiniudn.com/200x200" alt="" /></div></flexbox-item>
              <flexbox-item><div class="comment-pictrue"><img src="http://placeholder.qiniudn.com/200x200" alt="" /></div></flexbox-item>
            </flexbox>
          </div>
        </div>
        <p class="discuss_extra_info">
          <span class="pull-right">{{comment.time}}</span>
          <!-- <a v-if="comment.is_from_me" class="discuss_del js_del" href="javascript:;" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>">删除</a> -->
          <ul class="icon-list">
            <li><span class="icon">&#xe603;</span>8</li>
            <li><span class="icon icon-yuedu">&#xe606;</span>122</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const list = [{
  name: 'Airyland',
  avatar: 'http://placeholder.qiniudn.com/50x50/FF2D55/fff',
  time: '昨天',
  like_num: 4,
  content: 'Electron 是一款可以利用 Web技术 开发跨平台桌面应用的框架，最初是 Github 发布的 Atom 编辑器衍生出的 Atom Shell，后更名为 Electron。Electron 提供了一个能通过 JavaScript 和 HTML 创建桌面应用的平台，同时集成 Node 来授予网页访问底层系统的权限。目前常见的有NW、heX、Electron，可以打造桌面应用。'
}]

import {Rater, XHeader, XButton, Flexbox, FlexboxItem} from 'vux-components'

export default {
  components: {
    Rater,
    XButton,
    XHeader,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      list: list
    }
  }
}
</script>

<style lang="less">


</style>
