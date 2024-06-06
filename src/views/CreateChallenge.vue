<template>
  <div class="div">
    <div class="div-11">
      <div class="div-12">
        <div class="div-13">챌린지 생성</div>
        <div class="div-14">
          <div class="div-15">
            <div class="div-16">
              <div class="div-17">
                <el-col :span="10">
                  <div class="div-18">
                    <div class="div-19">대표 이미지</div>
                    <el-image
                      style="width: 100px; height: 100px"
                      src="@/assets/image/challenge_logo.png"
                      fit="fill"
                    />
                  </div>
                  <div class="div-57">
                    <div class="div-58">선택된 파일 없음</div>
                    <div class="div-59">▼</div>
                  </div>
                </el-col>

                <el-col :span="14">
                  <el-row>
                    <div class="div-23">제목</div>
                    <div class="div-24">제목을 입력하세요.</div>
                  </el-row>
                  <el-row>
                    <div class="div-26">주제</div>
                    <div class="div-27">
                      <div class="div-28"></div>
                      <div class="div-29">자기계발</div>
                      <div class="div-30">v</div>
                      <div class="div-31">학습</div>
                      <div class="div-32"></div>
                      <div class="div-33">운동</div>
                      <div class="div-34"></div>
                      <div class="div-35">건강</div>
                      <div class="div-36"></div>
                      <div class="div-37">기타</div>
                    </div>
                  </el-row>
                  <el-row>
                    <div class="div-39">기간</div>
                    <div class="div-40">
                      <div class="div-41">시작 날짜</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7ceeef0f86ed5ea00a5596f4479a86ffcf22f5be9f758816bd62371ddab9c7d?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&"
                        class="img-2"
                      />
                    </div>
                    <div class="div-42">~</div>
                    <div class="div-43">
                      <div class="div-44">종료 날짜</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7ceeef0f86ed5ea00a5596f4479a86ffcf22f5be9f758816bd62371ddab9c7d?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&"
                        class="img-3"
                      />
                    </div>
                  </el-row>
                  <el-row>
                    <div class="div-46">주기</div>
                    <div class="div-47">
                      <div class="div-48">v</div>
                      <div class="div-49">매일</div>
                    </div>
                    <div class="div-50">
                      <div class="div-51"></div>
                      <div class="div-52">평일</div>
                    </div>
                    <div class="div-53">
                      <div class="div-54"></div>
                      <div class="div-55">주말</div>
                    </div>
                    <div class="div-60">
                      <div class="div-61"></div>
                      <div class="div-62">주 1일</div>
                    </div>
                    <div class="div-63">
                      <div class="div-64"></div>
                      <div class="div-65">주 2일</div>
                    </div>
                    <div class="div-66">
                      <div class="div-67"></div>
                      <div class="div-68">주 3일</div>
                    </div>
                    <div class="div-69">
                      <div class="div-70"></div>
                      <div class="div-71">주 4일</div>
                    </div>
                    <div class="div-72">
                      <div class="div-73"></div>
                      <div class="div-74">주 5일</div>
                    </div>
                  </el-row>
                  <el-row>
                    <div class="div-77">한줄소개</div>
                    <div class="div-78">챌린지를 한줄로 소개해주세요.</div>
                  </el-row>
                  <el-row>
                    <div class="div-80">상세내용</div>
                    <div class="div-81">
                      <div class="div-82">
                        챌린지에 대해 설명해주세요.<br /><br />예 1) 하루에 한번씩 운동장을 운동장을
                        10 바퀴 돈다. <br />예 2) 운동 전 후 본인 얼굴과 함께 인증샷을 남긴다.<br />예
                        3) 참여하지 못하는 경우 댓글로 이유를 남긴다.<br />
                      </div>
                      <div class="div-83">0/500</div>
                    </div>
                  </el-row>

                  <el-row>
                    <el-button type="warning">생성하기</el-button>
                  </el-row>
                </el-col>
              </div>
            </div>
          </div>
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

