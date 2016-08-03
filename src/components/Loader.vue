<template>
  <div class="loader vux-center pad" v-if="show">
    <spinner type="android" slot="value"></spinner><span class="spinner-text">加载中...</span>
  </div>
</template>

<script>
import {Spinner} from 'vux-components'

export default {
  components: {
    Spinner
  },
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
.spinner{
  &-text{
    color:#444;
    padding-left: 5px;
  }
}
</style>
