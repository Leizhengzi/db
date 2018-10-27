<template>
  <el-container :style="'border: 1px solid #eee;height:'+height+'px'">
    <el-header style="text-align: right; font-size: 12px">
      <span style="font-size: 40px; color: #fff; float: left;">DF 网</span>
      <span>您好，hzdydf，【 管理中心 】，退出</span>
      <!-- <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>发货管理</template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1" @click="$router.push({name: 'WoYaoFaHuo'})">我要发货</el-menu-item>
              <el-menu-item index="1-2" @click="$router.push({name: 'DengDaiFaHuo'})">等待发货</el-menu-item>
              <el-menu-item index="1-3" @click="$router.push({name: 'YiJingFaHuo'})">已经发货</el-menu-item>
              <el-menu-item index="1-4" @click="$router.push({name: 'WoYaoDiDan'})">我要底单</el-menu-item>
              <el-menu-item index="1-5" @click="$router.push({name: 'SheZhiFaHuoDi'})">设置发货地</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>财务管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">转账充值</el-menu-item>
              <el-menu-item index="2-2">消费记录</el-menu-item>
              <el-menu-item index="2-3">充值记录</el-menu-item>
              <el-menu-item index="2-4">提现记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>账号管理</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">账号信息</el-menu-item>
              <el-menu-item index="3-2">修改密码</el-menu-item>
              <el-menu-item index="3-3">修改资料</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>
      © 2018 DF网  版权所有    |    浙ICP备15892459号-2
    </el-footer>
  </el-container>

</template>
<style>
  ::-webkit-scrollbar
  {
      width: 1px;
      height: 1px;
      background-color: #F5F5F5;
  }
  .el-header {
    background-color: #FF5A02;
    color: #fff;
    line-height: 60px;
  }
  .el-aside {
    color: #fff;
  }

  .el-footer {
    text-align: center;
    line-height: 60px;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        height: window.innerHeight - 16
      }
    },
    methods: {

    }
  };
</script>
