<template>
  <div class="user-info">
    <el-button type="text" @click="toLogin" class="text">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function toLogin() {
  router.push("/login");
}
</script>

<style scoped lang="less">
.user-info {
  margin-top: 20px;

  .text {
    color: #000000;
    font-size: 16px;
  }
}
</style>
