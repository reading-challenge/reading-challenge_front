<script setup lang="ts">
import { onMounted } from 'vue'
import router from '@/router/router'
import { RouterView } from 'vue-router'

let userid: String = '루챌'
let email: String = 'example@naver.com'

onMounted(() => {
  router.push({ name: 'myChallenge' })
})
</script>

<template>
  <div class="div">
    <div class="div-9">
      <div class="div-10">
        <el-avatar :size="250" src="@/assets/image/profile_img.png" />
        <!-- <img loading="lazy" src="@/assets/image/profile_img.png" class="img-2" alt="" />-->
        <div class="div-11">{{ userid }}</div>
        <div class="div-12">{{ email }}</div>
        <img class="profile-underline" src="@/assets/image/profile_underline.png" alt="" />

        <RouterLink class="mypage-menu" to="myChallenge">나의 챌린지</RouterLink>
        <RouterLink class="mypage-menu" to="myInfo">나의 정보</RouterLink>
      </div>

      <div class="div-15"></div>

      <RouterView v-slot="{ Component }">
        <transition>
          <component :is="Component" style="width: 100%" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.profile-underline {
  margin: 50px 0;
}

.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.div-9 {
  align-self: center;
  display: flex;
  margin: 15px 0;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.div-10 {
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
  color: #333;
  font-weight: 700;
  text-align: center;
  line-height: 192%;
}

@media (max-width: 991px) {
  .div-10 {
    margin-top: 40px;
  }
}

.div-11 {
  font-family:
    Noto Sans,
    sans-serif;
  line-height: 115%;
  margin-top: 28px;
}

.div-12 {
  align-self: stretch;
  margin-top: 11px;
  font:
    400 20px/100% Noto Sans,
    sans-serif;
}

.mypage-menu {
  color: #555;
  font-family:
    Noto Sans,
    sans-serif;
  font-weight: 400;
  text-decoration: none;
}

.div-15 {
  border-right: 3px solid rgba(255, 153, 0, 0.07);
  align-self: stretch;
  width: 3px;
}
</style>
