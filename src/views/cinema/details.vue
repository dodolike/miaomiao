<template>
<div>
  <div id="content" class="asa">
    <load v-if="load"></load> 
   <div class="contentDetail" v-else>
     <div class="detail_list">
       
                       <i class="iconfont icon-right" @touchstart="backHandle"></i> 
       <div class="detail_list_bg" :style="{ 'background-image' :'url('+urls+')'}"></div>
       <div class="detail_list_filter"></div>
<div class="detail_list_content">
<div class="detail_list_img">
  <img :src="urls" alt="">
</div>
  <div class="detail_list_info">
	<h2>{{ details.nm }}</h2>
						<p>{{ details.enm }}</p>
						<p>{{ details.sc }}</p>
						<p>{{ details.cat }}</p>
  <p> {{ details.dur }}分钟</p>
						<p>{{ details.pubDesc }}</p>
</div>


</div>
     </div>            <div class="detail_intro">
				<p>
                    {{ details.dra }}
                </p>
			</div>
   </div>
<swipper v-if="swpe">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-for="(item,index) in details.photos" :key="index">
        <img :src="item|setWt('/148.127/')" alt="">
      </li>
    </ul>
</swipper>
    
  </div>
</div>
</template>
<script>
export default {
data(){
  return{
    urls:"",
    details:'',
    star:"",
    swpe:false,
    load:true
  }
  
},
methods:{
  backHandle(){
    console.log("运行了")
    this.$router.back(-1)
  }
},
mounted(){
  this.load = true
this.axios.get('/api/detailmovie?movieId='+this.$route.params.id).then((res)=>{
  console.log(res.data.data)
  this.details = res.data.data.detailMovie
  console.log(this.details)
  console.log(this.urls)
  this.load = false
  this.$nextTick(()=>(
      this.urls = this.details.img.replace('/w\.h/','/148.208/'),

    
    this.swpe = true))
})
},

}
</script>

<style scoped>
#content .asa{
  width: 100%;
  height: 100%;
  min-height: 100%;
  position: relative;
  left: 0px;
animation:  1s  loads;
z-index: 999;
top: 0px;
}
@keyframes loads {
  0%{
    transform: translateX(100%)

  }100%{
    transform: translateX(0)
  }
}

#content.contentDetail{ display: block; margin-bottom:0;}
#content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
.detail_list .detail_list_bg{ width:100%; height:100%; background: url() 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .85; position: absolute; left: 0; top: 0; z-index: 1;}
.detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
.detail_list .detail_list_img img{ width:100%; height: 100%;}
.detail_list .detail_list_info{ margin-top: 20px;}
.detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
.swiper-slide
{
  width: auto;
}
i::before{
  position: relative;
  top: 10px;
  left: 0px;
  color: rgb(41, 165, 97);
  z-index: 10;
  font-size: 35px;
}

</style>