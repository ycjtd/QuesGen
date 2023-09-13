<template>
  <div class="Logo" @click="toHome">
    <el-icon class="icon"><Edit /></el-icon>
    <h2 style="display: inline">小木问卷</h2>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function toHome() {
  router.push("/");
}
</script>

<style scoped lang="less">
.Logo {
  margin-top: 20px;
  cursor: pointer;

  .icon {
    margin-right: 10px;
  }
}
</style>
