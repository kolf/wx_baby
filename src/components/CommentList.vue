<template>
  <div>
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">评论<a v-link="{name: 'commentAdd', params: {projectId: projectId}}" class="icon header-icon" slot="right">&#xe608;</a></x-header>
    <div class="discuss_list" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div class="discuss_item vux-1px-b" v-for="comment in commentList" id="comment_{{comment.udId}}">
        <div class="discuss_opr">
          <rater :value.sync="comment.point" slot="value" :font-size="20" disabled></rater>
        </div>
        <div class="user_info">
          <strong class="nickname">{{comment.userRealName}}</strong>
          <span class="lazy-img avatar" :style="{backgroundImage:'url('+comment.userHeadImage+')'}"></span>
        </div>
        <div class="discuss_message">
          <div class="discuss_message_content">{{comment.comment}}
            <ul class="msg_imgs">
              <li v-for="imgs in comment.imagePaths" class="lazy-img" :style="{backgroundImage:'url('+imgs.picUrl+')'}" @click="previewer()"></li>
            </ul>
          </div>
        </div>
        <p class="discuss_extra_info">
          <span class="pull-right">{{comment.updateTime | formatTime}}</span>
          <ul class="icon-list">
            <li><span @click="setLike(comment)" v-if="comment.statusId" class="icon">&#xe600;</span><span class="icon" @click="setLike(comment)"  v-else>&#xe602;</span>{{comment.agreementNumber}}</li>
            <li><span class="icon">&#xe603;</span></li>
          </ul>
        </p>
      </div>
    </div>
    <x-loader :show="loading.show" :loading="loading.loading" :text="loading.text"></x-loader>
  </div>
</template>

<script>
import {Rater, XHeader} from 'vux-components'
import XLoader from './Loader'
import randomN from '../utils/randomN'

import {commentList, isLike} from '../vuex/getters'
import {getCommentList, setAgreement} from '../vuex/actions'

export default {
  components: {
    Rater,
    XHeader,
    XLoader
  },
  vuex: {
    getters: {
      commentList: commentList,
      isLike: isLike,
      loading: ({loading}) => loading
    },
    actions: {
      getCommentList,
      setAgreement
    }
  },
  data () {
    return {
      pageIndex: 1
    }
  },
  created () {
    this.group = randomN('group_')
    this.projectId = this.$route.params.projectId
    this.getList()
  },
  methods: {
    loadMore () {
      if (!this.loading.loading) {
        this.pageIndex++
        this.getList()
      }
    },
    previewer () {
      console.log('预览')
    },
    setLike (comment) {
      let status = comment.statusId
      this.setAgreement({
        udId: comment.udId,
        userId: comment.userId,
        statusId: status
      })
    },
    getList () {
      this.getCommentList({
        group: this.group,
        pageIndex: this.pageIndex,
        projectId: this.projectId
      })
    }
  }
}
</script>

<style lang="less">
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
