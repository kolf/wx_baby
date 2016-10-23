<template>
  <div class="pad-bottom">
    <x-header style="background-color:#ff9d00" :left-options="{showBack: false}"><div v-link="{name: 'locations'}" class="header-left" name="left">{{activePlace.name}}<a class="icon">&#xe614;</a></div>首页<a v-link="{name: 'user', params: {userWeChat: 'gxogle_3'}}" class="icon header-icon" slot="right">&#xe612;</a></x-header>
    <swiper :list="projectColumnList" auto height="240px"></swiper>

    <flexbox class="text-primary" :gutter="1" >
      <flexbox-item>
        <div class="classify-item trips" v-link="{name: 'list', params: {projectColumnCode: 'PCC1000000001'}}">
          <h4>亲子出游</h4>
          <p>精彩出行</p>
        </div>
      </flexbox-item>
      <flexbox-item class="vux-1px-r">
        <div class="classify-item" v-link="{name: 'list', params: {projectColumnCode: 'PCC1000000002'}}">
          <h4>亲子交流</h4>
        <p>大小兼顾</p>
        </div>
      </flexbox-item>
    </flexbox>
    <div class="weui_panel weui_panel_access">
      <div class="weui_panel_hd">{{projectTitle}}</div>
      <div class="weui_panel_bd">
        <x-loader :show="loading.show" :loading="loading.loading" :text="loading.text"></x-loader>
        <div v-show="!loading.show" class="weui_media_box weui_media_appmsg" v-for="(index, item) in projectList | orderBy projectListRanking" v-link="{name: 'details', params: {projectId: item.projectId, playStartTime: item.projectStartTime}}">
            <div class="weui_media_hd" style="width:100px;height:100px">
                <span class="weui_media_appmsg_thumb" :style="{'background-image': 'url('+item.picUrl+')'}"></span>
            </div>
            <div class="weui_media_bd">
                <h4 class="weui_media_title">{{item.playName}}</h4>
                <p class="weui_media_desc">活动时间：{{item.projectStartTime | formatTime}} 至 {{item.projectStartTime | formatTime}}</p>
                <p class="weui_media_desc">活动地点：{{item.activePlace}}</p>
                <div class="media-bd-left" v-if="item.projectCost">
                    <span>￥{{item.projectCost}}</span>
                    <ul>
                        <li><span class="icon">&#xe616;</span>{{item.projectCost}}</li>
                        <li><span class="icon">&#xe601;</span>{{item.signCount}}</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <a class="weui_panel_ft text-center" v-link="{name: 'list', params: {projectColumnCode: 'PCC1000000001'}}">查看更多</a>
    </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Swiper, Divider, Flexbox, FlexboxItem} from 'vux-components'
import {projectColumnList} from '../vuex/getters'
import {getProjectColumnList, getHomeProjectList, getToken} from '../vuex/actions'
import XLoader from './Loader'
import randomN from '../utils/randomN'
import localStorage from '../utils/localStorage'

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
  data () {
    return {
      projectTitle: ''
    }
  },
  beforeCompile  () {
    this.clientId = localStorage.get('tokenPamrs').clientId || 'eqy123456'
    this.activePlace = localStorage.get('user').activePlace || {
      name: '北京',
      value: '110100'
    }
  },
  vuex: {
    getters: {
      projectColumnList,
      projectList: ({homeProjectList}) => homeProjectList.dataList,
      loading: ({loading}) => loading
    },
    actions: {
      getProjectColumnList,
      getHomeProjectList,
      getToken
    }
  },
  route: {
//    data ({to: {params: {projectColumnCode}}}) {
    data () {
      let projectColumnCode = 'PCC1000000001'
      let group = randomN('group_')
      let vm = this

      if (projectColumnCode === 'PCC1000000001') {
        this.projectTitle = '亲子出游'
        this.url = 'getProjectInfoForTrips'
      } else if (projectColumnCode === 'PCC1000000002') {
        this.projectTitle = '亲子交流'
        this.url = 'getProjectInfoForInteract'
      }
      this.getToken(vm.clientId, projectColumnCode, function () {
        vm.getProjectColumnList({
          group: group,
          projectColumnCode: projectColumnCode
        })
        vm.getHomeProjectList({
          activePlace: vm.activePlace,
          group: group,
          url: vm.url,
          projectColumnCode: projectColumnCode,
          pageIndex: 1,
          pageSize: 5
        })
      })
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
