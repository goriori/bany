<template>
  <div class="icon flex flex-center cursor-pointer">
    <q-img src="../../../assets/icons/vk.png" width="43px" height="43px" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VkIcon",
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
