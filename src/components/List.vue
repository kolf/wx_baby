<template>
  <div :class="{'fixed-header': showFilter}">
    <x-header style="background-color:#ee5e81" _:left-options="{showBack: false}">列表<a @click="onFilter" class="icon header-icon" slot="right">&#xe604;</a></x-header>
    <sticky><tab :animate="false">
      <tab-item active-class="active-3" :selected="demo1 === '最新活动'" @click="demo1 = '最新活动'">最新活动</tab-item>
      <tab-item active-class="active-1" :selected="demo1 === '热度优先'" @click="demo1 = '热度优先'">热度优先</tab-item>
      <tab-item active-class="active-2" :selected="demo1 === '价格优先'" @click="demo1 = '价格优先'">价格优先</tab-item>
    </tab>
  </sticky>
  <div class="sticky-placeholder"></div>
    <div class="weui_panel weui_panel_access">
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
    </div>

    <div class="filter-box" :class="{'active': showFilter}">
      <div class="pad-top">
        <divider>宝宝年龄</divider>
      </div>
      <div style="padding:5px 0 5px 15px">
        <checker :value.sync="filter.ageSelected" default-item-class="filter-item" selected-item-class="filter-item-selected">
          <checker-item v-for="item in filter.age" :value="item.name">{{item.name}}</checker-item>
        </checker>
      </div>
      <divider>价格区间</divider>
    <div style="padding:5px 0 5px 15px">
      <checker :value.sync="filter.priceSelected" default-item-class="filter-item" selected-item-class="filter-item-selected">
        <checker-item v-for="item in filter.price" :value="item.name">{{item.name}}</checker-item>
      </checker>
    </div>

          <div class="pad bg-white">
            <x-button type="primary">确定</x-button>
          </div>
    </div>
    <a class="vux-popup-mask" :class="{'vux-popup-show': showFilter}" href="javascript:void(0)"></a>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Swiper, Panel, Tab, TabItem, Checker, CheckerItem, XButton, Divider, Sticky} from 'vux-components'

export default {
  components: {
    XHeader,
    XButton,
    Group,
    Cell,
    Swiper,
    Panel,
    Tab,
    TabItem,
    Checker,
    CheckerItem,
    Divider,
    Sticky
  },
  methods: {
    onFilter () {
      console.log(this.showFilter)
      this.showFilter = !this.showFilter
    }
  },
  data: function () {
    return {
      showFilter: false,
      filter: {
        ageSelected: '不限',
        priceSelected: '不限',
        age: [{
          id: '0',
          name: '不限'
        }, {
          id: '1',
          name: '3-4岁'
        }, {
          id: '2',
          name: '5-6岁'
        }, {
          id: '3',
          name: '7-9岁'
        }, {
          id: '4',
          name: '10岁以上'
        }],
        price: [{
          id: '0',
          name: '不限'
        }, {
          id: '1',
          name: '100以下'
        }, {
          id: '2',
          name: '100-300元'
        }, {
          id: '3',
          name: '300-500元'
        }, {
          id: '4',
          name: '500-1000元'
        }, {
          id: '5',
          name: '1000以上'
        }]
      },
      demo1: '最新活动',
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
.filter-item{
  padding:2px 0;
  width:30%;
  margin-right:2.5%;
  margin-bottom: 10px;
  text-align: center;
  border:1px solid #ccc;
  border-radius:17px;
  font-size: 14px;
}
.filter-item-selected{
  border-color:#ee5e81;
  background: #ee5e81;
  color:#eee
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
    }
  }

  .filter{
    &-box{
      display:none;
      position: fixed;
      left: 0;
      right: 0;
      top: 46px;
      /*height: 400px;*/
      background:#fbf9fe;
      z-index: 110;
      &.active{
        display: block;
      }
      &~.vux-popup-mask{
        top:46px;
      }
    }
  }
</style>
