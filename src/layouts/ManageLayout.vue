<template>
  <div class="manage-layout">
    <el-container>
      <el-aside class="left">
        <el-button type="primary">
          <el-icon><Plus /></el-icon>
          新建问卷</el-button
        >
        <el-divider style="border-top: transparent" />
        <el-button
          :type="route.path === '/manage/list' ? 'default' : 'text'"
          class="btn"
          @click="toMyQues()"
        >
          <el-icon class="icon"><House /></el-icon>
          我的问卷</el-button
        >
        <el-button
          :type="route.path === '/manage/star' ? 'default' : 'text'"
          class="btn"
          @click="toStar"
        >
          <el-icon class="icon"><Star /></el-icon>
          星标问卷
        </el-button>
        <el-button
          :type="route.path === '/manage/trash' ? 'default' : 'text'"
          class="btn"
          @click="toTrash"
          ><el-icon class="icon"><Delete /></el-icon>
          回收站
        </el-button>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

function toMyQues() {
  router.push("/manage/list");
}
function toStar() {
  router.push("/manage/star");
}
function toTrash() {
  router.push("/manage/trash");
}
</script>

<style scoped lang="less">
.manage-layout {
  padding: 24px 0;
  width: 1200px;
  margin: 0 auto;
  display: flex;
}

.left {
  width: 120px;
}

.right {
  flex: 1;
  margin-left: 60px;
}

.btn {
  margin-top: 18px;
  margin-left: 0;
}

.icon {
  margin-right: 4px;
}

.tdn {
  text-decoration: none;
}
</style>
