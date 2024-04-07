<script setup lang="ts"></script>

<template>
  <div class="div-4">
    <div class="div-5">
      <div class="div-6">
        <RouterLink class="header-menu" to="/home">ABOUT</RouterLink>
      </div>
      <div class="div-7">
        <RouterLink class="header-menu" to="/main">CHALLENGE</RouterLink>
      </div>
    </div>

    <img loading="lazy" class="challenge_logo" src="@/assets/image/challenge_logo.png" alt="" />
    <div class="div-8">
      <div class="div-10">
        <RouterLink class="header-menu" to="/login">LOGIN</RouterLink>
      </div>
      <div class="div-9">
        <RouterLink class="header-menu" to="/myPage1">MY PAGE</RouterLink>
      </div>
    </div>
  </div>
</template>

<style></style>

<style scoped>
.header-menu {
  text-decoration: none;
  color: #ff6700;
  transition: 0.4s;
  padding: 3px;
  font-weight: bold;
}

.div-4 {
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 100%;
  align-items: end;
  justify-content: space-around;
  gap: 20px;
  font-size: 16px;
  text-align: center;
  line-height: 187.5%;
}

@media (max-width: 991px) {
  .div-4 {
    flex-wrap: wrap;
  }
}

.div-5 {
  display: flex;
  margin-top: 41px;
  justify-content: space-between;
  gap: 20px;
  color: #aaa;
}

@media (max-width: 991px) {
  .div-5 {
    margin-top: 40px;
  }
}

.div-7 {
  color: #999;
  font-family:
    Noto Sans,
    sans-serif;
}

.challenge_logo {
  aspect-ratio: 0.95;
  object-position: center;
  width: 62px;
  align-self: stretch;
}

.div-8 {
  display: flex;
  margin-top: 41px;
  justify-content: space-between;
  gap: 20px;
  color: #aaa;
}

@media (max-width: 991px) {
  .div-8 {
    margin-top: 40px;
  }
}

.div-9 {
  font-family:
    Noto Sans,
    sans-serif;
}

.div-10 {
  font-family:
    Noto Sans,
    sans-serif;
}
</style>
