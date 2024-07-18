<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface JoinForm {
  name: string
  id: string
  password: string
  new_password: string
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
  new_password: '',
  email_id: '',
  email_addr: '',
  nickname: '',
  profile_img: '',
  birthday: '',
  favorite: ''
})
const rules = reactive<FormRules<JoinForm>>({
  password: [{ required: true, message: '비밀번호는 필수항목입니다.', trigger: 'blur' }],
  email_id: [{ required: true, message: '이메일은 필수항목입니다.', trigger: 'blur' }],
  email_addr: [{ required: true, message: '이메일은 필수항목입니다.', trigger: 'blur' }]
})
</script>

<template>
  <div class="myinfo-wrapper">
    <div class="myinfo-subwrapper">
      <div class="myinfo-title">나의 정보</div>

      <el-form
        ref="formRef"
        style="height: 700px"
        :model="formOption"
        :rules="rules"
        label-width="auto"
        :size="'large'"
        status-icon
      >
        <el-form-item label="이름" prop="name">
          <el-input v-model="formOption.name" placeholder="이름" readonly />
        </el-form-item>
        <el-form-item label="아이디" prop="id">
          <el-input v-model="formOption.id" placeholder="아이디" readonly />
        </el-form-item>
        <el-form-item label="현재 비밀번호" prop="password" required>
          <el-input v-model="formOption.password" placeholder="현재 비밀번호" />
        </el-form-item>
        <el-form-item label="변경할 비밀번호" prop="password">
          <el-input v-model="formOption.new_password" placeholder="비밀번호" />
          <el-input v-model="formOption.new_password" placeholder="비밀번호 확인" />
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

        <el-form-item label="닉네임" prop="nickname">
          <el-input v-model="formOption.nickname" placeholder="닉네임" />
        </el-form-item>
        <el-form-item label="프로필 사진" prop="profile_img">
          <el-col :span="18">
            <el-input v-model="formOption.profile_img" placeholder="선택된 파일 없음" />
          </el-col>
          <el-col style="padding-left: 10px" :span="6">
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
          <el-row style="width: 100%">
            <el-button class="myinfoBtn" type="warning">수정</el-button>
          </el-row>
          <el-row style="width: 100%">
            <el-button class="myinfoBtn">회원탈퇴</el-button>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.myinfo-wrapper {
  display: flex;
  justify-content: center;
  min-width: 700px;
}

.myinfo-subwrapper {
  max-width: 700px;
}

.myinfo-title {
  color: #ff6b00;
  text-align: center;
  align-self: center;
  margin: 20px 0;
  font:
    34px Noto Sans,
    sans-serif;
  font-weight: bold;
}

.myinfoBtn {
  width: 100%;
}
</style>