.div-2 {
  border-bottom: 1px solid #eee;
  background-color: rgba(249, 249, 249, 0);
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #aaa;
  font-weight: 700;
  text-align: center;
  line-height: 187.5%;
  padding: 18px 60px;
}

@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    padding: 0 20px;
  }
}

.div-3 {
  display: flex;
  width: 1194px;
  max-width: 100%;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-3 {
    flex-wrap: wrap;
  }
}

.div-4 {
  display: flex;
  margin-top: 44px;
  justify-content: space-between;
  gap: 20px;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .div-4 {
    margin-top: 40px;
    white-space: initial;
  }
}

.div-5 {
  font-family:
    Noto Sans,
    sans-serif;
}

.div-6 {
  font-family:
    Noto Sans,
    sans-serif;
}

.img {
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 62px;
  align-self: stretch;
}

.div-7 {
  display: flex;
  margin-top: 44px;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-7 {
    margin-top: 40px;
  }
}

.div-8 {
  font-family:
    Noto Sans,
    sans-serif;
}

.div-9 {
  font-family:
    Noto Sans,
    sans-serif;
}

.div-10 {
  color: #999;
  font-family:
    Noto Sans,
    sans-serif;
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
  margin: 43px 0 42px;
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

.div-15 {
  display: flex;
  margin-top: 5px;
  width: 995px;
  max-width: 100%;
  flex-direction: column;
}

.div-16 {
}

@media (max-width: 991px) {
  .div-16 {
    max-width: 100%;
  }
}

.div-17 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-17 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 32%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column {
    width: 100%;
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

.div-19 {
  font-family:
    Noto Sans,
    sans-serif;
  align-self: center;
}

@media (max-width: 991px) {
  .div-19 {
    white-space: initial;
  }
}

.div-20 {
  border: 1px solid #b9b9b9;
  background-color: #fff;
  margin-top: 13px;
  height: 185px;
}

.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 68%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}

.div-21 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-21 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-22 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .div-22 {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
}

.div-23 {
  color: #333;
  flex-grow: 1;
  margin: auto 0;
  font:
    700 20px/225% Noto Sans,
    sans-serif;
}

.div-24 {
  border-radius: 5px;
  border: 1px solid #f90;
  background-color: #fff;
  flex-grow: 1;
  justify-content: center;
  align-items: start;
  color: #808080;
  padding: 15px 60px 15px 20px;
  font:
    400 18px/250% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-24 {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
}

.div-25 {
  display: flex;
  margin-top: 29px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  font-size: 20px;
  color: #333;
  white-space: nowrap;
  line-height: 225%;
}

@media (max-width: 991px) {
  .div-25 {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
}

.div-26 {
  font-family:
    Noto Sans,
    sans-serif;
  font-weight: 700;
  margin: auto 0;
}

.div-27 {
  display: flex;
  justify-content: space-between;
  gap: 13px;
  font-weight: 400;
}

@media (max-width: 991px) {
  .div-27 {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
}

.div-28 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  align-self: start;
  width: 28px;
  height: 26px;
}

.div-29 {
  font-family:
    Noto Sans,
    sans-serif;
  margin: auto 0;
}

.div-30 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #f90;
  aspect-ratio: 1.04;
  justify-content: center;
  align-items: center;
  height: 28px;
  color: #fff;
  padding: 0 7px;
  font:
    700 25px Sen,
    sans-serif;
}

@media (max-width: 991px) {
  .div-30 {
    white-space: initial;
  }
}

.div-31 {
  font-family:
    Noto Sans,
    sans-serif;
  margin: auto 0;
}

.div-32 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  align-self: start;
  width: 28px;
  height: 26px;
}

.div-33 {
  font-family:
    Noto Sans,
    sans-serif;
  align-self: start;
  margin-top: 7px;
}

.div-34 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  align-self: start;
  width: 28px;
  height: 26px;
}

