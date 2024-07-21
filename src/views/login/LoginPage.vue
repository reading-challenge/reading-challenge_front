<script setup lang="ts">
import router from '@/router/router'
import { onMounted } from 'vue'

onMounted(() => {
  router.push({ name: 'loginform' })
})
</script>

<template>
  <div class="login-wrapper">
    <RouterView v-slot="{ Component }">
      <transition>
        <component :is="Component" style="width: 100%" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
.login-wrapper {
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
</style>
