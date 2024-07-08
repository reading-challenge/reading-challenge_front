<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import router from '@/router/router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

onMounted(() => {
  router.push({ name: 'home' })
})
</script>

<template>
  <el-container>
    <el-header
      :style="{
        backgroundColor:
          router.currentRoute.value.name !== 'myChallenge' &&
          router.currentRoute.value.name !== 'myInfo'
            ? '#fff'
            : 'rgba(255, 153, 0, 0.07)'
      }"
    >
      <HeaderComponent></HeaderComponent>
    </el-header>

    <el-divider />

    <el-main>
      <RouterView v-slot="{ Component }">
        <transition>
          <component :is="Component" style="width: 100%" />
        </transition>
      </RouterView>

      <el-divider />

      <el-footer>
        <FooterComponent></FooterComponent>
      </el-footer>

      <el-backtop />
    </el-main>
  </el-container>
</template>

<style></style>

<style scoped></style>
