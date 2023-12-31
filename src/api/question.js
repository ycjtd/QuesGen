import ajax from "../services/ajax";

// 获取单个问卷信息
export async function getQuestionService(id) {
  let url = `/api/question/${id}`;
  const { data } = await ajax({ url });
  return data;
}

// 创建问卷
export async function createQuestion() {
  let url = "/api/question";
  const { data } = await ajax({
    url,
    method: "post",
  });
  return data;
}

// 获取问卷列表
export async function getQuestionList(searchOption = {}) {
  let url = "/api/question";
  const { data } = await ajax({
    url,
    method: "get",
    params: searchOption,
  });
  return data;
}

// 修改单个问卷信息
export async function updateQuestionService(id, opt) {
  let url = `/api/question/${id}`;
  const { data } = await ajax.patch(url, opt);
  return data;
}

// 复制信息
export async function copyQuestionService(id) {
  let url = `/api/question/duplicate/${id}`;
  const { data } = await ajax.post(url);
  return data;
}
