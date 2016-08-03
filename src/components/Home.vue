<template>
  <div class="pad-bottom">
    <x-header style="background-color:#ff9d00" :left-options="{showBack: false}"><div v-link="'locations'" class="header-left" name="left">北京<a class="icon">&#xe614;</a></div>首页<a v-link="'me'" class="icon header-icon" slot="right">&#xe612;</a></x-header>
    <swiper :list="projectColumnList" auto height="240px"></swiper>

    <flexbox class="vux-1px-tb text-primary" :gutter="1" >
      <flexbox-item class="vux-1px-r">
        <div class="classify-item">
          <h4>亲子交流</h4>
        <p>大小兼顾</p>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="classify-item trips">
          <h4>亲子出游</h4>
          <p>精彩出行</p>
        </div>
      </flexbox-item>
    </flexbox>
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
      <a class="weui_panel_ft text-center" v-link="'list'">查看更多</a> </div>
    <div class="weui_panel weui_panel_access">
      <div class="weui_panel_hd">亲子出游</div>
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
      <a class="weui_panel_ft text-center" v-link="'list'">查看更多</a> </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Swiper, Divider, Flexbox, FlexboxItem} from 'vux-components'
import {projectColumnList} from '../vuex/getters'
import {getProjectColumnList} from '../vuex/actions'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Swiper,
    Divider,
    Flexbox,
    FlexboxItem
  },
  vuex: {
    getters: {
      projectColumnList: projectColumnList
    },
    actions: {
      getProjectColumnList: getProjectColumnList
    }
  },
  created () {
    this.getProjectColumnList()
  },
  data: function () {
    return {

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
      color: #ff9d00;
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
  .classify{
    &-item{
      background:#fff url(../assets/p1.png) 100% 0px no-repeat;
      background-size:auto 200%;
      padding:10px 15px 35px 15px;
      &.trips{
        background-position: 100% 100%;
      }
      p{
        font-size: 12px;
        color:#999
      }
    }
  }
</style>