.div-35 {
  font-family:
    Noto Sans,
    sans-serif;
  margin: auto 0;
}

.div-36 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  align-self: start;
  width: 28px;
  height: 26px;
}

.div-37 {
  font-family:
    Noto Sans,
    sans-serif;
  margin: auto 0;
}

.div-38 {
  display: flex;
  margin-top: 29px;
  justify-content: space-between;
  gap: 16px;
  font-size: 18px;
  color: #333;
  font-weight: 400;
  line-height: 250%;
}

@media (max-width: 991px) {
  .div-38 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.div-39 {
  margin: auto 0;
  font:
    700 20px/225% Noto Sans,
    sans-serif;
}

.div-40 {
  border-radius: 5px;
  border: 1px solid #f90;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #808080;
  padding: 11px 20px;
}

.div-41 {
  font-family:
    Noto Sans,
    sans-serif;
  margin: auto 0;
}

.img-2 {
  aspect-ratio: 1.04;
  object-fit: auto;
  object-position: center;
  width: 25px;
  fill: #ff6700;
}

.div-42 {
  text-align: center;
  font-family:
    Noto Sans,
    sans-serif;
  margin: auto 0;
}

.div-43 {
  border-radius: 5px;
  border: 1px solid #f90;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #808080;
  padding: 11px 20px;
}

.div-44 {
  font-family:
    Noto Sans,
    sans-serif;
  margin: auto 0;
}

.img-3 {
  aspect-ratio: 1.04;
  object-fit: auto;
  object-position: center;
  width: 25px;
  fill: #ff6700;
}

.div-45 {
  display: flex;
  margin-top: 29px;
  width: 395px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .div-45 {
    white-space: initial;
  }
}

.div-46 {
  color: #333;
  margin: auto 0;
  font:
    700 20px/225% Noto Sans,
    sans-serif;
}

.div-47 {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

@media (max-width: 991px) {
  .div-47 {
    white-space: initial;
  }
}

.div-48 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #f90;
  aspect-ratio: 1.04;
  justify-content: center;
  align-items: center;
  height: 28px;
  color: #fff;
  padding: 0 7px;
  font:
    700 25px Sen,
    sans-serif;
}

@media (max-width: 991px) {
  .div-48 {
    white-space: initial;
  }
}

.div-49 {
  color: #333;
  margin: auto 0;
  font:
    400 20px/225% Noto Sans,
    sans-serif;
}

.div-50 {
  align-self: start;
  display: flex;
  gap: 8px;
  font-size: 20px;
  color: #333;
  font-weight: 400;
  line-height: 225%;
}

@media (max-width: 991px) {
  .div-50 {
    white-space: initial;
  }
}

.div-51 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  width: 28px;
  height: 26px;
}

.div-52 {
  font-family:
    Noto Sans,
    sans-serif;
  margin: auto 0;
}

.div-53 {
  align-self: start;
  display: flex;
  gap: 8px;
  font-size: 20px;
  color: #333;
  font-weight: 400;
  line-height: 225%;
}

@media (max-width: 991px) {
  .div-53 {
    white-space: initial;
  }
}

.div-54 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  width: 28px;
  height: 26px;
}

.div-55 {
  font-family:
    Noto Sans,
    sans-serif;
  margin: auto 0;
}

.div-56 {
  display: flex;
  margin-top: 14px;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  font-size: 20px;
  font-weight: 400;
  white-space: nowrap;
  line-height: 225%;
}

