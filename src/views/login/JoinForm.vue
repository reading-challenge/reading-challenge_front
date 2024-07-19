<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { User } from '@/types/User/UserAccount'

// 회원가입
const joinFormRef = ref<FormInstance>()
const joinFormOption = reactive<User>({
  userId: '',
  userPw: '',
  email: '',
  phone: '',
  birthday: new Date(),
  favoriteSub: '',
  profileSrc: '',
  nickname: ''
})
const joinFormRules = reactive<FormRules<User>>({
  // name: [{ required: true, message: '이름은 필수항목입니다.', trigger: 'blur' }],
  userId: [{ required: true, message: '아이디는 필수항목입니다.', trigger: 'blur' }],
  userPw: [{ required: true, message: '비밀번호는 필수항목입니다.', trigger: 'blur' }],
  email: [{ required: true, message: '이메일은 필수항목입니다.', trigger: 'blur' }]
})
</script>

<template>
  <div class="div-11">
    <div class="div-12">
      <div class="form-title">회원가입</div>

      <el-form
        ref="joinFormRef"
        style="height: 700px"
        :model="joinFormOption"
        :rules="joinFormRules"
        label-width="auto"
        :size="'large'"
        status-icon
      >
        <p class="form-subtitle">기본정보</p>
        <!-- <el-form-item label="이름" prop="name" required>
          <el-input v-model="joinFormOption.name" placeholder="이름" />
        </el-form-item> -->
        <el-form-item label="아이디" prop="userId" required>
          <el-col :span="18">
            <el-input v-model="joinFormOption.userId" placeholder="아이디" />
          </el-col>
          <el-col style="padding-left: 10px" :span="6">
            <el-button type="warning">중복확인</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="비밀번호" prop="userPw" required>
          <el-input v-model="joinFormOption.userPw" placeholder="비밀번호" />
          <el-input v-model="joinFormOption.userPw" placeholder="비밀번호 확인" />
        </el-form-item>
        <el-form-item label="이메일" prop="email" required>
          <el-col :span="11">
            <el-form-item prop="email">
              <el-input v-model="joinFormOption.email" placeholder="이메일" />
            </el-form-item>
          </el-col>
          <el-col style="text-align: center" :span="2">
            <span>@</span>
          </el-col>
        </el-form-item>

        <p class="form-subtitle">부가정보</p>
        <el-form-item label="닉네임" prop="nickname">
          <el-input v-model="joinFormOption.nickname" placeholder="닉네임" />
        </el-form-item>
        <el-form-item label="프로필 사진" prop="profileSrc">
          <el-col :span="18">
            <el-input v-model="joinFormOption.profileSrc" placeholder="선택된 파일 없음" />
          </el-col>
          <el-col style="padding-left: 10px" :span="6">
            <el-button type="warning">선택</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="생년월일" prop="birthday">
          <el-date-picker
            v-model="joinFormOption.birthday"
            type="date"
            aria-label="Pick a date"
            placeholder="연/월/일"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="관심분야" prop="favorite">
          <el-checkbox-group v-model="joinFormOption.favoriteSub">
            <el-checkbox value="자기계발" name="type"> 자기계발</el-checkbox>
            <el-checkbox value="학습" name="type"> 학습</el-checkbox>
            <el-checkbox value="운동" name="type"> 운동</el-checkbox>
            <el-checkbox value="건강" name="type"> 건강</el-checkbox>
            <el-checkbox value="기타" name="type"> 기타</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item>
          <el-button class="joinBtn" type="warning">JOIN</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.div-11 {
  background-color: rgba(255, 103, 0, 0.05);
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  white-space: nowrap;
  padding: 50px 60px;
}

@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    white-space: initial;
    padding: 20px;
  }
}
.div-12 {
  height: fit-content;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  width: 630px;
  max-width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

@media (max-width: 991px) {
  .div-12 {
    white-space: initial;
    padding: 0 20px;
  }
}

.form-title {
  color: #ff6b00;
  text-align: center;
  align-self: center;
  margin: 20px 0;
  font:
    34px Noto Sans,
    sans-serif;
  font-weight: bold;
}

.form-subtitle {
  font-size: 20px;
  font-weight: bold;
  color: #666666;
  text-align: center;
  margin: 10px 0;
}

.joinBtn {
  width: 100%;
  height: 56px;
  background-color: #ff6b00;
  font-size: 20px;
}

.joinBtn:hover {
  background-color: rgba(255, 107, 0, 0.8);
}
</style>
