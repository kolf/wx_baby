<template>
  <div class="app-inner">
    <x-header style="background-color:#ff9d00" _:left-options="{showBack: false}">选择城市</x-header>
    <search @result-click="resultClick" @on-change="getResult" :results="results" :value.sync="value"></search>
    <div class="weui_cells_title">定位城市</div>
    <!-- <div class="pad bg-white vux-1px-tb">定位中...</div> -->
    <div class="location-box bg-white vux-1px-t">
      <ul class="vux-1px-b">
        <li class="vux-1px-r">定位中...</li>
      </ul>
    </div>
    <div class="location-box" v-for="(index, city) in citys">
      <div class="weui_cells_title">{{city.name}}</div>
      <ul class="bg-white vux-1px-tb">
        <li :class="{'vux-1px-r': (index+1)%4}" v-for="(index, item) in city.list" v-link="" @click="toHome(item)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {Search, XHeader} from 'vux-components'
import map from 'array-map'
import find from 'array-find'
import {setLocalStorage, getLocalStorage} from '../utils/localStorage'

const list = require('vux-components/address/list.json')

export default {
  components: {
    Search,
    XHeader
  },
  methods: {
    resultClick (item) {
      setLocalStorage('user', {
        activePlace: item
      })
      this.$router.go({name: 'index', params: {projectColumnCode: getLocalStorage('user').projectColumnCode}})
    },
    getResult () {
      this.results = getResult(this.value)

      function getResult (val) {
        let re = new RegExp(val)
        let rs = []
        find(list, item => {
          if (re.test(item.name)) {
            rs.push(item)
          }
        })

        return rs
      }
    },
    toHome (item) {
      setLocalStorage('user', {
        activePlace: item
      })
      this.$router.go({name: 'index', params: {projectColumnCode: getLocalStorage('user').projectColumnCode}})
    }
    // localCity () {
    //   let myCity = new window.BMap.LocalCity()
    //   myCity.get((result) => {
    //     console.log(result)
    //   })
    // }
  },
  beforeCompile () {
    this.citys.forEach((city, index) => {
      city.list = map(city.list, (one, index) => {
        return find(list, item => {
          return item.value === one
        })
      })
    })
  },
  data () {
    return {
      results: [],
      value: '',
      citys: [{
        name: '热门城市',
        list: ['110100', '310100', '440100', '440300', '330100', '350200', '320100', '510100', '420100', '210100']
      }, {
        name: 'B',
        list: ['110100']
      }, {
        name: 'C',
        list: ['220100', '500100', '510100', '430100']
      }, {
        name: 'D',
        list: ['441900', '532900', '210200']
      }, {
        name: 'F',
        list: ['350100']
      }, {
        name: 'G',
        list: ['440100', '520100', '450300']
      }, {
        name: 'H',
        list: ['330100', '340100', '460100', '150100', '230100', '341000']
      }, {
        name: 'J',
        list: ['370100']
      }, {
        name: 'K',
        list: ['530100']
      }, {
        name: 'L',
        list: ['530700', '620100', '540100']
      }, {
        name: 'N',
        list: ['330200', '320100', '360100', '450100']
      }, {
        name: 'Q',
        list: ['370200']
      }, {
        name: 'S',
        list: ['310100', '320500', '440300', '460200', '130100', '210100']
      }, {
        name: 'T',
        list: ['120100', '140100']
      }, {
        name: 'W',
        list: ['330300', '320200', '420100', '650100']
      }, {
        name: 'X',
        list: ['350200', '630100', '610100']
      }, {
        name: 'Y',
        list: ['640100']
      }, {
        name: 'Z',
        list: ['440400', '410100']
      }]
    }
  }
}
</script>


<style lang="less">
.location{
  &-box{
    font-size:0;
    li{
      width:25%;
      text-align: center;
      padding:8px;
      box-sizing: border-box;
      display: inline-block;
      font-size:14px;
      overflow: hidden;
      white-space:nowrap;
      text-overflow: ellipsis;
      position: relative;
      &:before{
        content: '';
        height: 1px;
        border-bottom: 1px solid #e0e0e0;
        width: 100%;
        position: absolute;
        left:0;
        right:0;
        bottom:0
      }
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

@media screen and (-webkit-min-device-pixel-ratio: 2){
.location{
  &-box{
    li:before{
      border-bottom:none;
      background-position: left bottom;
      background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0));
    }
  }
}
}
</style>
