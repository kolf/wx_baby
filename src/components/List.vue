<template>
  <div>
    <x-header style="background-color:#f04848" _:left-options="{showBack: false}">列表</x-header>
    <tab :animate="false">
      <tab-item active-class="active-1" :selected="demo1 === '热度优先'" @click="demo1 = '热度优先'">热度优先</tab-item>
      <tab-item active-class="active-2" :selected="demo1 === '价格优先'" @click="demo1 = '价格优先'">价格优先</tab-item>
      <tab-item active-class="active-3" :selected="demo1 === '筛选'" @click="demo1 = '筛选'">筛选</tab-item>
    </tab>
    <div class="weui_panel weui_panel_access">
      <div class="weui_panel_bd">
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
        <a class="weui_media_box weui_media_appmsg" href="#!/details">
          <div class="weui_media_hd" style="width:80px;height:80px">
            <img class="weui_media_appmsg_thumb" alt="" src="http://placeholder.qiniudn.com/80x80/f04848/ffffff">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">趁着夏天还没有过去，狗狗还可以在户外游</h4>
            <p class="weui_media_desc">活动时间：2016-6-1 至 2016-8-30</p>
            <p class="weui_media_desc">活动地点：大兴区/北京</p>
            <div class="media-bd-left">
                <span>￥128</span>
                <ul>
                  <li><span class="icon">&#xe600;</span>2</li>
                  <li><span class="icon">&#xe601;</span>10</li>
                </ul>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Swiper, Panel, Tab, TabItem} from 'vux-components'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Swiper,
    Panel,
    Tab,
    TabItem
  },
  data: function () {
    return {
      demo1: '价格优先',
      slide: [{
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400385458&ampidx=1&ampsn=78f6b8d99715384bdcc7746596d88359&ampscene=19#wechat_redirect',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400160890&ampidx=1&ampsn=29ef02af25793a11a3f6aec92bfb46c1&ampscene=19#wechat_redirect',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400094682&ampidx=1&ampsn=8231a2053b772b2108784fccc254d28c&ampscene=19#wechat_redirect',
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
  @import '~vux/dist/vux.css';

  .media-bd-left{

    >span{
      color: red;
      float: left;
      font-size: 20px;
    }
    ul{
      overflow:hide;
      float:right;
    }
    li{
      float:left;
      line-height: 20px;
      padding-right: 10px;
      padding-top:6px;
    }
  }
</style>
