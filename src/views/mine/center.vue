<template>
  <div>
      <div>
        个人中心
      </div>

      <div>
        <div>
          当前用户:{{$store.state.mine.name}}
           <a href="javascript:;" @touchstart="handletoexit">退出</a>
     
        </div>
      </div>

  </div>
</template>

<script>
import axios from "axios"
import { checkboxs } from "@/components/js";
export default {
methods:{
  handletoexit(){
    this.axios.get('/api2/users/logout').then((res)=>{
      if(res.data.status===0){
        this.$router.push('/mine/login')  }
    })
  }},
   beforeRouteEnter (to, from, next) {
     console.log('asssssssssss')
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    axios.get('/api2/users/getuser').then((res=>{
      if(res.data.status===0){
        next(vm=>{
          vm.$store.commit('USER_NAME',{name:res.data.data.username})
        console.log(res.data.data)
        })
      }else{
        next('/mine/login')
      }
    }))
  }

}
</script>

<style scoped>
.userHead{ width:100px; height:100px; border-radius: 50%; overflow: hidden;}
</style>
