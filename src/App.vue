<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { commonStore } from '@/stores/modules/common'
import { utils } from '@/utils/utils'

onMounted(async () => {
  utils.log("##### App onMounted #####")

  await commonStore().readConfig()
  utils.log('##### appconfig.json #####')
  utils.log(commonStore().appConfig)
  utils.log('##########################')
})
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
