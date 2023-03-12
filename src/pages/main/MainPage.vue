<template>
  <q-page>
    <div class="header q-mb-xl"></div>
    <div class="newsContent">
      <div class="newText full-width row  justify-between  content-start q-mb-xl">
        <h1>ПОСЛЕДНИЕ НОВОСТИ</h1>
        <h2>ПЕРЕЙТИ НА СТРАНИЦУ С НОВОСТИЯМИ →</h2>
      </div>
      <newsBlock></newsBlock>
    </div>
  </q-page>
</template>


<script>
import { defineComponent } from "vue";
import newsBlock from "src/components/global-components/news.vue";
export default defineComponent({
  name: "MainPage",
  data() {
    return {};
  },
  components: {
    newsBlock,
  },
  methods: {},
  mounted() {},
});
</script>

<style lang="scss" scoped>
.header {
  background: url("../../assets/GuestPages/backgroundMain.png") no-repeat;
  background-size: cover;
  height: 703px;
  width: 100%;
}

.newText {
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    color: #ff4655;
    margin:0;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ff4655;
  }
}
</style>
