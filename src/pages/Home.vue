<template>
  <div class="Home">
    <div class="info">
      <h1>问卷调查 | 在线投票</h1>
      <p>已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份</p>
      <el-button
        @click="toManagerList"
        class="button"
        size="large"
        type="primary"
        >开始使用</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

async function toManagerList() {
  router.push("/manage/list");
}
</script>

<style scoped lang="less">
.Home {
  height: calc(100vh - 64px - 120px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);

  .info {
    text-align: center;
  }
}
</style>
