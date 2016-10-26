<template>
  <div>
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">发表评论<a @click="addComment()" class="icon header-icon" slot="right">&#xe609;</a></x-header>
    <cell title="总体印象">
      <rater :value.sync="point" slot="value"></rater>
    </cell>
    <div class="edit-box">
      <x-textarea :max="1000" :value.sync="comment" placeholder="说些什么吧! 最多可以输入1000个字符哦..." style="padding:0"></x-textarea>
    </div>
    <ul class="upload-list pad">
      <li class="upload-btn"><span class="icon">&#xe611</span></li>
    </ul>
  </div>
  <Toast :show.sync="push.show">{{push.msg}}</Toast>
</template>

<script>
import {Rater, XHeader, Cell, Group, XTextarea, Toast} from 'vux-components'
import {setDiscussion} from '../vuex/actions'
import randomN from '../utils/randomN'
import localStorage from '../utils/localStorage'

export default {
  components: {
    Rater,
    XHeader,
    Cell,
    Group,
    XTextarea,
    Toast
  },
  vuex: {
    actions: {
      setDiscussion
    }
  },
  data () {
    return {
      imagePaths: [],
      comment: '',
      point: 5,
      push: {
        msg: '发布成功',
        show: false
      }
    }
  },
  created () {
    this.group = randomN('group_')
    this.userId = localStorage.get('user').userId
    this.projectId = this.$route.params.projectId
  },
  methods: {
    addComment () {
      this.setDiscussion({
        group: this.group,
        projectId: this.projectId,
        userId: this.userId || 34,
        point: this.point,
        comment: this.comment,
        imagePaths: this.imagePaths || []
      }, () => {
        this.$set('push.show', true)
        setTimeout(() => {
          this.$router.go({name: 'comment', params: {projectId: this.projectId}})
        }, 1000)
      })
    }
  }
}
</script>

<style lang="less">
.face{
  &-btn{
    box-sizing: border-box;
    position: fixed;
    left: 0;
    right: 0;
    height: 50px;
    padding:7px 15px;
    bottom:0;
    background:#ccc;
    span{
      font-size: 24px;
    }
  }
}
.weui_textarea_counter{
  padding:0 15px;
  background:#fff
}

.edit{
  &-box{
    height:145px;
    overflow:hidden;
    textarea{
      box-sizing: border-box;
      border:none;
      width: 100%;
      height:120px;
      outline: none;
      padding:15px;
    }
  }
}
.upload{
  &-btn{
    position: relative;
    span{
      position: absolute;
      left: 0;
      top: 0;
      height: 75%;
      width: 100%;
      text-align: center;
      padding-top:25%;
      font-size:20px;
      color:#ccc
    }
  }
  &-list{
    overflow: hidden;
    background:#fff;
    li{
      width:18%;
      height:0;
      padding-top:18%;
      float:left;
      background:#eee;
      margin:1%;
    }
  }

}
</style>
