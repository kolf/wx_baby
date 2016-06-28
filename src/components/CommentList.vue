<template>
  <div>
    <x-header style="background-color:#f04848" _:left-options="{showBack: false}">评论<a href="#!/commentAdd" class="icon header-edit" slot="right">&#xe608;</a></x-header>
    <div class="discuss_list">
      <a class="discuss_item vux-1px-b" v-for="comment in list" href="#!/commentDateils">
        <div class="discuss_opr">
          <rater :value.sync="comment.like_num" slot="value" :font-size="20" disabled></rater>
        </div>
        <div class="user_info">
          <strong class="nickname">{{comment.name}}</strong>
          <img class="avatar" :src="comment.avatar">
        </div>

        <div class="discuss_message">
          <span class="discuss_status">{{comment.status}}</span>
          <div class="discuss_message_content">{{comment.content}}</div>
        </div>
        <p class="discuss_extra_info">
          <span class="pull-right">{{comment.time}}</span>
          <!-- <a v-if="comment.is_from_me" class="discuss_del js_del" href="javascript:;" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>">删除</a> -->
          <ul class="icon-list">
            <li><span class="icon">&#xe603;</span>8</li>
            <li><span class="icon icon-yuedu">&#xe606;</span>122</li>
          </ul>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
const list = [{
  name: 'Airyland',
  avatar: 'http://placeholder.qiniudn.com/50x50/FF2D55/fff',
  time: '昨天',
  like_num: 4,
  content: '沙发'
}, {
  name: 'Kolf',
  avatar: 'http://placeholder.qiniudn.com/50x50/FF2D55/fff',
  time: '2016-6-21',
  like_num: 3,
  content: '我来解读，此压缩机是友商提供，松下给予技术支持。'
}, {
  name: 'Secret',
  avatar: 'http://placeholder.qiniudn.com/50x50/FF2D55/fff',
  time: '2016-6-2',
  like_num: 5,
  content: '居然没抢到沙发'
}, {
  name: 'Kolf',
  avatar: 'http://placeholder.qiniudn.com/50x50/FF2D55/fff',
  time: '2016-6-21',
  like_num: 3,
  content: '我来解读，此压缩机是友商提供，松下给予技术支持。'
}, {
  name: 'Secret',
  avatar: 'http://placeholder.qiniudn.com/50x50/FF2D55/fff',
  time: '2016-6-2',
  like_num: 5,
  content: '居然没抢到沙发'
}]

import {Rater, XHeader, XButton} from 'vux-components'

export default {
  components: {
    Rater,
    XButton,
    XHeader
  },
  data () {
    return {
      list: list
    }
  }
}
</script>

<style lang="less">
.header-edit{
  font-size: 24px;
  color:#fff;
}
.fixed-bottom{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding:15px;
  background:rgba(255, 255, 255, 0.5);;
}
.discuss_list {
  padding-left:15px;
}

.discuss_item {
  display: block;
  position: relative;
  padding: 10px 15px 10px 60px ;
}

.discuss_item:after {
  content: "\200B";
  display: block;
  height: 0;
  clear: both
}

.discuss_item .user_info {
  min-height: 20px;
  overflow: hidden
}

.discuss_item .nickname {
  display: block;
  font-weight: 400;
  font-style: normal;
  color: #727272;
  width: 9em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal
}

.discuss_item .avatar {
  position: absolute;
  top: 0;
  left: 0;
  top: 15px;
  width: 50px;
  height: 50px;
  background-color: #ccc;
  vertical-align: top;
  margin-top: 0;
  border-radius: 50%;
}

.discuss_item .discuss_message {
  padding:10px 0;
  color: #3e3e3e;
  line-height: 1.4
}

.discuss_item .discuss_extra_info {
  color: #8c8c8c;
  font-size: 12px
}

.discuss_item .discuss_extra_info a {
  margin-left: .5em
}

.discuss_item .discuss_status {
  color: #ff7a21;
  white-space: nowrap
}

.discuss_item .discuss_status i {
  font-style: normal;
  margin-right: 2px
}

.discuss_item .discuss_opr {
  float: right;
  /*margin:0 10px 0 0;*/
}

.icon-list {
  overflow: hidden;

  li{
    float: left;
    line-height: 20px;
    padding-right: 15px;
    font-size: 12px;
    color: #727272;
  }
  .icon{
    font-size: 16px;
    &-yuedu{
      position: relative;
      top:2px;
    }
  }

}
</style>
