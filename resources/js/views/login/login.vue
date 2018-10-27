<template>
    <div style="margin: auto; width: 800px;">
        <div style=" padding: 20px;">
            <span style="font-size: 30px; font-weight: 650; color: #FF5A02;">
              会员登陆
            </span>
            没有账号？
            <router-link to="/register">快速注册</router-link>
        </div>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="用户名：">
                <el-input v-model="form.name"></el-input>
                <!-- <span class="message">用户名至少6位，数字或字母组成</span> -->
            </el-form-item>

            <el-form-item label="密码：">
                <el-input v-model="form.password"></el-input>
                <!-- <span class="message">密码至少6位，数字或字母组成</span> -->
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" style="width:360px;" @click="login">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<style rel="stylesheet/scss" lang="scss" scoped>
    .el-form {
        .message {
            margin-left: 10px;
        }
        .el-input {
            width: 360px;
        }
    }
</style>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password: '',
        }
      }
    },
    methods: {
      login() {
        console.log('submit!');
      }
    }
  }
</script>