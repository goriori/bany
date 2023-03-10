<template>
  <q-layout view="lHh Lpr lFf" class="wrapper">
    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "GuestLayout",
  components: {},

  data() {
    return {

    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper{
  background-image: url('../assets/GuestPages/backgroundGuest.png');
  background-repeat: no-repeat;
  background-size: cover;
}


</style>
