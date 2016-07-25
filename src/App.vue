<template>
  <div>
    <router-view
    transition
    transition-mode="out-in"></router-view>
  </div>
</template>

<script>
</script>

<style lang="less">

body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
  padding-bottom:50px;
  overflow-x: hidden;
}
a{
  color:#f04848
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

@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1469096630_5411289.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1469096630_5411289.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/font_1469096630_5411289.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/font_1469096630_5411289.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1469096630_5411289.svg#iconfont') format('svg'); /* iOS 4.1- */
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
    color:red
  }
  &-lg{
    font-size: 18px;
  }
  &-right{
    text-align:right;
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
  background: #eee url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAADcCAMAAADNyn3LAAAA7VBMV…OmTZs2tGnTpk0b2rRp06YNbdq0adOGNm3atGlDmzZt2giTpC8rKT9dRAAAAABJRU5ErkJggg==) center center no-repeat;
  background-size: cover;
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
</style>
