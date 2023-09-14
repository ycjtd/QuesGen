<template>
  <div class="container">
    <el-space wrap style="margin-left: 90px">
      <el-icon size="24"><User /></el-icon>
      <h2>用户登录</h2>
    </el-space>
    <div>
      <el-form label-width="100px" style="max-width: 460px" :model="userInfo">
        <el-form-item label="用户名" name="username">
          <el-input v-model="userInfo.username" />
        </el-form-item>
        <el-form-item label="密码" name="password">
          <el-input type="password" v-model="userInfo.password" show-password />
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="isRemember" label="记住密码" />
        </el-form-item>
        <el-form-item>
          <el-space>
            <el-button type="primary" @click="submit">登录</el-button>
            <el-button type="text" @click="register" style="margin-left: 10px"
              >没有账户，请注册</el-button
            >
          </el-space>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";

const router = useRouter();

const userInfo = reactive({
  username: localStorage.getItem("USERNAME") || "",
  password: localStorage.getItem("PASSWORD") || "",
});

let isRemember = ref(true);

function register() {
  router.push("/register");
}

// 注册按钮
function submit() {
  if (isRemember.value) {
    // 选择记住密码，将账号密码存储到localStorage中
    localStorage.setItem("USERNAME", userInfo.username);
    localStorage.setItem("PASSWORD", userInfo.password);
  } else {
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("PASSWORD");
  }
}

// 将密码加密并存储到local
// function encryptAndStorePassword(password: string) {
//   const key = "ycjqyj";
//   const encryptedPassword = CryptoJS.AES.encrypt(password, key).toString();
//   localStorage.setItem("USERNAME", userInfo.username);
//   localStorage.setItem("PASSWORD", encryptedPassword);
// }

// 解密密码
// function decrypt() {
//   const key = "ycjqyj"; // 用于解密的秘钥，必须保密
//   const encryptedPassword = localStorage.getItem("PASSWORD");

//   const decryptedBytes = CryptoJS.AES.decrypt(encryptedPassword, key);
//   const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);
//   return decryptedPassword;
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
