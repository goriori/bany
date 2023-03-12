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
  -webkit-box-shadow: 21px 21px 5px 10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 21px 21px 5px 10px rgba(0, 0, 0, 0.75);
  box-shadow: 15px 10px 15px 5px rgba(0, 0, 0, 0.75);
  transition: 0.3s;
}

video:hover{
  transition: 0.3s;
  box-shadow: 20px 15px 15px 5px rgba(0, 0, 0, 0.75);
}
</style>
