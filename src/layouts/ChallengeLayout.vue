<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { RouterView } from 'vue-router'
import router from '@/router/router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const loadingOption = reactive({
  active: false,
  //spinner: "bar-fade-scale", // spinner, mini-spinner, ring, line-wave, line-scale, line-down, bar-fade, bar-fade-scale
  spinner: 'ring',
  //color: "red",
  color: '#0089DB',
  //"background-color": "rgba(255, 255, 255, 0.6)",
  'background-color': 'rgba(255, 255, 255, 0.7)',
  size: '100',
  duration: '0.6',
  delay: 0,
  'is-full-screen': true,
  text: '',
  //"text-style": { "font-size": "100%", color: "#333333" },
  //"text-style": { color: "#333333" },
  //"text-style": { "font-size": "90%", color: "#333333", "font-weight": "bold" },
  'text-style': { 'font-size': '100%', color: '#7F7F7F', 'font-weight': 'bold' },
  /**
   * 추가함
   */
  loadingCount: 0
})

onMounted(() => {
  useMittEvent(eventBus, EventName.LOADING, (val) => {
    //utils.log(val);
    if (val.text) {
      data.loadingOption.text = val.text
    }
    // } else {
    //   data.loadingOption.text = "Loading...";
    // }

    if (val.isVisible) {
      data.loadingOption.loadingCount++
    } else {
      data.loadingOption.loadingCount--
    }

    // 호출 수가 0이면 로딩 표시기 비활성화
    if (data.loadingOption.loadingCount < 1) {
      data.loadingOption.loadingCount = 0
      data.loadingOption.active = false
    } else {
      data.loadingOption.active = true
    }
  })

  router.push({ name: 'home' })
})
</script>

<template>
  <el-container>
    <vue-element-loading v-bind="loadingOption" style="z-index: 10001"> </vue-element-loading>

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
