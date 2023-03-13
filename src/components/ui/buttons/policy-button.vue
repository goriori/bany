<template>
  <button class="text-white cursor-pointer">Политика конфиденциальности</button>
</template>



<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PolicyButton",
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
button {
  max-width: 415px;
  height: 43px;
  width: 100%;
  border: none;
  background: #111111;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  transition: 0.3s;
}

button:hover {
  transition: 0.3s;

  background: #292929;
}
</style>


