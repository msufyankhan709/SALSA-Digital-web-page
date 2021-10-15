<template>
  <v-app style="margin-left:20px;margin-right:20px">
    <v-app-bar dark class="mb-16">
      <h1 style="margin-left:120px; margin-top:20px;">
        About
      </h1>
      <p
        style="margin-left:320px; margin-right:670px; margin-top:200px; color:white"
      >
        <router-link
          style="text-decoration:none; color:white;"
          to="/about/overview"
          >Overview</router-link
        ><v-divider></v-divider>
        <router-link style="text-decoration:none; color:white" to="/about/team"
          >Team</router-link
        ><v-divider></v-divider>
        <router-link
          style="text-decoration:none; color:white"
          to="/about/ourBoard"
          >Our board</router-link
        ><v-divider></v-divider>
        <router-link style="text-decoration:none; color:white" to="/about/news"
          >News & events</router-link
        ><v-divider></v-divider>
        <router-link
          style="text-decoration:none; color:white"
          to="/about/contributions"
          >Contributions</router-link
        ><v-divider></v-divider>
        <router-link
          style="text-decoration:none; color:white"
          to="/about/careers"
          >Careers at SALSA</router-link
        >
      </p>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss" scoped></style>
