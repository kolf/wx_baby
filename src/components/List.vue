<style lang="less">

.filter-item {
    padding: 2px 0;
    width: 30%;
    margin-right: 2.5%;
    margin-bottom: 10px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 17px;
    font-size: 14px;
}

.filter-item-selected {
    border-color: #ff9d00;
    background: #ff9d00;
    color: #eee
}

.media-bd-left {
    >span {
        color: #ff9d00;
        float: right;
        font-size: 20px;
    }
    ul {
        overflow: hide;
    }
    li {
        float: left;
        line-height: 20px;
        padding-right: 10px;
        padding-top: 6px;
    }
}

.filter {
    &-box {
        display: none;
        position: fixed;
        left: 0;
        right: 0;
        top: 46px;
        /*height: 400px;*/
        background: #fbf9fe;
        z-index: 110;
        &.active {
            display: block;
        }
        &~.vux-popup-mask {
            top: 46px;
        }
    }
}

</style>

<template>

<div>
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">{{pageTitle}}<a _@click="onFilter" class="icon header-icon" style="display:none" slot="right">&#xe604;</a></x-header>
    <sticky>
        <tab :animate="false">
            <tab-item :selected="projectListRanking === 'signCount'" @click="projectListRanking = 'signCount'">人气优先</tab-item>
            <tab-item :selected="projectListRanking === 'distance'" @click="projectListRanking = 'distance'">距离优先</tab-item>
            <tab-item :selected="projectListRanking === 'projectCost'" @click="projectListRanking = 'projectCost'">价格优先</tab-item>
        </tab>
    </sticky>
    <div class="sticky-placeholder"></div>
    <div class="weui_panel weui_panel_access" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="weui_panel_bd">
            <div class="weui_media_box weui_media_appmsg" v-for="(index, item) in projectList | orderBy projectListRanking" v-link="item.picUri">
                <div class="weui_media_hd" style="width:100px;height:100px">
                    <span class="weui_media_appmsg_thumb" alt="" :src="item.picUrl" :style="{'background-image': 'url('+item.picUrl+')'}"></span>
                </div>
                <div class="weui_media_bd">
                    <h4 class="weui_media_title">{{item.playName}}</h4>
                    <p class="weui_media_desc">活动时间：{{item.projectStartTime | formatTime}} 至 {{item.projectStartTime | formatTime}}</p>
                    <p class="weui_media_desc">活动地点：{{item.activePlace}}</p>
                    <div class="media-bd-left" v-if="this.classify === 'trip'">
                        <span>￥{{item.projectCost}}</span>
                        <ul>
                            <li><span class="icon">&#xe616;</span>{{item.projectCost}}</li>
                            <li><span class="icon">&#xe601;</span>{{item.signCount}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <x-loader :show="loader"></x-loader>
    <!-- <div class="filter-box" :class="{'active': showFilter}">
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
    <a class="vux-popup-mask" :class="{'vux-popup-show': showFilter}" href="javascript:void(0)"></a> -->
</div>

</template>

<script>
import {XHeader, Tab, TabItem, XButton, Divider, Sticky} from 'vux-components'
import XLoader from './Loader'

import {contentList, contentListLoader} from '../vuex/getters'
import {getContentList} from '../vuex/actions'

export default {
  components: {
    XHeader,
    XButton,
    Tab,
    TabItem,
    Divider,
    Sticky,
    XLoader
  },
  vuex: {
    getters: {
      projectList: contentList,
      loader: contentListLoader
    },
    actions: {
      getList: getContentList
    }
  },
  data () {
    return {
      projectListRanking: 'signCount',
      pageIndex: 0,
      pageTitle: ''
    }
  },
  route: {
    data ({to: {params: {classify}}}) {
      this.classify = classify
      this.pageTitle = this.classify === 'trip' ? '亲子出游' : '亲子交流'
      console.log(this.pageTitle)
      this.getList({
        url: classify
      })
    }
  },
  methods: {
    ranking (type) {
      this.projectListRanking = type
    },
    loadMore () {
      if (!this.loader) {
        let _this = this
        _this.pageIndex++
        this.getList({
          url: _this.classify,
          pageIndex: _this.pageIndex
        })
      }
    }
  }
}

</script>
