<template>
  <div id="content">
    <headers tittle="喵喵电影"/>
<ul class="movie_menu">
      <router-link tag ="li" to="/cinema/city" class="city_name">{{this.$store.state.city.cityname}}<span class="iconfont icon-lower-triangle"></span></router-link>
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
import {checkboxs }from "@/components/js"
export default {

  name:"cinema",
data(){
  return{
    citynames:window.localStorage.getItem('citynm')
}},
components:{
  icon,
  headers
},
mounted(){
  let that = this
      setTimeout(fn(that),3000)
    function fn (that){

  that.axios.get("/api/getLocation").then((res)=>{
    let name = res.data.data.nm
    let id = res.data.data.id
    console.log(that.$store.state.city.cityid,1111111111111)
    if(id==that.$store.state.city.cityid){
return
    }
      checkboxs({
        title:'当前所处位置',
city:name,
issure:'取消',
iscancel:'确认切换',
handlecancle:()=>{console.log('sasas')},
handleok:()=>{
  window.localStorage.setItem('citynm',name)
  window.localStorage.setItem('cityid',id)
   window.location.reload();
}
      })
  }).catch((err)=>{
    console.log("获取数据失败")
  })


    }


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