@media (max-width: 991px) {
  .div-56 {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
}

.div-57 {
  display: flex;
  gap: 10px;
  font-size: 14px;
  line-height: 214%;
}

@media (max-width: 991px) {
  .div-57 {
    white-space: initial;
  }
}

.div-58 {
  font-family:
    Noto Sans,
    sans-serif;
  border-radius: 5px;
  border: 1px solid #b9b9b9;
  background-color: #fff;
  flex-grow: 1;
  justify-content: center;
  align-items: start;
  color: #808080;
  padding: 9px 60px 9px 18px;
}

@media (max-width: 991px) {
  .div-58 {
    white-space: initial;
    padding-right: 20px;
  }
}

.div-59 {
  font-family:
    Noto Sans,
    sans-serif;
  border-radius: 5px;
  background-color: #f90;
  aspect-ratio: 1.03;
  justify-content: center;
  align-items: center;
  height: 31px;
  color: #fff;
  text-align: center;
  padding: 0 9px;
}

@media (max-width: 991px) {
  .div-59 {
    white-space: initial;
  }
}

.div-60 {
  display: flex;
  margin-top: 5px;
  gap: 8px;
  color: #333;
}

@media (max-width: 991px) {
  .div-60 {
    white-space: initial;
  }
}

.div-61 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  width: 28px;
  height: 26px;
}

.div-62 {
  font-family:
    Noto Sans,
    sans-serif;
  flex-grow: 1;
  margin: auto 0;
}

@media (max-width: 991px) {
  .div-62 {
    white-space: initial;
  }
}

.div-63 {
  display: flex;
  margin-top: 5px;
  gap: 8px;
  color: #333;
}

@media (max-width: 991px) {
  .div-63 {
    white-space: initial;
  }
}

.div-64 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  width: 28px;
  height: 26px;
}

.div-65 {
  font-family:
    Noto Sans,
    sans-serif;
  flex-grow: 1;
  margin: auto 0;
}

@media (max-width: 991px) {
  .div-65 {
    white-space: initial;
  }
}

.div-66 {
  display: flex;
  margin-top: 5px;
  gap: 8px;
  color: #333;
}

@media (max-width: 991px) {
  .div-66 {
    white-space: initial;
  }
}

.div-67 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  width: 28px;
  height: 26px;
}

.div-68 {
  font-family:
    Noto Sans,
    sans-serif;
  flex-grow: 1;
  margin: auto 0;
}

@media (max-width: 991px) {
  .div-68 {
    white-space: initial;
  }
}

.div-69 {
  display: flex;
  margin-top: 5px;
  gap: 8px;
  color: #333;
}

@media (max-width: 991px) {
  .div-69 {
    white-space: initial;
  }
}

.div-70 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  width: 28px;
  height: 26px;
}

.div-71 {
  font-family:
    Noto Sans,
    sans-serif;
  flex-grow: 1;
  margin: auto 0;
}

@media (max-width: 991px) {
  .div-71 {
    white-space: initial;
  }
}

.div-72 {
  display: flex;
  margin-top: 5px;
  gap: 8px;
  color: #333;
}

@media (max-width: 991px) {
  .div-72 {
    white-space: initial;
  }
}

.div-73 {
  border-radius: 5px;
  border: 3px solid #f90;
  background-color: #fff;
  width: 28px;
  height: 26px;
}

.div-74 {
  font-family:
    Noto Sans,
    sans-serif;
  flex-grow: 1;
  margin: auto 0;
}

@media (max-width: 991px) {
  .div-74 {
    white-space: initial;
  }
}

.div-75 {
  align-self: end;
  display: flex;
  margin-top: 29px;
  width: 830px;
  max-width: 100%;
  flex-direction: column;
  align-items: end;
}

.div-76 {
  display: flex;
  width: 650px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .div-76 {
    flex-wrap: wrap;
    white-space: initial;
  }
}

.div-77 {
  color: #333;
  flex-grow: 1;
  margin: auto 0;
  font:
    700 20px/225% Noto Sans,
    sans-serif;
}

