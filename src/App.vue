<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { commonStore } from '@/stores/modules/common'
import { utils } from '@/utils/utils'
import { serviceAPI } from '@/axios/serviceAPI'

onMounted(async () => {
  await commonStore().readConfig()
  utils.log('##### appconfig.json #####')
  utils.log(commonStore().appConfig)
  utils.log('##########################')

  utils.log('##### Test serviceAPI #####')
  let param = {}
  serviceAPI.reqTestAPI(param)
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
