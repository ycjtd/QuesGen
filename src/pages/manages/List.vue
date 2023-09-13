<template>
  <div class="list">
    <div class="header">
      <div class="left">
        <h3>我的问卷</h3>
      </div>
      <div class="right"><ListSearch /></div>
    </div>
    <div class="content">
      <div v-for="item in questionList" :key="item._id">
        <QuestionCard :list="item" />
      </div>
    </div>
    <div class="footer">loadMore... 上划加载更多...</div>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from "../../components/QuestionCard.vue";
import { reactive, watch } from "vue";
import ListSearch from "../../components/ListSearch.vue";
import { useRouter } from "vue-router";

const router = useRouter();

watch(
  () => router.currentRoute.value.query.keyword,
  (newPath, oldPath) => {
    if (newPath !== oldPath) {
      search(router.currentRoute.value.query.keyword);
    }
  },
  { immediate: true }
);

const questionList = reactive([
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
    isStar: true,
    answerCount: 5,
    createdAt: "3月22日 13:41",
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: false,
    isStar: false,
    answerCount: 4,
    createdAt: "3月14日 14:11",
  },
]);

function search(val: string) {
  console.log("触发搜索", val);
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
}

.footer {
  text-align: center;
}
</style>