.div-78 {
  border-radius: 5px;
  border: 1px solid #f90;
  background-color: #fff;
  flex-grow: 1;
  justify-content: center;
  align-items: start;
  color: #808080;
  padding: 15px 60px 15px 20px;
  font:
    400 18px/250% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-78 {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
}

.div-79 {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-79 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.div-80 {
  color: #333;
  align-self: start;
  margin-top: 13px;
  flex-grow: 1;
  font:
    700 20px/225% Noto Sans,
    sans-serif;
}

.div-81 {
  border-radius: 5px;
  border: 1px solid #f90;
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  padding: 18px 20px;
}

@media (max-width: 991px) {
  .div-81 {
    max-width: 100%;
  }
}

.div-82 {
  color: #808080;
  font-family:
    Noto Sans,
    sans-serif;
  line-height: 30px;
}

@media (max-width: 991px) {
  .div-82 {
    max-width: 100%;
  }
}

.div-83 {
  color: #f90;
  text-align: right;
  font-family:
    Noto Sans,
    sans-serif;
  line-height: 167%;
  align-self: end;
  margin-top: 14px;
}

.div-84 {
  display: flex;
  margin-top: 20px;
  width: 550px;
  max-width: 100%;
  gap: 10px;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .div-84 {
    flex-wrap: wrap;
    white-space: initial;
  }
}

.div-85 {
  border-radius: 5px;
  border: 1px solid #f90;
  background-color: #fff;
  flex-grow: 1;
  justify-content: center;
  align-items: start;
  color: #808080;
  padding: 15px 60px 15px 20px;
  font:
    400 18px/250% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-85 {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
}

.div-86 {
  border-radius: 5px;
  background-color: #f90;
  aspect-ratio: 1.56;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 16px;
  font:
    700 14px/321% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-86 {
    white-space: initial;
  }
}

.div-87 {
  border-radius: 5px;
  background-color: #ff6b00;
  align-self: stretch;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  padding: 16px 60px;
  font:
    700 30px/133% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-87 {
    max-width: 100%;
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
}

.div-88 {
  border-top: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 39px 60px;
}

@media (max-width: 991px) {
  .div-88 {
    max-width: 100%;
    padding: 0 20px;
  }
}

.div-89 {
  display: flex;
  width: 1017px;
  max-width: 100%;
  flex-direction: column;
}

.div-90 {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-90 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.div-91 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .div-91 {
    max-width: 100%;
    white-space: initial;
  }
}

.div-92 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-92 {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
}

.div-93 {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 30px;
  color: rgba(255, 153, 0, 0.5);
  text-align: center;
  line-height: 100%;
}

@media (max-width: 991px) {
  .div-93 {
    white-space: initial;
  }
}

.img-4 {
  aspect-ratio: 0.96;
  object-fit: auto;
  object-position: center;
  width: 48px;
}

.div-94 {
  font-family:
    Noto Sans,
    sans-serif;
  flex-grow: 1;
  margin: auto 0;
}

.div-95 {
  color: #777;
  margin: auto 0;
  font:
    18px/111% Noto Sans,
    sans-serif;
}

.div-96 {
  color: #777;
  align-self: end;
  margin-top: 14px;
  font:
    18px/111% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-96 {
    white-space: initial;
  }
}

.div-97 {
  display: flex;
  margin-top: 13px;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  font-size: 16px;
  color: #888;
  font-weight: 400;
}

@media (max-width: 991px) {
  .div-97 {
    max-width: 100%;
  }
}

.div-98 {
  font-family:
    Noto Sans,
    sans-serif;
  line-height: 20px;
}

@media (max-width: 991px) {
  .div-98 {
    max-width: 100%;
  }
}

.div-99 {
  font-family:
    Noto Sans,
    sans-serif;
  margin-top: 18px;
}

@media (max-width: 991px) {
  .div-99 {
    max-width: 100%;
  }
}

.div-100 {
  color: #8d8c8c;
  align-self: center;
  margin-top: 29px;
  white-space: nowrap;
  font:
    400 14px/143% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-100 {
    white-space: initial;
  }
}
</style>
<script setup lang="ts"></script>
