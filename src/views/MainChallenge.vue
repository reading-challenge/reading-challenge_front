<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import router from '@/router'

// 조회 카테고리 드롭다운
const categoryList = ['전체', '자기계발', '학습', '운동', '건강', '기타']
const selectedCategory = ref('')
const onClickCategory = (event: PointerEvent) => {
  if (event.target) {
    const selectedDropEl = event.target as HTMLElement
    selectedCategory.value = selectedDropEl.innerText
  }
}

// 정렬 기준 드롭다운
const sortList = ['인기순', '최신순', '모집마감일순']
const selectedSort = ref('')
const onClickSort = (event: PointerEvent) => {
  if (event.target) {
    const selectedDropEl = event.target as HTMLElement
    selectedSort.value = selectedDropEl.innerText
  }
}

// 챌린지 목록
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

// 챌린지 생성
const shouldShiftPosition = ref(false)
window.addEventListener('scroll', () => {
  shouldShiftPosition.value = window.scrollY === 0
})
const onClickCreateChallenge = () => {
  router.push({ name: 'createchallenge' })
}

onMounted(() => {
  selectedCategory.value = categoryList[0]
  selectedSort.value = sortList[0]
})
</script>

<template>
  <div class="div">
    <div class="process-wrapper">
      <el-row class="process-icon-box">
        <img
          loading="lazy"
          class="process-icon-img"
          src="@/assets/image/process_start_off.png"
          alt=""
        />
        <img
          loading="lazy"
          class="process-icon-img"
          src="@/assets/image/process_ing_off.png"
          alt=""
        />
        <img
          loading="lazy"
          class="process-icon-img"
          src="@/assets/image/process_end_off.png"
          alt=""
        />
      </el-row>
      <el-row class="process-line-box">
        <img loading="lazy" class="process-line-img" src="@/assets/image/process_line.png" alt="" />
      </el-row>
      <el-row class="process-name-box">
        <span class="process-name">진행 예정</span>
        <span class="process-name">진행중</span>
        <span class="process-name">진행 종료</span>
      </el-row>
    </div>

    <div class="search-menu">
      <el-dropdown class="category-dropdown">
        <span class="el-dropdown-link">
          {{ selectedCategory }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="category-dropdown-menu">
            <el-dropdown-item v-for="c in categoryList" @click="onClickCategory">
              {{ c }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown class="sort-dropdown">
        <span class="el-dropdown-link">
          {{ selectedSort }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="s in sortList" @click="onClickSort">
              {{ s }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div class="div-26">
      <el-row :gutter="20">
        <el-col class="challenge-col" :span="6" v-for="item in challengeList">
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
    </div>
    <el-row style="display: flex; justify-content: center">
      <el-pagination layout="prev, pager, next" :total="50" />
    </el-row>

    <el-tooltip class="box-item" effect="dark" content="챌린지 생성" placement="top">
      <el-button
        class="create-challenge-btn"
        :class="{ 'fix-position': shouldShiftPosition }"
        type="warning"
        circle
        @click="onClickCreateChallenge"
        >+
      </el-button>
    </el-tooltip>
  </div>
</template>

<style scoped>
.fix-position {
  bottom: 50px !important;
}

.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.process-wrapper {
  margin: 15px 0;
}

.process-icon-box {
  justify-content: space-evenly;
}

.process-icon-box:hover {
  cursor: pointer;
}

.process-name-box {
  justify-content: space-evenly;
}

.process-name-box:hover {
  cursor: pointer;
}

.process-name {
  text-align: center;
}

.process-line-box {
  justify-content: center;
}

.process-line-img {
  width: 90%;
}

.process-name {
  color: #ff9000;
  font-weight: bold;
}

.search-menu {
  display: flex;
  width: 100%;
  max-width: 100%;
  gap: 20px;
  font-weight: 400;
  white-space: nowrap;
  margin: 15px 0;
}

@media (max-width: 991px) {
  .search-menu {
    flex-wrap: wrap;
    white-space: initial;
  }
}

.div-26 {
  align-self: stretch;
}

@media (max-width: 991px) {
  .div-26 {
    max-width: 100%;
    padding-right: 20px;
  }
}
</style>
