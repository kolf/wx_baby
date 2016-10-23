<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  store
}
</script>

<style lang="less">
@import '~vux/src/styles/reset';

body {
  font-family: Helvetica, sans-serif;
  background-color: #f6f6f6;
  overflow-x: hidden
}
a{
  color:#ff9d00
}
.v-transition{
  width:100%;
  /*max-width: 640px;*/
  margin:0 auto;

  &.fixed-header{
    padding-top:46px;
    &>.vux-header{
      position:fixed;
      left: 0;
      top: 0;
      right: 0;
      height: 46px;
      z-index: 110;
    }
  }

}

li{
  list-style: none;
}

.weui_cells{
  &:before,&:after{
    opacity: 0
  }
}

@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1472921771_9469836.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1472921771_9469836.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/font_1472921771_9469836.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/font_1472921771_9469836.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1472921771_9469836.svg#iconfont') format('svg'); /* iOS 4.1- */
}


.icon {
  font-family: 'iconfont';
  font-size:14px;
  padding-right: 4px;

}

.icon:before {
  content: attr(icon);
}


// fn
.pad{
  padding: 15px;
  &-top{
    padding-top:15px;
  }
  &-bottom{
    padding-bottom: 15px;
  }
  &-left{
    padding-left:15px;
  }
  &-right{
    padding-right:15px;
  }
}
.bg{
  &-white{
    background-color:#fff
  }
}
.text{
  &-primary{
    color:#ff9d00
  }
  &-lg{
    font-size: 18px;
  }
  &-right{
    text-align:right;
  }
  &-center{
    text-align:center
  }
}

.list{
  &-text{
      padding:10px 15px;
    li{
      line-height: 1.6;
      font-size: 14px;
      color:#999
    }
  }
}
.pull{
  &-right{
    float: right;
  }
}

.hide{
  display:none !important;
}

.lazy-img{
  background: #ccc url(data:image/png;base64,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) center center no-repeat;
  background-size: 100% auto;
}

.vux-fixed{
  z-index: 100;
  &~.sticky-placeholder{
    display: block;
  }
}

.sticky-placeholder{
  height: 44px;
  display:none;
}

.header{
  &-icon{
    font-size:22px;
  }
}
.app{
  &-inner{
    padding-bottom:30px;
  }
}
.fixed-bottom-wrap{
  padding-bottom: 80px;
}
</style>
