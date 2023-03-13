<template>
  <q-page>
    <headerImage />
    <div class="newsContent ">
      <div class="newText flex items-center justify-between q-mb-xl">
        <h1>ПОСЛЕДНИЕ НОВОСТИ</h1>
        <h2>ПЕРЕЙТИ НА СТРАНИЦУ С НОВОСТИЯМИ →</h2>
      </div>
      <div class="newPosts">
        <newsBlock v-for="post in 3" :key="post" class="post" />
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
  margin:0 auto;
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
</style>
