<template>
  <div class="wrapper" ref="dd">
<slot></slot>
  <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
mounted(){
let scroll = new BScroll(this.$refs.dd,{
    tap:true,
     bottom: true,
      probeType: 1
})
this.scroll = scroll;

}
}
</script>

<style>
  .wrapper{ height:100%;}
</style>