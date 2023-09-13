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
    <div class="content">
      <div v-if="questionList.length === 0">
        <el-empty description="暂无数据" />
      </div>
      <div v-else>
        <el-button class="clear-all" @click="clearAll">清空回收站</el-button>
        <el-table
          :data="questionList"
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
import { reactive } from "vue";
import ListSearch from "../../components/ListSearch.vue";

let questionList = reactive([
  {
    _id: "q1",
    title: "问卷1",
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: "3月10日 13:11",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: false,
    isStar: false,
    answerCount: 3,
    createdAt: "3月12日 13:21",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: "3月22日 13:41",
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: "3月22日 13:41",
  },
  {
    _id: "q5",
    title: "问卷5",
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: "3月22日 13:41",
  },
]);

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
  questionList.length = 0;
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
