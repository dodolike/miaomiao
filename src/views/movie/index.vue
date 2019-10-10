<template>
  <div id="main">
    <headers tittle="喵喵影院"/>
  <div id="content">
    
                <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
    <keep-alive>
         <cinema />
    </keep-alive>
 
  <icon />
  </div>
  </div>
</template>

<script>
import icon from "@/components/lists"
import headers from "@/components/header"
import cinema from "@/components/cinemas"
export default {
components:{
  icon,
  headers,
  cinema
}
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}

</style>