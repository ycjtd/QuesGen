<template>
  <div class="list">
    <div class="header">
      <div class="left">
        <h3>小木问卷 - 回收站</h3>
      </div>
      <div class="right">
        <ListSearch />
      </div>
    </div>
    <div class="content" v-loading="loading">
      <div v-if="state.questionList.length === 0">
        <el-empty description="暂无数据" />
      </div>
      <div v-else>
        <el-button class="clear-all" @click="clearAll">清空回收站</el-button>
        <el-table
          :data="state.questionList"
          style="width: 100%"
          border
          :cell-style="{ textAlign: 'center' }"
          :header-cell-style="{
            'text-align': 'center',
            background: '#eef1f6',
            color: '#606266',
          }"
          align="center"
        >
          <el-table-column prop="title" label="问卷名" width="400" />
          <el-table-column prop="createdAt" label="发布时间" width="180" />
          <el-table-column prop="answerCount" label="答卷数" />
          <el-table-column label="恢复">
            <template #default="scope">
              <el-icon
                size="large"
                style="color: #aad5ff"
                @click="refresh(scope)"
                class="pointer-style"
                ><CaretRight
              /></el-icon>
            </template>
          </el-table-column>
          <el-table-column label="彻底删除">
            <template #default="scope">
              <el-icon
                size="large"
                style="color: #f04346"
                @click="remove(scope)"
                class="pointer-style"
                ><Close
              /></el-icon>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="footer">分页</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, watch } from "vue";
import ListSearch from "../../components/ListSearch.vue";
import { useRouter } from "vue-router";
// @ts-ignore
import { useLoadQuestionListData } from "../../hooks/useLoadQuestionListData";
// @ts-ignore
import { getQuestionList } from "../../api/question";

const router = useRouter();
const state = reactive({
  questionList: [],
});
let loading = ref(true);
let searchObj = {
  keyword: router.currentRoute.value.query.keyword,
  isDeleted: true,
};

onMounted(async () => {
  loading.value = true;
  const data = await getQuestionList();
  useLoadQuestionListData(searchObj);
  state.questionList = data.list;
  loading.value = false;
});

watch(
  () => router.currentRoute.value.query.keyword,
  (newPath, oldPath) => {
    if (newPath !== oldPath) {
      search(newPath);
    }
  },
  { immediate: true }
);

function search(newPath: any) {
  searchObj = {
    isDeleted: true,
    keyword: newPath,
  };
  useLoadQuestionListData(searchObj);
}

// 恢复
function refresh(scope: any) {
  // TODO 恢复
  console.log(scope.row._id);
}

// 删除
function remove(scope: any) {
  // TODO 恢复
  console.log(scope.row._id);
}

// 清空回收站
function clearAll() {
  state.questionList.length = 0;
}
</script>

<style scoped lang="less">
.header {
  display: flex;

  .left {
    flex: 1;
    margin-left: 22px;
  }

  .right {
    flex: 1;
    text-align: right;
  }
}

.content {
  margin-top: 20px;

  .clear-all {
    float: right;
    margin-bottom: 10px;
  }
}

.footer {
  text-align: center;
}

.pointer-style {
  cursor: pointer;
}
</style>
