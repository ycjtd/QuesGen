<template>
  <div class="Edit">
    <h2>{{ questionData.id }}</h2>
    <h2>{{ questionData.title }}</h2>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { useGetQuestionData } from "../../../hooks/useLoadQuestionData";

const { questionData } = useGetQuestionData();
</script>

<style scoped lang="less">
.Edit {
  color: red;
}
</style>
