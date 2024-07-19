<script setup lang="ts">
const challengeAuthList = [
  { nickname: 'user1', authDate: '2024년 6월 24일 21:56', authTitle: '오늘도 힘차게!' },
  { nickname: 'user1', authDate: '2024년 6월 24일 21:56', authTitle: '오늘도 힘차게!' },
  { nickname: 'user1', authDate: '2024년 6월 24일 21:56', authTitle: '오늘도 힘차게!' },
  { nickname: 'user1', authDate: '2024년 6월 24일 21:56', authTitle: '오늘도 힘차게!' },
  { nickname: 'user1', authDate: '2024년 6월 24일 21:56', authTitle: '오늘도 힘차게!' }
]
</script>

<template>
  <div class="div">
    <el-row :gutter="20">
      <el-col :span="12" style="display: flex; justify-content: center; align-items: center">
        <el-image style="width: 600px; height: 400px" src="" fit="fill" />
      </el-col>
      <el-col :span="12">
        <el-row class="challengeInfo-row">
          <span class="challenge-title">매일 운동하기</span>
          <el-tag class="title-tag" size="large" type="warning" effect="dark">진행중</el-tag>
          <el-tag class="title-tag" size="large" type="warning" effect="dark"
            >참여중인 챌린지
          </el-tag>
        </el-row>
        <el-row class="challengeInfo-row">
          <span class="div-19">2023.03.02~2023.06.31</span>
        </el-row>
        <el-row class="challengeInfo-row">
          <span class="div-20">현재 213명 참여 중</span>
        </el-row>
        <el-row class="challengeInfo-row">
          <span class="challenge-comment">챌린지 한 줄 소개 ~</span>
        </el-row>
        <el-row class="challengeInfo-row">
          <el-button class="applyBtn" type="warning" size="large">
            챌린지 참여하기
            <br />
            남은시간 : 00:28:53
          </el-button>
        </el-row>
      </el-col>
    </el-row>

    <el-divider style="margin: 30px 0 !important" />

    <div class="div-77">
      <div class="div-78">챌린지 인증</div>
      <div class="div-79">
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in challengeAuthList">
            <el-card class="auth-item">
              <img src="@/assets/image/challenge_logo.png" alt="" style="width: 100%" />
              <template #footer>
                <div>{{ item.nickname }}</div>
                <div>{{ item.authDate }}</div>
                <div>{{ item.authTitle }}</div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 5%;
}

.challengeInfo-row {
  margin-bottom: 25px;
}

.challenge-title {
  color: #ff6b00;
  font-size: 35px;
}

.title-tag {
  margin-left: 10px;
}

.div-19 {
  color: #666;
  font:
    400 22px/136% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-19 {
    max-width: 100%;
  }
}

.div-20 {
  color: #f90;
  font:
    18px/167% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
  }
}

.challenge-comment {
  font:
    18px/167% Noto Sans,
    sans-serif;
}

.applyBtn {
  width: 100%;
  height: 56px;
  background-color: #ff6b00;
  font-size: 20px;
  border-radius: 30px;
}

.div-77 {
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1560px;
  flex-direction: column;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-77 {
    max-width: 100%;
  }
}

.div-78 {
  color: #666;
  font:
    700 22px/136% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-78 {
    max-width: 100%;
  }
}

.div-79 {
  margin-top: 34px;
}

@media (max-width: 991px) {
  .div-79 {
    max-width: 100%;
  }
}

.auth-item:hover {
  cursor: pointer;
}
</style>
