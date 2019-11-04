<template>
  <div class="password_body">
      <div class="password_email">
        邮箱:<input type="text" class="password_text" v-model="email" name="" id="">
        <button :disabled="disabled" @touchstart="handletoverify">{{verifyinfo}}</button>
      </div>
      <div>
       新密码： <input type="password" class="password_text" v-model="password">

      </div>
<div>
  验证码：<input type="text" v-model="verify" class="password_text">
</div>
<div class="password_btn">
  <button @touchstart="handletopassword">修改</button>
</div>
<div class="password_link">
  <router-link to="/mine/login">立即登陆</router-link>
  <router-link to="/mine/register">立即注册</router-link>
</div>
  </div>
</template>

<script>
import {checkboxs} from "@/components/js"
export default {
data(){
  return{
    email:"",
    password:"",
    password_text:"",
    verify:"",
    verifyinfo:"发送验证码",
    disabled:false
}},
  methods:{
    handletoverify(){
      if(this.disabled){
        return
      }
      this.disabled=true
  let count= 60
  var time = setInterval(() => {

      this.verifyinfo = "剩余"+count--+"秒"
      if(count===0){
        clearInterval(time),
        this.verifyinfo = "发送验证码"
        this.disabled=false
      }
  }, 1000);
      console.log('????')
this.axios.get("/api2/users/verify?emails="+this.email).then((res)=>{
if(res.data.status===0){
checkboxs({
  title:"成功",
  city:"发送成功",
  issure:"确定"
})
}else{
  checkboxs({
     title:"失败",
  city:"发送失败",
  issure:"确定"
  })
}
})
    },
    handletopassword(){
      var that = this
this.axios.post("/api2/users/findpassword",{
  verify:this.verify,
  emails:this.email,
  password:this.password
}).then(res=>{
  if(res.data.status===0){
    
checkboxs({
  title:"成功",
  city:"修改成功",
  issure:"确定",
  handleok:that.$router.push('/mine/login')
})
  }else{
    checkboxs({
  title:"失败",
  city:"修改失败",
  issure:"确定"
})
  }
})
    }
  }
}
</script>


<style scoped>
#content .password_body{  width:100%;}
.password_body .password_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.password_body .password_btn{ height:50px; margin:10px;}
.password_body .password_email{ position: relative;}
.password_body .password_email button{ position: absolute; right:10px; top:10px; height:30px; border-radius: 3px; border:none; padding:5px;}
.password_body .password_btn button{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.password_body .password_link{ display: flex; justify-content:space-between;}
.password_body .password_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
</style>