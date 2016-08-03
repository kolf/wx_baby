<template>
  <div>
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">选择城市</x-header>
    <search @result-click="resultClick" class="kll" cancelText="zz" @on-change="getResult" :results="results" :value.sync="value"></search>
    <div class="weui_cells_title">定位城市</div>
    <!-- <div class="pad bg-white vux-1px-tb">定位中...</div> -->
    <div class="location-box bg-white vux-1px-t">
      <ul class="vux-1px-b">
        <li class="vux-1px-r">定位中...</li>
      </ul>
    </div>
    <div class="weui_cells_title">热门城市</div>
    <div class="location-box bg-white vux-1px-t">
      <ul class="vux-1px-b">
        <li class="vux-1px-r">北京</li>
        <li class="vux-1px-r">天津</li>
        <li class="vux-1px-r">上海</li>
        <li>深圳</li>
      </ul>
      <ul class="vux-1px-b">
        <li class="vux-1px-r">西安</li>
        <li class="vux-1px-r">重庆</li>
        <li class="vux-1px-r">杭州</li>
        <li>武汉</li>
      </ul>
      <ul class="vux-1px-b">
        <li class="vux-1px-r">成都</li>
      </ul>
    </div>
    <div class="weui_cells_title">A</div>
    <div class="location-box bg-white vux-1px-t">
      <ul class="vux-1px-b">
        <li class="vux-1px-r">鞍山</li>
        <li class="vux-1px-r">阿拉善</li>
        <li class="vux-1px-r">安庆</li>
        <li>安阳</li>
      </ul>
    </div>

    <div class="weui_cells_title">B</div>
    <div class="location-box bg-white vux-1px-t">
      <ul class="vux-1px-b">
        <li class="vux-1px-r">保定</li>
        <li class="vux-1px-r">宝鸡</li>
        <li class="vux-1px-r">北海</li>
        <li>北京</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {Search, XHeader, Flexbox, FlexboxItem} from 'vux-components'

export default {
  components: {
    Search,
    XHeader,
    Flexbox,
    FlexboxItem
  },
  methods: {
    resultClick (item) {
      console.log('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = getResult(this.value)
    }
  },
  data () {
    return {
      results: [],
      value: ''
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 40; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>


<style lang="less">
.location{
  &-box{
    font-size:0;
    li{
      width:25%;
      text-align: center;
      padding:8px 0;
      box-sizing: border-box;
      display: inline-block;
      font-size:14px;
      overflow: hidden;
      white-space:nowrap;
      text-overflow: ellipsis;
    }
  }
  &-item{
    height:50px;
    text-align:center;
    line-height: 50px;
  }
}
.vux-search_show{

}
</style>
