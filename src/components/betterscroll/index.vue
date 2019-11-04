<template>
  <div class="wrapper" ref="dd">
<slot></slot>
  <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
 neweasing:{
   type:Function,
   default:function(){
     console.log('没有成功掉哦')
}
   },
   getnewseaing:{
     type:Function,
     default:function(){

     }
   }

 
},
mounted(){
let scroll = new BScroll(this.$refs.dd,{
    tap:true,
     probeType: 1,
     bottom: true,
      probeType: 1
})
this.scroll = scroll;

scroll.on('scroll',(pop)=>{
  this.neweasing(pop)
})

scroll.on("touchEnd",(pop)=>{
this.getnewseaing(pop)
})
},

methods:{
  toScrollTop(y){
    this.scroll.scrollTo(0,y)
  }
}
}
</script>

<style>
  .wrapper{ height:100%;}
</style>