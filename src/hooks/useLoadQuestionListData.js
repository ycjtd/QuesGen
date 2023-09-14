import { getQuestionList } from "../api/question";

export async function useLoadQuestionListData(searchObj) {
  const data = await getQuestionList(searchObj);
  return data;
}
