<template>
  <q-page>
    <headerImage />
    <div class="newsContent">
      <div class="newText flex items-center justify-between q-mb-xl">
        <h1>ПОСЛЕДНИЕ НОВОСТИ</h1>
        <h2>ПЕРЕЙТИ НА СТРАНИЦУ С НОВОСТИЯМИ →</h2>
      </div>
      <div class="newPosts">
        <newsBlock v-for="post in 3" :key="post" class="post" />
      </div>
    </div>
    <div class="gameProcessContent">
      <p>ИГРОВОЙ ПРОЦЕСС</p>
      <div class="gameProcessAbout q-mt-xl row  justify-between">
        <div class="q-ml-lg">
          <p>ПРЕОДОЛЕВАЙ ВСЕ ГРАНИЦЫ</p>
          <h1 class="q-mt-lg">
            Bhop — это умение прыгать быстрее в симуляционных играх. Это просто
            паркур с воздушными завесами. Поверните налево и направо, прыгая,
            чтобы получить больше скорости и закончить карты быстрее, чем другие
            бхопперы. Избегайте падений и препятствий, поскольку они могут
            замедлить прыжок. Контрольные точки помогут вашему паркуру легко
            закончить 3D карты. Большие карты полны сложных прыгающих частей.
            Существуют сотни карт bhop . Если вы профессиональный прыгун или
            обманщик, вы можете с легкостью пройти все карты. Завершите крутые
            карты и получите свой мировой рекорд.
          </h1>
        </div>
        <div class="gameProcessVideo">
          <div>
            <div class="videoTitle row ">
              <h1>ИГРОВОЙ ПРОЦЕСС</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerNav />
  </q-page>
</template>


<script>
import { defineComponent } from "vue";
import headerImage from "src/components/main-page/header/header-section.vue";
import newsBlock from "src/components/global-components/news.vue";
import footerNav from "src/components/global-components/footer-nav.vue";

export default defineComponent({
  name: "MainPage",
  data() {
    return {};
  },
  components: {
    headerImage,
    newsBlock,
    footerNav,
  },
  methods: {},
  mounted() {},
});
</script>

<style lang="scss" scoped>
.newsContent {
  max-width: 1656px;
  width: 100%;
  margin: 0 auto;
  margin-top: 90px;
  .newText {
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      color: #ff4655;
      margin: 0;
    }

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ff4655;
    }
  }
}

.newPosts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;

  .post {
  }
}

.gameProcessContent {
  max-width: 1656px;
  width: 100%;
  margin: 0 auto;
  margin-top: 91px;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    color: #0f1923;
  }
  .gameProcessAbout {
    width: 100%;
    p {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #0f1923;
    }

    h1 {
      max-width: 380px;
      width: 100%;
      height: 537px;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #383e3a;
    }
  }

  .gameProcessVideo {
    max-width: 975px;
    width: 100%;
    div {
      width: 100%;
      height: 508px;
      background: #d9d9d9;
      .videoTitle {
        width: 144px;
        height: 26px;
        background: #ff4655;
        position: relative;
        left: -15px;
        top: 50px;
        h1 {

          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 9px;
          color: #ffffff;
          text-align: center;
        }
      }
    }
  }
}
</style>
