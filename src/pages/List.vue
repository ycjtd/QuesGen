<template>
  <div class="home">
    <h2>列表组件</h2>
    <QuestionCard :list="questionList" />
  </div>
</template>

<script setup lang="ts">
import QuestionCard from "../components/QuestionCard.vue";
import { reactive } from "vue";

const questionList = reactive([
  {
    id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: "3月10日 13:11",
  },
  {
    id: "q2",
    title: "问卷2",
    isPublished: false,
    isStar: false,
    answerCount: 3,
    createdAt: "3月12日 13:21",
  },
  {
    id: "q3",
    title: "问卷3",
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: "3月22日 13:41",
  },
  {
    id: "q4",
    title: "问卷4",
    isPublished: false,
    isStar: false,
    answerCount: 4,
    createdAt: "3月14日 14:11",
  },
]);
</script>

<style scoped lang="less">
.home {
  color: red;
}
</style>
