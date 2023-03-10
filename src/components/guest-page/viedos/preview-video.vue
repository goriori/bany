<template>
  <video
    autoplay
    src="../../../assets/GuestPages/preview.mp4"
    controls
   muted
   loop

  ></video>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "previewVideo",
  data() {
    return {

    };
  },
});
</script>


<style lang="scss" scoped>
video {
  max-width: 800px;
  width: 100%;
  max-height: 500px;
}
</style>
