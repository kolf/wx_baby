<template>
  <div class="pad-bottom">
    <x-header style="background-color:#ff9d00" :left-options="{showBack: false}"><div v-link="'locations'" class="header-left" name="left">北京<a class="icon">&#xe614;</a></div>首页<a v-link="'me'" class="icon header-icon" slot="right">&#xe612;</a></x-header>
    <swiper :list="projectColumnList" auto height="240px"></swiper>

    <flexbox class="text-primary" :gutter="1" >
      <flexbox-item class="vux-1px-r">
        <div class="classify-item" v-link="{name: 'list', params: {classify: 'interact'}}">
          <h4>亲子交流</h4>
        <p>大小兼顾</p>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="classify-item trips" v-link="{name: 'list', params: {classify: 'trip'}}">
          <h4>亲子出游</h4>
          <p>精彩出行</p>
        </div>
      </flexbox-item>
    </flexbox>
    <x-loader :show="!loader"></x-loader>
    <div class="weui_panel weui_panel_access" v-if="loader">
      <div class="weui_panel_hd">亲子交流</div>
      <div class="weui_panel_bd">
        <div class="weui_media_box weui_media_appmsg" v-for="(index, item) in projectTripList | orderBy projectListRanking" v-link="item.picUri">
            <div class="weui_media_hd" style="width:100px;height:100px">
                <span class="weui_media_appmsg_thumb" alt="" :src="item.picUrl" :style="{'background-image': 'url('+item.picUrl+')'}"></span>
            </div>
            <div class="weui_media_bd">
                <h4 class="weui_media_title">{{item.playName}}</h4>
                <p class="weui_media_desc">活动时间：{{item.projectStartTime | formatTime}} 至 {{item.projectStartTime | formatTime}}</p>
                <p class="weui_media_desc">活动地点：{{item.activePlace}}</p>

            </div>
        </div>
      </div>
      <a class="weui_panel_ft text-center" v-link="{name: 'list', params: {classify: 'interact'}}">查看更多</a>
    </div>
    <div class="weui_panel weui_panel_access" v-if="loader">
      <div class="weui_panel_hd">亲子出游</div>
      <div class="weui_panel_bd">
        <div class="weui_media_box weui_media_appmsg" v-for="(index, item) in projectInteractList | orderBy projectListRanking" v-link="item.picUri">
            <div class="weui_media_hd" style="width:100px;height:100px">
                <span class="weui_media_appmsg_thumb" alt="" :src="item.picUrl" :style="{'background-image': 'url('+item.picUrl+')'}"></span>
            </div>
            <div class="weui_media_bd">
                <h4 class="weui_media_title">{{item.playName}}</h4>
                <p class="weui_media_desc">活动时间：{{item.projectStartTime | formatTime}} 至 {{item.projectStartTime | formatTime}}</p>
                <p class="weui_media_desc">活动地点：{{item.activePlace}}</p>
                <div class="media-bd-left">
                    <span>￥{{item.projectCost}}</span>
                    <ul>
                        <li><span class="icon">&#xe616;</span>{{item.projectCost}}</li>
                        <li><span class="icon">&#xe601;</span>{{item.signCount}}</li>
                    </ul>
                </div>
            </div>
        </div>

      </div>
      <a class="weui_panel_ft text-center" v-link="{name: 'list', params: {classify: 'trip'}}">查看更多</a> </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Swiper, Divider, Flexbox, FlexboxItem} from 'vux-components'
import {projectColumnList, projectTripList, projectInteractList, homeLoader} from '../vuex/getters'
import {getProjectColumnList, getProjectTripList, getProjectInteractList} from '../vuex/actions'
import XLoader from './Loader'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Swiper,
    Divider,
    Flexbox,
    FlexboxItem,
    XLoader
  },
  vuex: {
    getters: {
      projectColumnList: projectColumnList,
      projectTripList: projectTripList,
      projectInteractList: projectInteractList,
      loader: homeLoader
    },
    actions: {
      getProjectColumnList: getProjectColumnList,
      getProjectTripList: getProjectTripList,
      getProjectInteractList: getProjectInteractList
    }
  },
  created () {
    this.getProjectColumnList()
    this.getProjectTripList()
    this.getProjectInteractList()
  },
  data: function () {
    return {
      loader1: true
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
