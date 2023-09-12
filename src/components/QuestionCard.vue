<template>
  <div class="questionCard">
    <h2>{{ props.list }}</h2>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

// 接收父组件传过来的值
const props = defineProps({
  list: Array,
});

const { list } = toRefs(props);
console.log(list);
</script>

<style scoped lang="less">
.questionCard {
  color: red;
}
</style>
