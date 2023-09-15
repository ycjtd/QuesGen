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
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        :current-page="currentPage"
        @update:current-page="handleCurrentPageChange"
        @prev-click="handlePrevClick"
        @next-click="handleNextClick()"
      />
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
let currentPage = ref(
  // @ts-ignore
  parseInt(router.currentRoute.value.query.page || "") || 1
);

let searchObj = {
  keyword: router.currentRoute.value.query.keyword,
  // @ts-ignore
  page: parseInt(router.currentRoute.value.query.page || "") || 1,
  // @ts-ignore
  pageSize: parseInt(router.currentRoute.value.query.pageSize || ""),
};

onMounted(async () => {
  loading.value = true;
  // const data = await getQuestionList();
  const data = await useLoadQuestionListData(searchObj);
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
  // @ts-ignore
  searchObj = {
    keyword: newPath,
  };
  useLoadQuestionListData(searchObj);
}

// 点击上一页
const handlePrevClick = () => {
  console.log("handlePrevClick");
};

// 点击下一页
const handleNextClick = () => {
  console.log("handleNextClick");
};

// 页数发生变化
const handleCurrentPageChange = (val: number) => {
  console.log("handleCurrentPageChange", val);
  currentPage.value = val;
};
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
  display: flex;
  justify-content: center;
}
</style>
