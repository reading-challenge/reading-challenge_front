<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import router from '@/router/router'

// 챌린저 참여 현황
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
let currentIdx: number = 0
const lastDay = ref<number>(0)
const tableOption = reactive({
  column: { label: '', prop: 'challenge', width: '175px', align: 'center' },
  items: [{ challenge: '챌린지1' }, { challenge: '챌린지2' }, { challenge: '챌린지3' }],
  totalRows: 0,
  pageNum: 1, // pagination때 필요
  rowsPerPage: 10, // pagination때 필요
  width: 1535,
  height: 400,
  searchData: {
    month: months[new Date().getMonth()]
  }
})
const onClickPrev = () => {
  // 이전 달
  currentIdx = months.findIndex((el) => el === tableOption.searchData.month)
  if (currentIdx < 1) {
    return
  }
  tableOption.searchData.month = months[currentIdx - 1]

  // 선택한 월의 마지막 날짜 구하기
  let lastDate = new Date(new Date().getFullYear(), currentIdx, 1)
  lastDate.setDate(0)
  lastDay.value = lastDate.getDate()
}

const onClickNext = () => {
  // 다음 달
  currentIdx = months.findIndex((el) => el === tableOption.searchData.month)
  if (currentIdx < 0 || currentIdx > months.length - 2) {
    return
  }
  tableOption.searchData.month = months[currentIdx + 1]

  // 선택한 월의 마지막 날짜 구하기
  let lastDate = new Date(new Date().getFullYear(), currentIdx + 2, 1)
  lastDate.setDate(0)
  lastDay.value = lastDate.getDate()
}

// 참여중인 챌린지 목록
const challengeList = [
  { title: '조깅 챌린지', content: '챌린지 소개 및 하고싶은 말', endDate: '1' },
  { title: '조깅 챌린지', content: '챌린지 소개 및 하고싶은 말', endDate: '1' },
  { title: '조깅 챌린지', content: '챌린지 소개 및 하고싶은 말', endDate: '1' },
  { title: '조깅 챌린지', content: '챌린지 소개 및 하고싶은 말', endDate: '1' },
  { title: '조깅 챌린지', content: '챌린지 소개 및 하고싶은 말', endDate: '1' },
  { title: '조깅 챌린지', content: '챌린지 소개 및 하고싶은 말', endDate: '1' },
  { title: '조깅 챌린지', content: '챌린지 소개 및 하고싶은 말', endDate: '1' },
  { title: '조깅 챌린지', content: '챌린지 소개 및 하고싶은 말', endDate: '1' }
]

onMounted(() => {
  console.log(router.currentRoute.value.name)

  currentIdx = months.findIndex((el) => el === tableOption.searchData.month)
  let lastDate = new Date(new Date().getFullYear(), currentIdx + 1, 1)
  lastDate.setDate(0)
  lastDay.value = lastDate.getDate()
})
</script>

<template>
  <div class="div-16">
    <div class="div-17">
      <div class="div-18">챌린지 참여 현황</div>
      <div class="div-19">수정</div>
    </div>
    <div class="div-20">
      <el-table
        :data="tableOption.items"
        :width="tableOption.width"
        :height="tableOption.height"
        fixed
        border
      >
        <el-table-column
          :label="tableOption.column.label"
          :prop="tableOption.column.prop"
          :width="tableOption.column.width"
          :align="tableOption.column.align"
        >
          <template #header style="display: flex; align-items: center">
            <span class="page-icon" @click="onClickPrev"><</span>
            <span class="page-text">{{ tableOption.searchData.month }}</span>
            <span class="page-icon" @click="onClickNext">></span>
          </template>
        </el-table-column>
        <el-table-column
          v-for="n in lastDay"
          :key="n"
          :label="`${n}`"
          :prop="`${n}`"
          width="45px"
          align="center"
        />
      </el-table>
    </div>

    <div class="div-108"></div>

    <div class="div-109">
      <div class="div-110">참여중인 챌린지 목록</div>
      <div class="div-111">새로운 챌린지 보러 가기</div>
    </div>
    <div class="div-112">
      <div class="div-113">
        <el-carousel
          trigger="click"
          height="500px"
          arrow="always"
          :initial-index="0"
          indicator-position="none"
          :autoplay="false"
          style="width: 100%"
        >
          <el-carousel-item v-for="item in challengeList" :key="item">
            <el-row :gutter="20" style="display: flex; justify-content: center">
              <el-col class="challenge-col" :span="6">
                <el-card class="challenge-item">
                  <img src="@/assets/image/challenge_logo.png" alt="" style="width: 100%" />
                  <template #footer>
                    <div>{{ item.title }}</div>
                    <div>{{ item.content }}</div>
                    <div>모집마감 {{ item.endDate }}일 전</div>
                  </template>
                </el-card>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-icon {
  cursor: pointer;
  font-size: 20px;
}

.page-icon:hover {
  font-weight: 1000;
}

.page-text {
  margin: 0 7px;
  display: inline-block;
  width: 72px;
  font-weight: bold;
}

.div-16 {
  display: flex;
  margin-top: 10px;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-16 {
    max-width: 100%;
  }
}

.div-17 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-17 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.div-18 {
  color: #555;
  flex-grow: 1;
  flex-basis: auto;
  font:
    700 26px/192% Noto Sans,
    sans-serif;
}

.div-19 {
  color: #999;
  text-align: right;
  font:
    400 20px/250% Noto Sans,
    sans-serif;
}

.div-20 {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
    white-space: initial;
  }
}

.div-108 {
  background-color: rgba(0, 0, 0, 0.1);
  margin: 30px 0;
  height: 1px;
}

@media (max-width: 991px) {
  .div-108 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-109 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-109 {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}

.div-110 {
  color: #555;
  flex-grow: 1;
  flex-basis: auto;
  font:
    700 26px/192% Noto Sans,
    sans-serif;
}

.div-111 {
  color: #999;
  text-align: right;
  flex-grow: 1;
  flex-basis: auto;
  font:
    400 20px/250% Noto Sans,
    sans-serif;
}

.div-113 {
  gap: 20px;
  display: flex;
}
</style>
