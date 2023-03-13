<template>
  <div class="flex flex-center header-section text-white animate__animated animate__fadeInDown">
    <div class="information  q-mr-xl">
      <p class="flex flex-center text-h5" >Прыгай, не останавливайся и побеждай</p>
      <p class="flex flex-center text-h1 text-weight-bolder q-mt-md" >BunnyHope</p>
      <buttonVue title="Скачать" class="q-mt-xl"  />
    </div>
    <characterImage width="371px" height="439px" />
  </div>
</template>



<script>
import { defineComponent } from "vue";
import "animate.css";
import characterImage from "src/components/guest-page/images/character-image.vue";
import buttonVue from "src/components/ui/button.vue";
export default defineComponent({
  name: "HeaderImage",
  data() {
    return {};
  },
  components: { characterImage, buttonVue },
});
</script>

<style lang="scss" scoped>
.header-section {

  background-image: url("../../../assets/MainPage/backgroundMain.png");
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 1920px;
  width: 100%;
  height: 795px;
}
</style>
