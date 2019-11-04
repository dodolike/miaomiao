<template>
    <div class="swiper-container">

    <!-- Add Arrows -->
    <slot></slot>

  </div>
</template>

<script>
    import "../../node_modules/swiper/css/swiper.css"
    import Swiper from "swiper"
export default {
mounted(){
    var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    loop:true,
       slidesPerView : 3,
  spaceBetween : 20
})
}
}
</script>

<style scoped>
  .swiper-container{
    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
    --swiper-navigation-color: #00ff33;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
  }

</style>