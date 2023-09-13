<template>
  <div class="container">
    <el-space wrap style="margin-left: 90px">
      <el-icon size="24"><User /></el-icon>
      <h2>注册新用户</h2>
    </el-space>
    <div>
      <el-form
        label-width="100px"
        style="max-width: 460px"
        :model="userInfo"
        ref="myForm"
        :rules="formRules"
      >
        <el-form-item label="用户名" name="username" prop="username">
          <el-input v-model="userInfo.username" />
        </el-form-item>
        <el-form-item label="密码" name="password" prop="password">
          <el-input type="password" v-model="userInfo.password" show-password />
        </el-form-item>
        <el-form-item label="确认密码" name="confirm" prop="confirm">
          <el-input
            type="password"
            v-model="userInfo.confirmPassword"
            show-password
          />
        </el-form-item>
        <el-form-item label="昵称" name="nickname" prop="nickname">
          <el-input v-model="userInfo.nickname" />
        </el-form-item>
        <el-form-item>
          <el-space>
            <el-button type="primary" @click="submit">注册</el-button>
            <el-button type="text" @click="login" style="margin-left: 10px"
              >已有账户，请登录</el-button
            >
          </el-space>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive } from "vue";

const router = useRouter();

const userInfo = reactive({
  username: "",
  password: "",
  confirmPassword: "",
  nickname: "",
});

function login() {
  router.push("/login");
}

// 注册按钮
function submit() {
  console.log("userInfo", userInfo);
}

// 表单校验
const formRules = reactive({
  username: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    { min: 5, max: 20, message: "用户名长度应在5-20之间", trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 5, max: 20, message: "密码长度应在6-15之间", trigger: "blur" },
  ],
  confirm: [
    { required: true, message: "确认密码不能为空", trigger: "blur" },
    // {
    //   required: true,
    //   validator: validatePasswordConfirm, // 使用自定义校验函数
    //   message: "两次输出的密码必须一致",
    //   trigger: "blur",
    // },
  ],
  nickname: [{ required: true, message: "请输入合法的昵称", trigger: "blur" }],
});

// 确认密码校验
// function validatePasswordConfirm(rule, value: string, callback) {
//   console.log("value", value);
//   console.log("userInfo.confirmPassword", userInfo.confirmPassword);
//   if (value != userInfo.confirmPassword) {
//     callback(new Error("两次输入的密码不一致"));
//   } else {
//     callback(); // 校验通过
//   }
// }
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px - 120px);
}
</style>
