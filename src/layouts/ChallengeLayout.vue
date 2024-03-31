<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import router from '@/router'

onMounted(() => {
  router.push({ name: 'home' })
})
</script>

<template>
  <el-container>
    <el-header>
      <div class="div-4">
        <div class="div-5">
          <div class="div-6">
            <RouterLink to="/home">ABOUT</RouterLink>
          </div>
          <div class="div-7">
            <RouterLink to="/main">CHALLENGE</RouterLink>
          </div>
        </div>

        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0763034c7461d22a83342bb2a3de914e1b46aa310b80f1b0fc3676448dd3553?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0763034c7461d22a83342bb2a3de914e1b46aa310b80f1b0fc3676448dd3553?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0763034c7461d22a83342bb2a3de914e1b46aa310b80f1b0fc3676448dd3553?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0763034c7461d22a83342bb2a3de914e1b46aa310b80f1b0fc3676448dd3553?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0763034c7461d22a83342bb2a3de914e1b46aa310b80f1b0fc3676448dd3553?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0763034c7461d22a83342bb2a3de914e1b46aa310b80f1b0fc3676448dd3553?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0763034c7461d22a83342bb2a3de914e1b46aa310b80f1b0fc3676448dd3553?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0763034c7461d22a83342bb2a3de914e1b46aa310b80f1b0fc3676448dd3553?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&"
          class="img-2"
        />
        <div class="div-8">
          <div class="div-10">
            <RouterLink to="/login">LOGIN</RouterLink>
          </div>
          <div class="div-9">
            <RouterLink to="/mypage1">MY PAGE</RouterLink>
          </div>
        </div>
      </div>
    </el-header>

    <el-main>
      <RouterView v-slot="{ Component }">
        <transition>
          <component :is="Component" style="width: 100%; height: 100%" />
        </transition>
      </RouterView>
    </el-main>

    <el-footer>
      <div class="div-34">
        <div class="div-35">
          <div class="div-36">
            <div class="div-37">
              <!--              <div class="div-38">-->
              <div class="div-39">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/716e08bb421be8e566c42aa650035e4c917c07e7e9ca4f1dd9d3d14d0d572375?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/716e08bb421be8e566c42aa650035e4c917c07e7e9ca4f1dd9d3d14d0d572375?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/716e08bb421be8e566c42aa650035e4c917c07e7e9ca4f1dd9d3d14d0d572375?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/716e08bb421be8e566c42aa650035e4c917c07e7e9ca4f1dd9d3d14d0d572375?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/716e08bb421be8e566c42aa650035e4c917c07e7e9ca4f1dd9d3d14d0d572375?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/716e08bb421be8e566c42aa650035e4c917c07e7e9ca4f1dd9d3d14d0d572375?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/716e08bb421be8e566c42aa650035e4c917c07e7e9ca4f1dd9d3d14d0d572375?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/716e08bb421be8e566c42aa650035e4c917c07e7e9ca4f1dd9d3d14d0d572375?apiKey=d213af4abfe044f4b8c2d54b9aa44ab0&"
                  class="img-5"
                />
                <div class="div-40">루틴 챌린지</div>
              </div>
              <!--              </div>-->
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
      </div>
    </el-footer>
  </el-container>
</template>

<style></style>

<style scoped>
.div-4 {
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 100%;
  align-items: end;
  justify-content: space-around;
  gap: 20px;
  font-size: 16px;
  text-align: center;
  line-height: 187.5%;
}

@media (max-width: 991px) {
  .div-4 {
    flex-wrap: wrap;
  }
}

.div-5 {
  display: flex;
  margin-top: 41px;
  justify-content: space-between;
  gap: 20px;
  color: #aaa;
}

@media (max-width: 991px) {
  .div-5 {
    margin-top: 40px;
  }
}

.div-7 {
  color: #999;
  font-family:
    Noto Sans,
    sans-serif;
}

.img-2 {
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 62px;
  align-self: stretch;
}

.div-8 {
  display: flex;
  margin-top: 41px;
  justify-content: space-between;
  gap: 20px;
  color: #aaa;
}

@media (max-width: 991px) {
  .div-8 {
    margin-top: 40px;
  }
}

.div-9 {
  font-family:
    Noto Sans,
    sans-serif;
}

.div-10 {
  font-family:
    Noto Sans,
    sans-serif;
}

.div-34 {
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 39px 60px;
}

@media (max-width: 991px) {
  .div-34 {
    max-width: 100%;
    padding: 20px;
  }
}

.div-35 {
  display: flex;
  width: 1017px;
  max-width: 100%;
  flex-direction: column;
}

.div-36 {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
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
  flex-basis: 0%;
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

.div-38 {
  align-self: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-38 {
    max-width: 100%;
    flex-wrap: wrap;
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

.img-5 {
  aspect-ratio: 0.96;
  object-fit: auto;
  object-position: center;
  width: 48px;
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
  flex-grow: 1;
  flex-basis: 0%;
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
  margin-top: 29px;
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
