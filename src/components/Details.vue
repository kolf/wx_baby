<template>
  <div class="fixed-bottom-wrap">
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">详情<a v-link="{name: 'commentAdd', params: {projectId: projectDetail.projectId}}" class="icon header-icon" slot="right">&#xe608;</a></x-header>
    <swiper :list="slide" auto height="240px"></swiper>
    <div class="article">
    <div class="pad bg-white vux-1px-b">
      {{projectDetail.projectSummary}}
      <!-- <div class="text-primary text-lg" style="font-size:24px">￥{{projectDetail.projectSummary}}</div> -->
    </div>

      <group>
        <ul class="article-params pad">
          <li><span class="icon">&#xe615;</span>活动时间：{{projectDetail.startTime}} 至 {{projectDetail.endTime}}</li>
          <li><span class="icon">&#xe618;</span>活动地点：{{projectDetail.activePlace}}</li>
          <li><span class="icon">&#xe616;</span>活动积分：{{projectDetail.startTime}}积分</li>
          <li><span class="icon">&#xe601;</span>已报人数：{{projectDetail.signCount}}人</li>
        </ul>
      </group>

      <group>
        <cell v-link="{name: 'comment', params: {projectId: projectDetail.projectId}}" title="综合评价">
          <span>({{projectDetail.discussionCount}}条评论)</span><rater :value.sync="projectDetail.averageScore" slot="value" :font-size="20" disabled></rater>
        </cell>
      </group>

      <div class="pad">
        <divider>活动特色</divider>
        <div>
          {{projectDetail.projectComments}}
        </div>
        <divider>注意事项</divider>
        <div>
          {{projectDetail.projectNotice}}
        </div>
      </div>
    </div>
    <div class="fixed-bottom vux-1px-t">
      <a v-link="{name: 'join'}"><x-button type="primary">立即购买</x-button></a>
    </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Swiper, Divider, Rater, XButton} from 'vux-components'
import {projectDetail, projectSlide} from '../vuex/getters'
import {getProjectInfoDetail} from '../vuex/actions'
import randomN from '../utils/randomN'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Swiper,
    Divider,
    Rater,
    XButton
  },
  vuex: {
    getters: {
      projectDetail,
      slide: projectSlide
    },
    actions: {
      getProjectInfoDetail
    }
  },
  route: {
    data ({to: {params: {projectId, playStartTime}}}) {
      playStartTime = this.$options.filters.formatTime(playStartTime, 'yyyy-MM-dd hh:mm:ss')
      this.getProjectInfoDetail({
        projectId: projectId,
        playStartTime: playStartTime,
        group: randomN()
      })
    }
  }
}
</script>

<style lang="less">
  img{
    max-width: 100%;
  }

  .article{
    p{
      /*padding-bottom: 10px;*/
    }
    &-params{
      li{
        line-height: 1.6
      }
      .icon{
        font-size:16px;
      }
    }
  }



</style>
