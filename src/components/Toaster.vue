<template>
  <div>
    <toast :width="msg.width" :show.sync="msg.show" :type.sync="msg.type">{{msg.content}}</toast>
  </div>
</template>

<script>
  import {Toast} from 'vux-components'

  export default {
    components: {
      Toast
    },
    vuex: {
      getters: {
        msg: ({msg}) => msg.message
      }
    }
  }
</script>
