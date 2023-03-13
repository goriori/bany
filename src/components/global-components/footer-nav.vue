<template>
  <footer class="text-white bg-black">
    <div class="downloadGame bg-dark flex flex-center q-pa-md">
      <downloadButton />
    </div>
    <div class="otherContent">
      <div class="icons flex flex-center q-mt-xl">
        <vkIcon class="q-ma-sm" />
        <telegramIcon class="q-ma-sm" />
        <mailIcon class="q-ma-sm" />
      </div>
      <div class="sponsors flex flex-center q-mt-xl">
        <logoMain class="q-mr-xl" />
        <characterImage width="97px" height="116px" class="q-ml-xm" />
      </div>
      <div class="aboutInformation flex justify-evenly q-mt-xl">
        <policyButton />
        <termsButton />
      </div>
      <div class="textContent flex flex-center q-mt-xl">
        <p>
          © 2023 LUDOPROS, BunyHope и все связанные с ними логотипы являются
          торговыми знаками или зарегистрированными торговыми знаками,
          принадлежащими LUDOPROS.
        </p>
      </div>
    </div>
  </footer>
</template>


<script>
import { defineComponent } from "vue";
import downloadButton from "../ui/buttons/download-button.vue";
import vkIcon from "../ui/icons/vk-icon.vue";
import telegramIcon from "../ui/icons/telegram-icon.vue";
import mailIcon from "../ui/icons/mail-icon.vue";
import logoMain from "./logo-main.vue";
import characterImage from "../guest-page/images/character-image.vue";
import policyButton from "../ui/buttons/policy-button.vue";
import termsButton from "../ui/buttons/terms-button.vue";
export default defineComponent({
  name: "FooterNav",
  data() {
    return {};
  },
  components: {
    downloadButton,
    vkIcon,
    telegramIcon,
    mailIcon,
    logoMain,
    characterImage,
    policyButton,
    termsButton,
  },
});
</script>


<style lang="scss" scoped>
.textContent {
  p {
    max-width: 895px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #383e3a;
  }
}
</style>
