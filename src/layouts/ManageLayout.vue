<template>
  <div class="manage-layout">
    <el-container>
      <el-aside class="left">
        <el-button type="primary" @click="createQues">
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
// @ts-ignore
import { createQuestion } from "../api/question.js";
import { ElMessage, ElLoading } from "element-plus";

const route = useRoute();
const router = useRouter();

// 创建单个问卷
async function createQues() {
  // 点击创建之后，弹出全屏的loading
  const isLoading = ElLoading.service({
    lock: true,
    text: "创建中",
    background: "rgba(0, 0, 0, 0.7)",
  });

  const data = await createQuestion();

  const { id } = data || {};

  if (id) {
    router.push(`/question/edit/${id}`);
    ElMessage({
      message: "创建成功",
      type: "success",
    });
  }
  isLoading.close();
}

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
