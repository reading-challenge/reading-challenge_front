<template>
  <div class="div">
    <div class="div-2">
      <img loading="lazy" class="img" src="@/assets/image/todolist_write.png" alt="" />
      <div class="div-3">
        <div class="div-12">루틴 챌린지</div>
        <div class="div-13">
          <span
            style="
              font-family:
                Noto Sans,
                -apple-system,
                Roboto,
                Helvetica,
                sans-serif;
              font-weight: 800;
              font-size: 40px;
            "
          >
            당신의 건강한 하루를 위한 페이스 메이커
          </span>
        </div>
      </div>
    </div>
    <div class="div-14">
      <div class="div-15">
        <img loading="lazy" class="img" src="@/assets/image/people.png" alt="" />
        <div class="div-16">
          <div class="div-17">지금, 루틴 챌린지에서<br />당신의 챌린지를 공유하세요!</div>
          <div class="div-18">
            하루 루틴을 ToDoList 로 관리하며 기록할 수 있습니다.<br />친구, 가족, 회원들과 챌린지를
            공유하며 함께할 수 있습니다.
          </div>
          <div class="div-19">
            <el-checkbox></el-checkbox>
            <div class="div-21">챌린지 보러 가기</div>
          </div>
        </div>
      </div>
      <div class="div-22">
        <div class="div-23">당신이 원하는 모든 챌린지에 참여할 수 있습니다.</div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b64e0e22dd47d4ba519fb4600cebdd10819a641952721a9729e9993d89ed43ce?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64e0e22dd47d4ba519fb4600cebdd10819a641952721a9729e9993d89ed43ce?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64e0e22dd47d4ba519fb4600cebdd10819a641952721a9729e9993d89ed43ce?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64e0e22dd47d4ba519fb4600cebdd10819a641952721a9729e9993d89ed43ce?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64e0e22dd47d4ba519fb4600cebdd10819a641952721a9729e9993d89ed43ce?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64e0e22dd47d4ba519fb4600cebdd10819a641952721a9729e9993d89ed43ce?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64e0e22dd47d4ba519fb4600cebdd10819a641952721a9729e9993d89ed43ce?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64e0e22dd47d4ba519fb4600cebdd10819a641952721a9729e9993d89ed43ce?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&"
          class="img-3"
          src=""
          alt=""
        />
      </div>
      <div class="div-24">
        <div class="div-25">
          <div class="div-26">
            <div class="column">
              <img loading="lazy" class="img-4" src="@/assets/image/routine_clear.png" alt="" />
            </div>
            <div class="column-2">
              <div class="div-27">
                <div class="div-28">당신의 미래는 <br />반복되는 루틴에 있습니다.</div>
                <div class="div-29">
                  <div class="div-30">나만의 루틴을 설정하여 관리하세요.</div>
                  <div class="div-31">
                    <el-checkbox></el-checkbox>
                    <div class="div-33">마이페이지 바로가기</div>
                  </div>
                </div>
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
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 1080px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: 45px 60px;
}

@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    padding: 0 20px;
  }
}

.img {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-3 {
  position: relative;
  display: flex;
  margin-bottom: 312px;
  width: 100%;
  max-width: 1332px;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    margin-bottom: 40px;
  }
}

.div-12 {
  color: #fff;
  margin-top: 347px;
  font:
    800 50px/107% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
}

.div-13 {
  color: #ffd2ab;
  margin-top: 23px;
  font:
    40px/75px Inter,
    sans-serif;
}

@media (max-width: 991px) {
  .div-13 {
    max-width: 100%;
    font-size: 40px;
    line-height: 67px;
  }
}

.div-14 {
  justify-content: center;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-14 {
    max-width: 100%;
  }
}

.div-15 {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  min-height: 1080px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: 400;
  padding: 50px 60px;
}

@media (max-width: 991px) {
  .div-15 {
    max-width: 100%;
    padding: 0 20px;
  }
}

.div-16 {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1330px;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-16 {
    margin: 40px 0;
    max-width: 100%;
  }
}

.div-17 {
  font:
    700 50px/75px Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-17 {
    max-width: 100%;
    font-size: 40px;
    line-height: 67px;
  }
}

.div-18 {
  margin-top: 45px;
  font:
    24px/45px Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-18 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-19 {
  align-self: start;
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 18px;
  font-size: 26px;
  white-space: nowrap;
  line-height: 173%;
}

@media (max-width: 991px) {
  .div-19 {
    margin-top: 40px;
    white-space: initial;
  }
}

.div-21 {
  font-feature-settings: 'case' on;
  font-family:
    Noto Sans,
    sans-serif;
  flex-grow: 1;
  margin: auto 0;
}

@media (max-width: 991px) {
  .div-21 {
    white-space: initial;
  }
}

.div-22 {
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 50px;
  color: #000;
  font-weight: 700;
  line-height: 75px;
  padding: 50px 0;
}

@media (max-width: 991px) {
  .div-22 {
    max-width: 100%;
    font-size: 40px;
    line-height: 67px;
  }
}

.div-23 {
  font-family:
    Noto Sans,
    sans-serif;
  align-self: center;
  font-size: 40px;
}

@media (max-width: 991px) {
  .div-23 {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
    line-height: 67px;
  }
}

.img-3 {
  align-self: center;
  aspect-ratio: 11.11;
  object-position: center;
  width: 85%;
  margin: 40px;
}

@media (max-width: 991px) {
  .img-3 {
    max-width: 100%;
    margin: 40px 0;
  }
}

.div-24 {
  background-color: rgba(236, 228, 238, 0.5);
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
}

@media (max-width: 991px) {
  .div-24 {
    max-width: 100%;
    padding: 0 20px;
  }
}

.div-25 {
  width: 100%;
  max-width: 1454px;
  margin: 110px 0 96px;
}

@media (max-width: 991px) {
  .div-25 {
    max-width: 100%;
    margin: 40px 0;
  }
}

.div-26 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-26 {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
}

.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 64%;
  margin-left: 0;
}

@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}

.img-4 {
  aspect-ratio: 1.06;
  object-position: center;
  width: 100%;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .img-4 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
}

@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}

.div-27 {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
}

@media (max-width: 991px) {
  .div-27 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-28 {
  color: #000;
  text-align: right;
  font:
    700 50px/75px Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-28 {
    max-width: 100%;
    font-size: 40px;
    line-height: 67px;
  }
}

.div-29 {
  display: flex;
  margin-top: 33px;
  padding-left: 51px;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-29 {
    max-width: 100%;
    padding-left: 20px;
  }
}

.div-30 {
  color: #000;
  text-align: right;
  font:
    400 30px/150% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-30 {
    max-width: 100%;
  }
}

.div-31 {
  align-self: end;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  white-space: nowrap;
  margin: 53px 14px 0 0;
}

@media (max-width: 991px) {
  .div-31 {
    white-space: initial;
    margin: 40px 10px 0 0;
  }
}

.div-33 {
  color: #000;
  text-align: justify;
  font-feature-settings: 'case' on;
  flex-grow: 1;
  font:
    26px/173% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-33 {
    white-space: initial;
  }
}
</style>
<script setup lang="ts"></script>
