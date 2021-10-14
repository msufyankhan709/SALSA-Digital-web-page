<template>
  <v-app>
    <v-app-bar
      style="margin-top:20px; margin-left:10px; margin-right:10px; background-color:black; height:70px"
    >
      <v-img
        style="width: 1.125rem; height: 4.4rem; margin-top:6px"
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
