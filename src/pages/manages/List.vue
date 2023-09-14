<template>
  <div class="list">
    <div class="header">
      <div class="left">
        <h3>我的问卷</h3>
      </div>
      <div class="right"><ListSearch /></div>
    </div>
    <div class="content" v-loading="loading">
      <div v-for="item in state.questionList" :key="item._id">
        <QuestionCard :list="item" />
      </div>
    </div>
    <div class="footer" v-if="state.questionList.length">
      loadMore... 上划加载更多...
    </div>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from "../../components/QuestionCard.vue";
import { reactive, watch, onMounted, ref } from "vue";
import ListSearch from "../../components/ListSearch.vue";
import { useRouter } from "vue-router";
// @ts-ignore
import { getQuestionList } from "../../api/question";
// @ts-ignore
import { useLoadQuestionListData } from "../../hooks/useLoadQuestionListData";

const router = useRouter();
const state = reactive({
  questionList: [],
});
let loading = ref(true);
let searchObj = {
  keyword: router.currentRoute.value.query.keyword,
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
    keyword: newPath,
  };
  useLoadQuestionListData(searchObj);
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
