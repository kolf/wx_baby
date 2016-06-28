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
@import 'styles/index.less';

body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
  padding-bottom:50px;
}
.v-transition{
  width:100%;
  max-width: 640px;
  margin:0 auto;
}

li{
  list-style: none;
}
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1467081572_8971786.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1467081572_8971786.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/font_1467081572_8971786.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/font_1467081572_8971786.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1467081572_8971786.svg#iconfont') format('svg'); /* iOS 4.1- */
}
                    
.icon {
  font-family: 'iconfont';
  font-size:14px;
  padding-right: 4px;
  color: #444;
}

.icon:before {
  content: attr(icon);
}


// fn
.pad{
  padding: 15px;
}

.text{
  &-primary{
    color:red
  }
}

.pull{
  &-right{
    float: right;
  }
}
</style>
