<template>
  <v-app>
    <v-app-bar dark app class="my-4 mx-2">
      <v-img
        height="60px" width="60px"
        src="https://salsadigital.com.au/_nuxt/img/3e3115b.png"
      ></v-img>
      <router-link
        to="/purpose"
        style="text-decoration:none; color:white;margin-left:300px; margin-top:22px"
        >Purpose</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/about"
        style="text-decoration:none;margin-left:35px; color:white; margin-top:22px"
        >About<v-icon style="color:white; ">mdi-menu-down</v-icon></router-link
      >&nbsp;&nbsp;
      <router-link
        to="/expertise"
        style="text-decoration:none; margin-left:35px; color:white; margin-top:22px"
        >Expertise</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/insights"
        style="text-decoration:none; margin-left:35px; color:white; margin-top:22px"
        >Insights</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/caseStudies"
        style="text-decoration:none; margin-left:35px; color:white; margin-top:22px"
        >Case studies</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/services"
        style="text-decoration:none; margin-left:35px; color:white; margin-top:22px"
        >Services</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/contact"
        style="text-decoration:none; margin-left:35px;margin-right:10px; color:white; margin-top:22px"
        >Contact</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/search"
        style="text-decoration:none; margin-left:35px;margin-right:10px; color:white; margin-top:22px"
        >Search<v-icon color="white">mdi-magnify</v-icon></router-link
      >&nbsp;&nbsp;
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
