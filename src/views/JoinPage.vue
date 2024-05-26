<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface JoinForm {
  name: string
  id: string
  password: string
  email_id: string
  email_addr: string
  nickname: string
  profile_img: string
  birthday: string
  favorite: string
}

const formRef = ref<FormInstance>()
const formOption = reactive<JoinForm>({
  name: '',
  id: '',
  password: '',
  email_id: '',
  email_addr: '',
  nickname: '',
  profile_img: '',
  birthday: '',
  favorite: ''
})
const rules = reactive<FormRules<JoinForm>>({
  name: [{ required: true, message: '이름은 필수항목입니다.', trigger: 'blur' }],
  id: [{ required: true, message: '아이디는 필수항목입니다.', trigger: 'blur' }],
  password: [{ required: true, message: '비밀번호는 필수항목입니다.', trigger: 'blur' }],
  email_id: [{ required: true, message: '이메일은 필수항목입니다.', trigger: 'blur' }],
  email_addr: [{ required: true, message: '이메일은 필수항목입니다.', trigger: 'blur' }]
})
</script>

<template>
  <div class="div-11">
    <div class="div-12">
      <div class="div-13">회원가입</div>

      <el-form
        ref="formRef"
        style="height: 700px"
        :model="formOption"
        :rules="rules"
        label-width="auto"
        :size="'large'"
        status-icon
      >
        <p class="form-title">기본정보</p>
        <el-form-item label="이름" prop="name" required>
          <el-input v-model="formOption.name" placeholder="이름" />
        </el-form-item>
        <el-form-item label="아이디" prop="id" required>
          <el-col class="text-center" :span="18">
            <el-input v-model="formOption.id" placeholder="아이디" />
          </el-col>
          <el-col class="text-center" :span="6">
            <el-button type="warning">중복확인</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="비밀번호" prop="password" required>
          <el-input v-model="formOption.password" placeholder="비밀번호" />
          <el-input v-model="formOption.password" placeholder="비밀번호 확인" />
        </el-form-item>
        <el-form-item label="이메일" prop="email" required>
          <el-col :span="11">
            <el-form-item prop="email_id">
              <el-input v-model="formOption.email_id" placeholder="이메일" />
            </el-form-item>
          </el-col>
          <el-col style="text-align: center" :span="2">
            <span>@</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="email_addr">
              <el-input v-model="formOption.email_addr" placeholder="이메일주소" />
            </el-form-item>
          </el-col>
        </el-form-item>

        <p class="form-title">부가정보</p>
        <el-form-item label="닉네임" prop="nickname">
          <el-input v-model="formOption.nickname" placeholder="닉네임" />
        </el-form-item>
        <el-form-item label="프로필 사진" prop="profile_img">
          <el-col class="text-center" :span="18">
            <el-input v-model="formOption.profile_img" placeholder="선택된 파일 없음" />
          </el-col>
          <el-col class="text-center" :span="6">
            <el-button type="warning">선택</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="생년월일" prop="birthday">
          <el-date-picker
            v-model="formOption.birthday"
            type="date"
            aria-label="Pick a date"
            placeholder="연/월/일"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="관심분야" prop="favorite">
          <el-checkbox-group v-model="formOption.favorite">
            <el-checkbox value="자기계발" name="type"> 자기계발</el-checkbox>
            <el-checkbox value="학습" name="type"> 학습</el-checkbox>
            <el-checkbox value="운동" name="type"> 운동</el-checkbox>
            <el-checkbox value="건강" name="type"> 건강</el-checkbox>
            <el-checkbox value="기타" name="type"> 기타</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item>
          <el-button class="loginBtn" type="warning">JOIN</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.form-title {
  font-size: 20px;
  font-weight: bold;
  color: #666666;
  text-align: center;
}

.loginBtn {
  width: 100%;
  height: 56px;
  background-color: #ff6b00;
  font-size: 20px;
}

.loginBtn:hover {
  background-color: rgba(255, 107, 0, 0.8);
}

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

.div-13 {
  color: #ff6b00;
  text-align: center;
  align-self: center;
  margin: 20px 0;
  font:
    34px Noto Sans,
    sans-serif;
  font-weight: bold;
}
</style>
