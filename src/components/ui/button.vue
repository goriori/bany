<template>
  <button class="text-white">{{ title }}</button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "button-free-game",
  props: {
    title: String,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
button {
  max-width: 250px;
  width: 90%;
  max-height: 49px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff4655;
  border: none;


  padding-top: 17px;
  padding-bottom: 17px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;

  -webkit-box-shadow: 21px 21px 5px 10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 21px 21px 5px 10px rgba(0, 0, 0, 0.75);
  box-shadow: 15px 10px 5px 1px rgba(0, 0, 0, 0.75);

  cursor: pointer;
  transition: 0.2s;
}

button:hover{
  width: 100%;
  box-shadow: 19px 15px 10px 1px rgba(0, 0, 0, 0.75);
  transition: 0.3s;

}

</style>
