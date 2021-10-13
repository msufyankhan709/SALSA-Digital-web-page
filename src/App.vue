<template>
  <v-app>
    <v-stepper-header style="margin-top:20px; background-color:black; height:70px">
      <h1 style="color:red">SALSA DIGITAL</h1>
      <router-link to="/purpose" style="text-decoration:none; color:white;margin-left:300px; margin-top:22px">Purpose</router-link>&nbsp;&nbsp;
      <router-link to="/about" style="text-decoration:none; color:white; margin-top:22px">About<v-icon style="color:white; ">mdi-menu-down</v-icon></router-link>&nbsp;&nbsp;
      <router-link to="/expertise" style="text-decoration:none; color:white; margin-top:22px">Expertise</router-link>&nbsp;&nbsp;
      <router-link to="/insights" style="text-decoration:none; color:white; margin-top:22px">Insights</router-link>&nbsp;&nbsp;
      <router-link to="/caseStudies" style="text-decoration:none; color:white; margin-top:22px">Case studies</router-link>&nbsp;&nbsp;
      <router-link to="/services" style="text-decoration:none; color:white; margin-top:22px">Services</router-link>&nbsp;&nbsp;
      <router-link to="/contact"  style="text-decoration:none; color:white; margin-top:22px">Contact</router-link>&nbsp;&nbsp;
    </v-stepper-header>

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
