<template>
  <div>
    <x-header style="background-color:#ee5e81" :left-options="{showBack: false}"><div v-link="'locations'" class="header-left" name="left">北京<a class="icon">&#xe614;</a></div>首页<a v-link="'me'" class="icon header-icon" slot="right">&#xe612;</a></x-header>
    <swiper :list="slide" auto></swiper>
    <div class="weui_panel weui_panel_access">
      <div class="weui_panel_hd">亲子交流</div>
      <div class="weui_panel_bd">
        <a class="weui_media_box weui_media_appmsg" v-link="'details'">
          <div class="weui_media_hd" style="width:100px;height:100px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe616;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" v-link="'details'">
          <div class="weui_media_hd" style="width:100px;height:100px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe616;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" v-link="'details'">
          <div class="weui_media_hd" style="width:100px;height:100px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe616;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" v-link="'details'">
          <div class="weui_media_hd" style="width:100px;height:100px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe616;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" v-link="'details'">
          <div class="weui_media_hd" style="width:100px;height:100px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe616;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
      </div>
      <a class="weui_panel_ft" v-link="'list'">查看更多</a> </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Swiper, Panel} from 'vux-components'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Swiper,
    Panel
  },
  data: function () {
    return {
      slide: [{
        url: 'me',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'me',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'me',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg',
        title: '播下茶籽，明春可发芽？'
      }],
      list: [{
        src: 'http://placeholder.qiniudn.com/100x100/f04848/ffffff',
        title: '趁着夏天还没有过去，狗狗还可以在户外游',
        desc: '活动时间：2016-6-1 至 2016-8-30',
        url: '#'
      }, {
        src: 'http://placeholder.qiniudn.com/100x100/f04848/ffffff',
        title: '标题二',
        desc: '活动时间：2016-6-1 至 2016-8-30',
        url: '#'
      }]
    }
  }
}
</script>

<style lang="less">
.header{
  &-left{
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    bottom:0;
    padding-left:15px;
    line-height:46px;
    font-size: 16px;
    .icon{
      margin-left:5px;
    }
  }
}
  .media-bd-left{
    >span{
      color: red;
      float: right;
      font-size: 20px;
    }
    ul{
      overflow:hide;
    }
    li{
      float:left;
      line-height: 20px;
      padding-right: 10px;
      padding-top:6px;
      color:#999;
      font-size:13px;
    }
  }
</style>
