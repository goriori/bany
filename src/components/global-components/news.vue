<template>
  <div class="new justify-between">
    <div class="image-new"></div>
    <div class="row">
      <h1 class="q-mt-md">{{ postSetting.date }}</h1>
      <h2 class="q-mt-md">{{ postSetting.type }}</h2>
    </div>
    <p class="q-mt-md">{{ postSetting.title }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NewBlock",
  data() {
    return {
      postSetting:{
        date:"14.01.21",
        type:"НОВОСТИ",
        title:"BUNYHOPE - СПИСОК ИЗМЕНЕНИЯ ОШИБОК"
      }
    };
  },
});
</script>

<style lang="scss" scoped>
.new {
  height: 414px;
  max-width:500px;
  .image-new {
    width:100%;
    height: 291px;
    background-color: #d9d9d9;
    margin-right: 30px;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ff4655;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #383e3a;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #383e3a;
  }
}
</style>
