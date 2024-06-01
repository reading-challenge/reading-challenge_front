<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <el-container>
    <RouterView v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </RouterView>
  </el-container>
</template>

<style></style>

<style scoped></style>
