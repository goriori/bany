<template>
  <q-header class="flex bg-dark animate__animated animate__fadeInDown">
    <div class="logo q-mr-xl flex items-center"><logoMain /></div>
    <div class="navigations">
      <nav class="row">
        <router-link
          v-for="nav in nav_settings"
          :key="nav"
          :to="nav.linkTo"
          class="q-mr-xl column"
        >
          <a>{{ nav.title }}</a>
        </router-link>
      </nav>
    </div>
  </q-header>
</template>

<script>
import { defineComponent } from "vue";
import "animate.css";
import logoMain from "./logo-main.vue";
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
  components: { logoMain },
});
</script>


<style lang="scss" scoped>
.logo {
  padding-left: 130px;
}
nav {
  height: 100%;
  padding-top: 41px;
}
.q-header {
  width: 100%;
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

a:after {
  content: "";
  width: 0%;
  height: 5px;
  background: #ff4655;
  border-radius: 10px;
  transition: 0.25s;
  margin: 0 auto;
  margin-top: 24px;
}

a:hover::after {
  width: 100%;
  transition: 0.25s;
}
</style>
