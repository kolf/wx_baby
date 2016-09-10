<template>
  <div class="loader vux-center pad" v-if="show">
     <Spinner v-if="loading" type="android" slot="value"></Spinner>
     <span class="spinner-text">{{text}}</span>
     <slot></slot>
  </div>
</template>

<script>
import {Spinner} from 'vux-components'

export default {
  components: {
    Spinner
  },
  props: {
    show: Boolean,
    text: String,
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
.loader{
  height: 40px;
}
.spinner{
  &-text{
    color:#444;
  }
}
</style>
