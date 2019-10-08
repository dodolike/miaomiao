<template>
  <div id="content">
    <headers tittle="喵喵电影"/>
<ul class="movie_menu">
      <router-link tag ="li" to="/cinema/city" class="city_name">北京<span class="iconfont icon-lower-triangle"></span></router-link>
      <div class="hot_swtich">
    <router-link tag ="li" to="/cinema/nowplaying" class="hot_item">正在热映</router-link>
    <router-link tag ="li" to="/cinema/comingsoon" class="hot_item">即将上映</router-link>

      </div>
    <router-link tag ="li" to="/cinema/search"  class="search_entry">
      <i class="iconfont icon-sousuo "></i>
    </router-link>
</ul>

<router-view></router-view>
<icon></icon>
  </div>
</template>

<script>
import icon from "@/components/lists"
import headers from "@/components/header"
export default {
  name:"cinema",

components:{
  icon,
  headers
}
}
</script>

<style lang="scss" scoped>
#content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; display: flex; flex-direction:column;}
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>