<template>
  <div class="register_body">
     <div class="register_email">
       邮箱:  <input type="text" v-model="emaildata" class="register_text" >
       <button :disabled="disabled" 
       @touchstart="handletoverify">{{verifyinfo}}</button>
     </div>
     <div>
         用户名:<input class="register_text" type="text" v-model="username">
        
     </div>
     <div>
         密码:<input type="password" v-model="password" 
        
         class="register_text">
     </div>
     <div>
         确认密码:<input type="password" class="register_text">
     </div>
     <div>
         验证码:<input type="text" class="register_text"  v-model="verify">
     </div>
     <div class="register_btn">
         <button @touchstart="toregister">注册</button>
     </div >

     <div class="register_link">
<router-link to="/mine/login">立即登录</router-link>
<router-link to="/mine/findpassword">找回密码</router-link>
     </div>
     <div>

     </div>



  </div>
</template>

<script>
import { checkboxs } from "@/components/js/";
export default {
    
data(){
    return{
        emaildata:"",
        disabled:false,
        verifyinfo:'发送验证码',
        username:"",
        verify:"",
        password:""
    }
},
methods:{
handletoverify(){
if(this.disabled)return
this.axios.get('/api2/users/verify?emails='+this.emaildata).then(
    (res)=>{
        console.log(res)
if(res.data.status==0){
checkboxs({
     title:'验证码',
        city:'验证码已发送',
        issure:'确定',
        handleok:()=>{
            this.countdown()
        }
})
}else{
checkboxs({city:"验证码发送失败",
issure:'确定',
    title:"错误"

})
}

    }
)
},
toregister(){
this.axios.post('/api2/users/register',{
    emails:this.emaildata,
    username:this.username,
    password:this.password,
    verify:this.verify
}).then((res)=>{
    console.log(res.data)
    var that = this
    if(res.data.status===0){
        console.log(200)
        checkboxs({
            title:"成功",
            city:"注册成功",
            issure:"确定",
            handleok(){
                that.$router.push('/mine/login')
            }
        })
    }else{
        checkboxs({
            title:"错误",
            city:'请重新注册',
            issure:"确定"
        })
    }
})
},
countdown(){
    console.log("真的输出了")
    this.disabled = true;
    var count = 60;
    var timer = setInterval(()=>{
        count--;
        this.verifyinfo = "剩余"+count+"秒"
        if(count===0){
            this.disabled = false;
            count=60;
            this.verifyinfo = '发送验证码'
            clearInterval(timer)
        }
    },1000)
}

}
}
</script>
<style scoped>
#content .register_body{  width:100%;}
.register_body .register_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.register_body .register_btn{ height:50px; margin:10px;}
.register_body .register_email{ position: relative;}
.register_body .register_email button{ position: absolute; right:10px; top:10px; height:30px; border-radius: 3px; border:none; padding:5px;}
.register_body .register_btn button{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.register_body .register_link{ display: flex; justify-content:space-between;}
.register_body .register_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
</style>