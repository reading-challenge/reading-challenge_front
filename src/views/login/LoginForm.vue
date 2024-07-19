<script setup lang="ts"></script>

<template>
  <div class="div-11">
    <div class="div-12">
      <div class="form-title">로그인</div>
      <el-input class="login-input" placeholder="아이디" />
      <el-input class="login-input" placeholder="비밀번호" />
      <el-button class="login-btn" type="warning">LOGIN</el-button>
      <div class="div-16">
        <RouterLink class="login-menu" to="/login">아이디 찾기</RouterLink>
        <span class="div-18">|</span>
        <RouterLink class="login-menu" to="/login">비밀번호 찾기</RouterLink>
        <span class="div-18">|</span>
        <RouterLink class="login-menu" to="/join">회원가입</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div-11 {
  background-color: rgba(255, 103, 0, 0.05);
  display: flex;
  flex-grow: 1;
  height: 660px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  white-space: nowrap;
  padding: 50px 60px;
}

@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    white-space: initial;
    padding: 20px;
  }
}

.div-12 {
  height: 100%;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  width: 630px;
  max-width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 65px;
}

@media (max-width: 991px) {
  .div-12 {
    white-space: initial;
    padding: 0 20px;
  }
}

.form-title {
  color: #ff6b00;
  text-align: center;
  align-self: center;
  margin: 20px 0;
  font:
    34px Noto Sans,
    sans-serif;
  font-weight: bold;
}

.login-input {
  width: 100%;
  height: 56px;
  margin-bottom: 20px;
}

.login-btn {
  width: 100%;
  height: 56px;
  background-color: #ff6b00;
  font-size: 20px;
}

.login-btn:hover {
  background-color: rgba(255, 107, 0, 0.8);
}

.div-16 {
  width: 100%;
  align-self: center;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  margin: 25px 0;
  gap: 11px;
  font-size: 20px;
  color: #999;
  line-height: 100%;
}

@media (max-width: 991px) {
  .div-16 {
    white-space: initial;
  }
}

.login-menu {
  color: #999;
  text-align: center;
  align-self: center;
  text-decoration: none;
}

.login-menu:hover {
  text-decoration: underline;
}

.div-18 {
  text-align: center;
  font-family:
    Noto Sans,
    sans-serif;
}
</style>
