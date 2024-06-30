<script setup lang="ts">
import router from '@/router/router'

const userid: String = '루챌'
</script>

<template>
  <div
    v-if="
      router.currentRoute.value.name !== 'myChallenge' &&
      router.currentRoute.value.name !== 'myInfo'
    "
    class="header-wrapper"
  >
    <div class="menu-group">
      <div class="div-6">
        <RouterLink class="header-menu" to="/home">ABOUT</RouterLink>
      </div>
      <div class="div-7">
        <RouterLink class="header-menu" to="/mainchallenge">CHALLENGE</RouterLink>
      </div>
    </div>

    <img loading="lazy" class="challenge_logo" src="@/assets/image/challenge_logo.png" alt="" />
    <div class="menu-group">
      <div class="div-10">
        <RouterLink class="header-menu" to="/login">LOGIN</RouterLink>
      </div>
      <div class="div-9">
        <RouterLink class="header-menu" to="/myPage">MY PAGE</RouterLink>
      </div>
    </div>
  </div>

  <div v-else class="header-wrapper2">
    <div class="mypage-logo">
      <img loading="lazy" class="challenge_logo" src="@/assets/image/challenge_logo.png" alt="" />
      <span class="welcome-greeting">
        <span class="userid">{{ userid }}</span> 챌린저의 하루를 응원합니다!
      </span>
    </div>

    <div class="menu-group">
      <div>
        <RouterLink class="header-menu" to="/home">ABOUT</RouterLink>
      </div>
      <div class="div-7">
        <RouterLink class="header-menu" to="/mainchallenge">CHALLENGE</RouterLink>
      </div>
      <div>
        <RouterLink class="header-menu" to="/login">LOGIN</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mypage-logo {
  display: flex;
  align-items: center;
}

.welcome-greeting {
  font-size: 24px;
  margin-left: 15px;
}

.userid {
  font-weight: bold;
}

.header-wrapper {
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
  .header-wrapper {
    flex-wrap: wrap;
  }
}

.header-wrapper2 {
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 100%;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  text-align: center;
  line-height: 187.5%;
}

@media (max-width: 991px) {
  .header-wrapper2 {
    flex-wrap: wrap;
  }
}

.header-menu {
  text-decoration: none;
  color: #b4b4b4;
  transition: 0.4s;
  padding: 3px;
  font-weight: bold;
}

@media (hover: hover) {
  .header-menu:hover {
    background-color: rgba(180, 180, 180, 0.2);
  }
}

.menu-group {
  display: flex;
  margin-top: 41px;
  justify-content: space-between;
  gap: 20px;
  color: #aaa;
}

@media (max-width: 991px) {
  .menu-group {
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
