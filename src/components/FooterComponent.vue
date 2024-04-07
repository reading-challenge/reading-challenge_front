<script setup lang="ts"></script>

<template>
  <div class="div-35">
    <div class="div-36">
      <div class="div-37">
        <div class="div-39">
          <img
            loading="lazy"
            class="challenge_logo"
            src="@/assets/image/challenge_logo.png"
            alt=""
          />
          <div class="div-40">루틴 챌린지</div>
        </div>
      </div>
      <div class="div-43">
        <div class="div-41">Info</div>
        <div class="div-44">
          <span style="font-weight: 700; color: rgba(136, 136, 136, 1)">CEO.</span>
          홍길동
          <span style="font-weight: 700; color: rgba(136, 136, 136, 1)">Addr.</span>
          대전광역시 유성구 언주로 508 14층 (역삼동, 서울상록빌딩)<br />
        </div>
        <div class="div-42">C/S Center</div>
        <div class="div-45">
          <span style="font-weight: 700; color: rgba(136, 136, 136, 1)">Tel/Fax.</span>
          02-1111-2222
          <span style="font-weight: 700; color: rgba(136, 136, 136, 1)">Business Num.</span>
          211-07-77799 02-1111-3333 ~ 4 | AM 10:00 ~ PM 6:00
        </div>
      </div>
    </div>
    <div class="div-46">Copyright by Routine Challenge Co., Ltd. All rights reserved.</div>
  </div>
</template>

<style></style>

<style scoped>
.div-35 {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.div-36 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

@media (max-width: 991px) {
  .div-36 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.div-37 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
  font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .div-37 {
    max-width: 100%;
    white-space: initial;
  }
}

.div-39 {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 30px;
  color: rgba(255, 153, 0, 0.5);
  text-align: center;
  line-height: 100%;
}

@media (max-width: 991px) {
  .div-39 {
    white-space: initial;
  }
}

.div-40 {
  font-family:
    Noto Sans,
    sans-serif;
  flex-grow: 1;
  margin: auto 0;
}

.div-41 {
  color: #777;
  margin: auto 0;
  font:
    18px/111% Noto Sans,
    sans-serif;
  font-weight: bold;
}

.div-42 {
  color: #777;
  margin-top: 14px;
  font:
    18px/111% Noto Sans,
    sans-serif;
  font-weight: bold;
}

@media (max-width: 991px) {
  .div-42 {
    white-space: initial;
  }
}

.div-43 {
  display: flex;
  margin-top: 13px;
  flex-grow: 2;
  flex-basis: 0;
  flex-direction: column;
  font-size: 16px;
  color: #888;
  font-weight: 400;
}

@media (max-width: 991px) {
  .div-43 {
    max-width: 100%;
  }
}

.div-44 {
  font-family:
    Noto Sans,
    sans-serif;
  line-height: 20px;
}

@media (max-width: 991px) {
  .div-44 {
    max-width: 100%;
  }
}

.div-45 {
  font-family:
    Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-45 {
    max-width: 100%;
  }
}

.div-46 {
  color: #8d8c8c;
  align-self: center;
  margin-top: 10px;
  white-space: nowrap;
  font:
    400 14px/143% Noto Sans,
    sans-serif;
}

@media (max-width: 991px) {
  .div-46 {
    white-space: initial;
  }
}
</style>
