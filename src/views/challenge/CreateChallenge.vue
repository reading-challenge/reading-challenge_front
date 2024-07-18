<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface ChallengeForm {
  id: string
  background_img: string
  title: string
  category: string
  start_date: string
  end_date: string
  cycle: string
  comment: string
  content: string
}

const formRef = ref<FormInstance>()
const formOption = reactive<ChallengeForm>({
  id: '',
  background_img: '',
  title: '',
  category: '',
  start_date: '',
  end_date: '',
  cycle: '',
  comment: '',
  content: ''
})
const rules = reactive<FormRules<ChallengeForm>>({
  title: [{ required: true, message: '제목은 필수항목입니다.', trigger: 'blur' }],
  category: [{ required: true, message: '주제는 필수항목입니다.', trigger: 'blur' }],
  start_date: [{ required: true, message: '시작 날짜는 필수항목입니다.', trigger: 'blur' }],
  end_date: [{ required: true, message: '종료 날짜는 필수항목입니다.', trigger: 'blur' }]
})
</script>

<template>
  <div class="div">
    <div class="div-11">
      <div class="div-12">
        <div class="div-13">챌린지 생성</div>
        <div class="div-14">
          <el-form
            ref="formRef"
            :model="formOption"
            :rules="rules"
            label-width="auto"
            :size="'large'"
            status-icon
            style="width: 100%; display: flex; flex-direction: column"
          >
            <el-row style="width: 100%">
              <el-col :span="10" style="height: 100%">
                <el-row>
                  <div class="div-18">대표 이미지</div>
                </el-row>
                <el-row>
                  <el-image
                    style="width: 100%; height: 300px"
                    src="formOption.background_img"
                    fit="fill"
                  />
                </el-row>
                <el-row gutter="5" style="margin-top: 10px; display: flex">
                  <el-col :span="20">
                    <el-form-item prop="background_img" style="margin: 0">
                      <el-input
                        v-model="formOption.background_img"
                        placeholder="선택한 이미지가 없습니다."
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col
                    :span="4"
                    style="display: flex; justify-content: center; align-items: center"
                  >
                    <el-button type="warning">▼</el-button>
                  </el-col>
                </el-row>
              </el-col>

              <el-col :span="14" style="padding-left: 40px">
                <el-row class="">
                  <el-form-item label="제목" prop="title">
                    <el-input v-model="formOption.title" placeholder="제목을 입력하세요." />
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="주제" prop="category">
                    <el-checkbox-group v-model="formOption.category">
                      <el-checkbox value="자기계발" name="type"> 자기계발</el-checkbox>
                      <el-checkbox value="학습" name="type"> 학습</el-checkbox>
                      <el-checkbox value="운동" name="type"> 운동</el-checkbox>
                      <el-checkbox value="건강" name="type"> 건강</el-checkbox>
                      <el-checkbox value="기타" name="type"> 기타</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="기간">
                    <el-date-picker
                      v-model="formOption.start_date"
                      type="date"
                      placeholder="시작"
                    />
                    <span style="margin: 0 8px">~</span>
                    <el-date-picker v-model="formOption.end_date" type="date" placeholder="종료" />
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="주기" prop="cycle">
                    <el-checkbox-group v-model="formOption.cycle">
                      <el-checkbox value="everyday" name="type"> 매일</el-checkbox>
                      <el-checkbox value="weekday" name="type"> 평일</el-checkbox>
                      <el-checkbox value="weekend" name="type"> 주말</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="한 줄 소개" prop="comment">
                    <el-input
                      v-model="formOption.comment"
                      placeholder="챌린지를 한 줄로 표현해보세요."
                      style="width: 500px"
                    />
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="상세내용" prop="content">
                    <el-input
                      v-model="formOption.content"
                      type="textarea"
                      placeholder="챌린지에 대해 설명해주세요.
예 1) 하루에 한번씩 운동장을 운동장을 10 바퀴 돈다.
예 2) 운동 전 후 본인 얼굴과 함께 인증샷을 남긴다
예 3) 참여하지 못하는 경우 댓글로 이유를 남긴다."
                      style="width: 500px"
                      :autosize="{ minRows: 5 }"
                      maxlength="500"
                      show-word-limit
                    />
                  </el-form-item>
                </el-row>
              </el-col>
            </el-row>
            <el-row style="margin-top: 10px; justify-content: center">
              <el-button type="warning" style="width: 800px">생성하기</el-button>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.div-11 {
  background-color: rgba(255, 103, 0, 0.05);
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
}

@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    padding: 0 20px;
  }
}

.div-12 {
  display: flex;
  width: 1200px;
  max-width: 100%;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-12 {
    margin: 40px 0;
  }
}

.div-13 {
  color: #ff6b00;
  text-align: center;
  align-self: center;
  font:
    bold 34px Noto Sans,
    sans-serif;
}

.div-14 {
  border-radius: 30px;
  background-color: #fff;
  display: flex;
  margin-top: 35px;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
}

@media (max-width: 991px) {
  .div-14 {
    max-width: 100%;
    padding: 0 20px;
  }
}

.div-18 {
  display: flex;
  margin-top: 13px;
  flex-grow: 1;
  flex-direction: column;
  font-size: 20px;
  color: #333;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  line-height: 225%;
}

@media (max-width: 991px) {
  .div-18 {
    margin-top: 40px;
    white-space: initial;
  }
}
</style>
