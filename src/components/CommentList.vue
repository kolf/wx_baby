<template>
  <div>
    <x-header style="background-color:#ee5e81" _:left-options="{showBack: false}">评论<a href="" v-link="'commentAdd'" class="icon header-edit" slot="right">&#xe608;</a></x-header>
    <div class="discuss_list">
      <div class="discuss_item vux-1px-b" v-for="comment in list" id="comment_{{comment.id}}">
        <div class="discuss_opr">
          <rater :value.sync="comment.star_num" slot="value" :font-size="20" disabled></rater>
        </div>
        <div class="user_info">
          <strong class="nickname">{{comment.name}}</strong>
          <span class="lazy-img avatar" :style="{backgroundImage:'url('+comment.avatar+')'}"></span>
        </div>

        <div class="discuss_message">
          <span class="discuss_status">{{comment.status}}</span>
          <div class="discuss_message_content">{{comment.content}}
            <ul class="msg_imgs">
              <li v-for="src in comment.imgs" class="lazy-img" :style="{backgroundImage:'url('+src+')'}" @click="previewer()"></li>
            </ul>
          </div>
        </div>
        <p class="discuss_extra_info">
          <span class="pull-right">{{comment.time}}</span>
          <ul class="icon-list">
            <li><span v-if="comment.is_like" class="icon">&#xe600;</span><span class="icon" v-else>&#xe602;</span>{{comment.like_num}}</li>
            <li><span class="icon icon-yuedu">&#xe606;</span>{{comment.look_num}}</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const list = [{
  id: '97',
  name: 'Airyland',
  avatar: 'https://placekitten.com/50/50',
  time: '昨天',
  like_num: 4,
  content: 'Electron 是一款可以利用 Web技术 开发跨平台桌面应用的框架，最初是 Github 发布的 Atom 编辑器衍生出的 Atom Shell，后更名为 Electron。Electron 提供了一个能通过 JavaScript 和 HTML 创建桌面应用的平台，同时集成 Node 来授予网页访问底层系统的权限',
  look_num: 100,
  star_num: 3, is_like: false,
  imgs: [
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100'
  ]
}, {
  id: '98',
  name: 'Kolf',
  avatar: 'https://placekitten.com/50/50',
  time: '2016-6-21',
  like_num: 4,
  content: '我来解读，此压缩机是友商提供，松下给予技术支持。',
  look_num: 60,
  star_num: 5,
  imgs: [
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100'
  ]
}, {
  id: '99',
  name: 'Secret',
  avatar: 'https://placekitten.com/50/50',
  time: '2016-6-2',
  like_num: 1,
  content: '居然没抢到沙发',
  look_num: 78,
  star_num: 4,
  imgs: [
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100'
  ]
}, {
  id: '100',
  name: 'Kolf',
  avatar: 'https://placekitten.com/50/50',
  time: '2016-6-21',
  like_num: 3,
  content: '我来解读，此压缩机是友商提供，松下给予技术支持。',
  look_num: 100,
  star_num: 4,
  imgs: [
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100'
  ]
}, {
  id: '101',
  name: 'Secret',
  avatar: 'https://placekitten.com/50/50',
  time: '2016-6-2',
  like_num: 5,
  content: '居然没抢到沙发居然没抢到沙发居然没抢到沙发',
  look_num: 100,
  star_num: 3, is_like: false,
  imgs: [
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/100'
  ]
}]

import {Rater, XHeader} from 'vux-components'

export default {
  components: {
    Rater,
    XHeader
  },
  data () {
    return {
      list: list,
      prevImgs: []
    }
  },
  methods: {
    previewer (index, id) {
      console.log(index + '------' + id)
    }
  }
}
</script>

<style lang="less">
.header-edit{
  font-size: 24px;
  color:#fff;
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
  height:0;
  padding-top:50px;
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


.msg_imgs{
  overflow: hidden;
  margin-right:-2%;
  li{
    width:31%;
    margin-right:2%;
    margin-top:2%;
    height:0;
    padding-top:31%;
    float:left;
  }
}
</style>
