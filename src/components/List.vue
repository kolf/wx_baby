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
            <div class="weui_media_box weui_media_appmsg" v-for="(index, item) in projectList | orderBy projectListRanking" v-link="{name: 'details', params: {projectId: item.projectId, playStartTime: item.playStartTime}}">
                <div class="weui_media_hd" style="width:100px;height:100px">
                    <span class="weui_media_appmsg_thumb" alt="" :src="item.picUrl" :style="{'background-image': 'url('+item.picUrl+')'}"></span>
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
    </div>
    <x-loader :show="loading.show" :loading="loading.loading" :text="loading.text"></x-loader>
</div>
</template>

<script>
import {XHeader, Tab, TabItem, XButton, Divider, Sticky} from 'vux-components'
import XLoader from './Loader'
import randomN from '../utils/randomN'
import {getLocalStorage} from '../utils/localStorage'
import {projectList} from '../vuex/getters'
import {getProjectList} from '../vuex/actions'

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
      projectList,
      loading: ({loading}) => loading
    },
    actions: {
      getProjectList
    }
  },
  data () {
    return {
      projectListRanking: 'signCount',
      pageIndex: 1,
      pageTitle: ''
    }
  },
  beforeCompile () {
    this.activePlace = getLocalStorage('user').activePlace
  },
  route: {
    data ({to: {params: {projectColumnCode}}}) {
      this.projectColumnCode = projectColumnCode
      this.group = randomN('group_')
      if (projectColumnCode === 'PCC1000000001') {
        this.pageTitle = '亲子出游'
        this.url = 'getProjectInfoForTrips'
      } else if (projectColumnCode === 'PCC1000000002') {
        this.pageTitle = '亲子交流'
        this.url = 'getProjectInfoForInteract'
      }
      this.getList()
    }
  },
  methods: {
    ranking (type) {
      this.projectListRanking = type
    },
    getList () {
      let vm = this
      this.getProjectList({
        activePlace: vm.activePlace,
        url: vm.url,
        projectColumnCode: vm.projectColumnCode,
        pageIndex: vm.pageIndex,
        pageSize: 10,
        group: vm.group
      })
    },
    loadMore () {
      if (!this.loading.loading) {
        this.pageIndex++
        this.getList()
      }
    }
  }
}

</script>
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
