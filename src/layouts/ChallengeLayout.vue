<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import router from '@/router'
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
          router.currentRoute.value.name !== 'myPage' ? '#fff' : 'rgba(255, 153, 0, 0.07)'
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

      <div class="div-34">
        <FooterComponent></FooterComponent>
      </div>

      <el-backtop />
    </el-main>
  </el-container>
</template>

<style></style>

<style scoped>
.div-34 {
  background-color: #fff;
  display: flex;
  width: 100%;
  min-width: 611px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 200px;
}

@media (max-width: 991px) {
  .div-34 {
    max-width: 100%;
    padding: 20px;
  }
}
</style>
