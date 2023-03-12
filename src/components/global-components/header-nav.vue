<template>
  <q-header class="flex bg-dark items-center">
    <div class="logo q-mr-xl">LOGO</div>
    <div class="navigations">
      <nav>
        <router-link v-for="nav in nav_settings" :key="nav" :to="nav.linkTo" class="q-mr-xl">
          <a>{{ nav.title }}</a>
        </router-link>
      </nav>
    </div>
  </q-header>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderNav",
  data() {
    return {
      nav_settings: [
        {
          title: "ОБ ИГРЕ",
          linkTo: "about",
        },
        {
          title: "НОВОСТИ",
          linkTo: "about",
        },
        {
          title: "ПОДДЕРЖКА",
          linkTo: "about",
        },
        {
          title: "СОЦИАЛЬНЫЕ СЕТИ",
          linkTo: "about",
        },
      ],
    };
  },
});
</script>


<style lang="scss" scoped>
.q-header {
  height: 100px;
}
a {
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  transition: 0.3s;
}

a:hover {

  color: #b9b5f5;
}
</style>
