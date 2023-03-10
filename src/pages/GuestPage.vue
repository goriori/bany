<template>
  <q-page class="text-white flex flex-center justify-evenly">
    <div class="information">
      <p class="q-ma-none animate__animated animate__fadeInDown">
        Прыгай, не останавливайся и побеждай
      </p>
      <h4 class="logo q-ma-none q-mt-md animate__animated animate__fadeInDown">
        BunyHope
      </h4>
      <buttonComponent
        title="Играй бесплатно"
        class="q-mt-xl animate__animated animate__pulse"
      />
    </div>
    <characterImage class="animate__animated animate__flash cursor-pointer "  v-if="contentVisibility === false" @click="viewContent" />
    <previewVideo class="animate__animated animate__fadeInDown" v-if="contentVisibility === true" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import "animate.css";
import buttonComponent from "src/components/ui/button.vue";
import characterImage from "src/components/guest-page/images/character-image.vue";
import previewVideo from "src/components/guest-page/viedos/preview-video.vue";
export default defineComponent({
  name: "GuestPage",
  data(){
    return {
      contentVisibility:false
    }
  },
  components: { buttonComponent, characterImage, previewVideo },
  methods:{
    viewContent(){
      this.contentVisibility = true
      
    }
  }
});
</script>

<style lang="scss" scoped>
.logo {
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
}
</style>
