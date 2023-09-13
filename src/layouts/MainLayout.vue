<template>
  <div class="main-layout">
    <el-container>
      <el-header class="header">
        <div class="left">
          <Logo />
        </div>
        <div class="right">
          <UserInfo />
        </div>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
      <el-footer class="footer"
        ><p class="text">
          小木问卷 &copy; 2023 - preset. Created by ycj
        </p></el-footer
      >
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Logo from "../components/Logo.vue";
import UserInfo from "../components/UserInfo.vue";
</script>

<style scoped lang="less">
.header {
  padding: 0 24px;
  background-color: #409eff;

  .left {
    float: left;
  }

  .right {
    float: right;
  }
}

.main {
  min-height: calc(100vh - 64px - 71px);
}

.footer {
  text-align: center;
  background-color: #f7f7f7;
  margin-top: 15px;
}
</style>
