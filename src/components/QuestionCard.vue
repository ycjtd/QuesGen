<template>
  <div class="questionCard">
    <div class="title">
      <div class="left">
        <span
          class="title"
          @click="toDetail(list && list._id, list && list.isPublished)"
        >
          <el-icon
            v-if="isStar"
            class="marginR"
            style="color: red; margin-right: 6px"
            ><Star
          /></el-icon>
          {{ list && list.title }}</span
        >
      </div>
      <div class="right">
        <span v-if="list && list.isPublished" style="color: green"
          ><el-tag class="publish" type="success" size="small">已发布</el-tag>
        </span>
        <span v-else
          ><el-tag class="publish" size="small">未发布</el-tag>
        </span>
        <span style="margin-right: 10px"
          >答卷：<el-text class="mx-1" type="success">{{
            list && list.answerCount
          }}</el-text>
        </span>
        <span>
          时间：<el-text class="mx-1" type="primary">{{
            list && list.createdAt
          }}</el-text></span
        >
      </div>
    </div>
    <el-divider />
    <div class="button-container">
      <div class="left">
        <el-button type="text" size="small" @click="edit(list && list._id)">
          <el-icon :size="18" class="icon"> <Edit /> </el-icon
          >编辑问卷</el-button
        >
        <el-button
          type="text"
          size="small"
          @click="stat(list && list._id)"
          :disabled="!(list && list.isPublished)"
          ><el-icon :size="18" class="icon"> <DataAnalysis /> </el-icon
          >数据统计</el-button
        >
      </div>
      <div class="right">
        <el-button size="small" type="text" @click="handleStar(list._id)"
          ><el-icon v-if="isStar" class="marginR"><Star /></el-icon>
          <el-icon v-else class="marginR"><StarFilled /></el-icon>
          {{ isStar ? "取消标星" : "标星" }}</el-button
        >
        <el-button size="small" type="text" @click="handleCopy(list._id)"
          ><el-icon class="marginR"><CopyDocument /></el-icon>复制</el-button
        >
        <el-button size="small" type="text" @click="handleDelete(list._id)"
          ><el-icon class="marginR"><Delete /></el-icon>删除</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck

import { toRefs, ref } from "vue";
import { useRouter } from "vue-router";
import { updateQuestionService, copyQuestionService } from "../api/question";
import { ElMessage } from "element-plus";

const router = useRouter();

// 接收父组件传过来的值
const props = defineProps({
  list: Object,
});
const { list } = toRefs(props);
let isStar = ref(list.isStar);

// 标星/取消标星
const handleStar = async (id) => {
  const data = await updateQuestionService(id);
  isStar.value = !isStar.value;
  ElMessage({
    message: "修改成功",
    type: "success",
  });
};

// 复制
const handleCopy = async (id) => {
  const data = await copyQuestionService(id);
  ElMessage({
    message: "复制成功",
    type: "success",
  });
  // 跳转到问卷编辑页
  router.push(`/question/edit/${id}`);
};

// 删除问卷
const handleDelete = async (id) => {
  const data = await updateQuestionService(id, { idDeleted: true });

  ElMessage({
    message: "删除成功",
    type: "success",
  });
};

async function edit(id: any) {
  router.push(`/question/edit/${id}`);
}

function stat(id: any) {
  router.push(`/question/stat/${id}`);
}

function toDetail(id: string, isPublished: boolean) {
  if (isPublished) {
    router.push(`/question/stat/${id}`);
  } else {
    router.push(`/question/edit/${id}`);
  }
}
</script>

<style scoped lang="less">
.questionCard {
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 3px;
  background-color: #fff;

  &:hover {
    box-shadow: 0 4px 10px #e8e8e8;
  }
}

.title {
  display: flex;
  margin-bottom: -10px;

  .left {
    flex: 1;

    .title {
      margin-left: 12px;
      color: #1f1f1f;
      cursor: pointer;
    }
  }

  .right {
    flex: 1;
    text-align: right;
  }
}

.button-container {
  display: flex;
  margin-top: -15px;

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
    text-align: right;

    button {
      color: #999;
    }

    .marginR {
      margin-right: 6px;
    }
  }
}

.icon {
  margin-right: 4px;
}

.publish {
  margin-right: 10px;
}
</style>
