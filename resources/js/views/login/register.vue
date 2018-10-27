<template>
    <div style="margin: auto; width: 800px;">
        <div style="font-size: 30px; font-weight: 650; color: #FF5A02; padding: 20px;">
            快速注册
        </div>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="用户名：">
                <el-input v-model="form.name"></el-input>
                <span class="message">用户名至少6位，数字或字母组成</span>
            </el-form-item>

            <el-form-item label="密码：">
                <el-input v-model="form.password"></el-input>
                <span class="message">密码至少6位，数字或字母组成</span>
            </el-form-item>
            <el-form-item label="确认密码：">
                <el-input v-model="form.repass"></el-input>
                <span class="message">再次输入密码</span>
            </el-form-item>
            <el-form-item label="联系人微信：">
                <el-input v-model="form.weixin"></el-input>
                <span class="message">输入联系人微信</span>
            </el-form-item>
            <el-form-item label="手机号码：">
                <el-input v-model="form.phone"></el-input>
                <span class="message">选填，输入手机号码</span>
            </el-form-item>
            <el-form-item label="QQ：">
                <el-input v-model="form.qq"></el-input>
                <span class="message">选填，输入QQ</span>
            </el-form-item>
            <el-form-item label="邮箱：">
                <el-input v-model="form.email"></el-input>
                <span class="message">选填，输入邮箱</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:360px;" @click="register">注册</el-button>
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
          repass: '',
          weixin: '',
          qq: '',
          email: '',
        }
      }
    },
    methods: {
      register() {
        console.log('submit!');
      }
    }
  }
</script>