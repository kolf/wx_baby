<template>
  <div>
    <x-header style="background-color:#ee5e81" _:left-options="{showBack: false}">详情<a v-link="'commentAdd'" class="icon header-icon" slot="right">&#xe608;</a></x-header>
    <swiper :list="slide" auto></swiper>
    <div class="article">
      <group style="margin-top:-15px">
        <div class="pad">
          趁着夏天还没有过去，狗狗还可以在户外游
          <div class="text-primary text-lg" style="font-size:24px">￥200</div>
        </div>
      </group>

      <group>
        <ul class="article-params pad">
          <li><span class="icon">&#xe615;</span>活动时间：2016-6-1 至 2016-8-30</li>
          <li><span class="icon">&#xe618;</span>活动地点：大兴区/北京</li>
          <li><span class="icon">&#xe616;</span>活动积分：500积分</li>
          <li><span class="icon">&#xe601;</span>已报人数：10人</li>
        </ul>
      </group>

      <group>
        <cell v-link="'commentList'" title="综合评价">
          <span>(128条评论)</span><rater :value.sync="data5" slot="value" :font-size="20" disabled></rater>
        </cell>
      </group>

      <div class="pad">
        <divider>活动特色</divider>
        <img src="http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg" alt="">
        <p>
          今日陶艺以文化艺术创意为核心，秉持中国传统文化与现代艺术结合的理念，将陶艺体验DIY和原创手工陶瓷鉴赏完美融合，致力于打造陶瓷艺术界的新时尚，让更多的人领略陶瓷文化的独特魅力，体味浓郁的艺术气息。
        </p>
        <img src="http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg" alt="">
        <p>
          今日陶艺以文化艺术创意为核心，秉持中国传统文化与现代艺术结合的理念，将陶艺体验DIY和原创手工
        </p>

        <divider>注意事项</divider>
        <img src="http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg" alt="">
        <p>
          今日陶艺以文化艺术创意为核心，秉持中国传统文化与现代艺术结合的理念，将陶艺体验DIY和原创手工陶瓷鉴赏完美融合，致力于打造陶瓷艺术界的新时尚，让更多的人领略陶瓷文化的独特魅力，体味浓郁的艺术气息。
        </p>
      </div>
    </div>
    <div class="fixed-bottom">
      <a v-link="'join'"><x-button type="primary">立即购买</x-button></a>
    </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Swiper, Panel, Card, Divider, Rater, XButton, Flexbox,
FlexboxItem} from 'vux-components'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Swiper,
    Panel,
    Card,
    Divider,
    Rater,
    XButton,
    Flexbox,
    FlexboxItem
  },
  data: function () {
    return {
      data5: 3,
      slide: [{
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400385458&ampidx=1&ampsn=78f6b8d99715384bdcc7746596d88359&ampscene=19#wechat_redirect',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400160890&ampidx=1&ampsn=29ef02af25793a11a3f6aec92bfb46c1&ampscene=19#wechat_redirect',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400094682&ampidx=1&ampsn=8231a2053b772b2108784fccc254d28c&ampscene=19#wechat_redirect',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg',
        title: '播下茶籽，明春可发芽？'
      }],
      list: [{
        src: 'http://placeholder.qiniudn.com/100x100/f04848/ffffff',
        title: '趁着夏天还没有过去，狗狗还可以在户外游',
        desc: '活动时间：2016-6-1 至 2016-8-30',
        url: '#'
      }, {
        src: 'http://placeholder.qiniudn.com/100x100/f04848/ffffff',
        title: '标题二',
        desc: '活动时间：2016-6-1 至 2016-8-30',
        url: '#'
      }]
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
