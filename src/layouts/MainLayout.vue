<template>
  <q-layout view="lHh Lpr lFf">
    <headerNav/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import headerNav from "src/components/global-components/header-nav.vue";
export default defineComponent({
  name: "MainLayout",
  components: {headerNav},

  data() {
    return {

    };
  },
});
</script>
