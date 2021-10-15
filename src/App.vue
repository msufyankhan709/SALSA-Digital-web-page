<template>
  <v-app>
    <v-app-bar dark app class="my-4 mx-5">
      <v-img
        height="60px"
        width="60px"
        src="https://salsadigital.com.au/_nuxt/img/3e3115b.png"
      ></v-img>
      <router-link
        to="/purpose"
        style="text-decoration:none; color:white;margin-left:300px; margin-top:10px"
        >Purpose</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/about"
        style="text-decoration:none;margin-left:35px; color:white; margin-top:10px"
        >About<v-icon style="color:white; ">mdi-menu-down</v-icon></router-link
      >&nbsp;&nbsp;
      <router-link
        to="/expertise"
        style="text-decoration:none; margin-left:35px; color:white; margin-top:10px"
        >Expertise</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/insights"
        style="text-decoration:none; margin-left:35px; color:white; margin-top:10px"
        >Insights</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/caseStudies"
        style="text-decoration:none; margin-left:35px; color:white; margin-top:10px"
        >Case studies</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/services"
        style="text-decoration:none; margin-left:35px; color:white; margin-top:10px"
        >Services</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/contact"
        style="text-decoration:none; margin-left:35px;margin-right:10px; color:white; margin-top:10px"
        >Contact</router-link
      >&nbsp;&nbsp;
      <router-link
        to="/search"
        style="text-decoration:none; margin-left:35px;margin-right:10px; color:white; margin-top:10px"
        >Search<v-icon color="white">mdi-magnify</v-icon></router-link
      >&nbsp;&nbsp;
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="mt-16 pt-6 mx-4" dark>
      <v-row>
        <v-col cols="4">
          <p class="ml-4">Purpose</p>
          <p class="ml-4">Exertise</p>
          <p class="ml-4">Case studies</p>
          <p class="ml-4">Contact</p>
        </v-col>
        <v-col cols="4">
          <p>About</p>
          <p>Insights</p>
          <p>Services</p>
        </v-col>
        <v-col cols="4">
          <p>Connect with us</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
        </v-col>
      </v-row>
      <p class="mx-16 px-16">
        Salsa is located on the traditional lands of the Wurundjeri-willam
        people of the Kulin Nation. We pay our respects to Elders both past and
        present and recognise Aboriginal and Torres Strait Islander people as
        the Traditional Custodians of the land.
      </p>
    </v-footer>
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
