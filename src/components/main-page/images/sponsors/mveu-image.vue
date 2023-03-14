<template>
  <div class="image flex flex-center ">
    <q-img src="../../../../assets/mveu.png" width="80px" height="93px" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MveuImage",
  data() {
    return {};
  },
});
</script>


<style lang="scss" scoped>
.icon {
  max-width: 63px;
  height: 63px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #292929;
  border-radius: 10px;
}
</style>
