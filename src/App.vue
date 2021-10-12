<template>
  <v-app>
    <v-stepper-header style="margin-top:20px; background-color:black; height:50px">
      <h1 style="color:red">SALSA DIGITAL</h1>
      <router-link to="/purpose" style="color:white; ">Purpose</router-link>&nbsp;&nbsp;
      <router-link to="/about" style="color:white">About</router-link>&nbsp;&nbsp;
      <router-link to="/expertise" style="color:white">Expertise</router-link>&nbsp;&nbsp;
      <router-link to="/insights" style="color:white">Insights</router-link>&nbsp;&nbsp;
      <router-link to="/caseStudies" style="color:white">Case studies</router-link>&nbsp;&nbsp;
      <router-link to="/services" style="color:white">Services</router-link>&nbsp;&nbsp;
      <router-link to="/contact"  style="color:white">Contact</router-link>&nbsp;&nbsp;
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
