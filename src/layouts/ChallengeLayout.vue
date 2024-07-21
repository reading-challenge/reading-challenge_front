<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { RouterView } from 'vue-router'
import { serviceAPI } from '@/axios/serviceAPI'
import router from '@/router/router'
import { emitter, EventName, useMittEvent } from '@/mitt/mitt'
import { utils } from '@/utils/utils'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import VueElementLoading from 'vue-element-loading'

// loading
const loadingOption = reactive({
  active: false,
  spinner: 'ring', //spinner: "bar-fade-scale", // spinner, mini-spinner, ring, line-wave, line-scale, line-down, bar-fade, bar-fade-scale
  color: '#0089DB',
  'background-color': 'rgba(255, 255, 255, 0.7)',
  size: '100',
  duration: '0.6',
  delay: 0,
  'is-full-screen': true,
  text: '',
  'text-style': { 'font-size': '100%', color: '#7F7F7F', 'font-weight': 'bold' },
  loadingCount: 0 // 임의로 추가
})

onMounted(() => {
  utils.log('##### ChallengeLayout onMounted #####')

  // loading 이벤트 등록
  useMittEvent(emitter, EventName.LOADING, (val) => {
    utils.log(val)
    if (val.text) {
      loadingOption.text = val.text
    } else {
      loadingOption.text = 'Loading...'
    }

    if (val.isVisible) {
      loadingOption.loadingCount++
    } else {
      loadingOption.loadingCount--
    }

    // 호출 수가 0이면 로딩 표시기 비활성화
    if (loadingOption.loadingCount < 1) {
      loadingOption.loadingCount = 0
      loadingOption.active = false
    } else {
      loadingOption.active = true
    }
  })

  // 초기 화면 라우팅
  router.push({ name: 'home' })

  // axios test api 호출
  utils.log('##### Test serviceAPI #####')
  let param = {}
  serviceAPI.reqTestAPI(param)
})
</script>

<template>
  <el-container>
    <VueElementLoading v-bind="loadingOption" color="rgb(255, 68, 0)" style="z-index: 10001">
    </VueElementLoading>

    <el-header
      :style="{
        backgroundColor:
          router.currentRoute.value.name !== 'mychallenge' &&
          router.currentRoute.value.name !== 'myinfo'
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
