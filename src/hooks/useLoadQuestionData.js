import { getQuestionService } from "../api/question";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { ElLoading } from "element-plus";

export function useGetQuestionData() {
  const route = useRoute();
  let questionData = reactive({
    id: "",
    title: "",
  });

  onMounted(() => {
    init();
  });

  // 初始化
  const init = async () => {
    const isLoading = ElLoading.service({
      lock: true,
      text: "加载中",
      background: "rgba(0, 0, 0, 0.7)",
    });
    const data = await getQuestionService(route.params.id);
    questionData.id = data.id;
    questionData.title = data.title;
    isLoading.close();
  };
  return { questionData };
}
