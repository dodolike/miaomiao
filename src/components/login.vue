<template>
  <div class="login_body">
    <div>
      <input type="text" v-model="username" class="login_text" placeholder="账户名/手机号/Email" />
    </div>
    <div>
      <input type="password" v-model="password" class="login_text" placeholder="请输入密码" />
    </div>
    <div>
      <input type="text" v-model="verify" class="login_text" placeHodel="请输入验证码" />
      <!-- <img src="" alt=""  @touchstart="handletoverify"> -->
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" @touchstart="handletologin" />
    </div>
    <div class="login_link">
      <router-link to="/mine/register">立即注册</router-link>
      <router-link to="/mine/findpassword">找回密码</router-link>
    </div>
  </div>
</template>

<script>
import { checkboxs } from "@/components/js";
export default {
  data() {
    return {
      username: "",
      password: "",
      verify: ""
    };
  },
  methods: {
    handletologin() {
      this.axios
        .post("/api2/users/login", {
          username: this.username,
          password: this.password
          // verifyimg:this.verify
        })
        .then(res => {
          var status = res.data.status;
          var that = this;
          if (status === 0) {
            checkboxs({
              title: "登陆",
              city: "登录成功",
              issure:"确定",
              handleok:()=>{
that.$router.push("/mine/center")
              }
            });
          }else{
            checkboxs({
              title:"错误",
              city:"邮箱,密码错误",
              issure:"确定"
            })
          }
        });
    },
    handletoverify() {}
  }
};
</script>

<style scoped>
#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>
