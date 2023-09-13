<template>
  <div class="list">
    <div class="header">
      <div class="left">
        <h3>小木问卷 - 标星问卷</h3>
      </div>
      <div class="right"><ListSearch /></div>
    </div>
    <div class="content">
      <div v-if="questionList.length === 0">
        <el-empty description="暂无数据" />
      </div>
      <div v-else>
        <div v-for="item in questionList" :key="item._id">
          <QuestionCard :list="item" />
        </div>
      </div>
    </div>
    <div class="footer">分页</div>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from "../../components/QuestionCard.vue";
import { reactive } from "vue";
import ListSearch from "../../components/ListSearch.vue";

const questionList = reactive([
  {
    _id: "q1",
    title: "问卷1",
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createdAt: "3月10日 13:11",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: "3月12日 13:21",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createdAt: "3月22日 13:41",
  },
]);
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
}

.footer {
  text-align: center;
}
</style>
