<template>
  <div class="list-search">
    <el-input
      v-model="inputValue"
      size="large"
      placeholder="请输入问卷名进行搜索..."
      class="search"
      :suffix-icon="Search"
      @blur="handleSearch"
      @keyup.enter="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

let inputValue = ref(route.query.keyword);

function handleSearch() {
  router.push({
    path: route.path,
    query: { keyword: inputValue.value },
  });
}
</script>

<style scoped lang="less">
.list-search {
  color: red;
}

.search {
  width: 240px;
  border-radius: 50px !important;
}
</style>
