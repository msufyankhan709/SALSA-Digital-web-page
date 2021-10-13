<template>
  <h2 style="background-color:green;">
    <h1 style="margin-left:120px; margin-top:20px; color:white">
      About
    </h1>
    <p
      style="margin-left:420px; margin-right:670px; margin-top:30px; color:white"
    >
      <router-link
        style="text-decoration:none; color:blue;"
        to="/about/overview"
        >Overview</router-link
      ><v-divider></v-divider>
      <router-link style="text-decoration:none; color:blue" to="/about/team"
        >Team</router-link
      ><v-divider></v-divider>
      <router-link style="text-decoration:none; color:blue" to="/about/ourBoard"
        >Our board</router-link
      ><v-divider></v-divider>
      <router-link style="text-decoration:none; color:blue" to="/about/news"
        >News & events</router-link
      ><v-divider></v-divider>
      <router-link
        style="text-decoration:none; color:blue"
        to="/about/contributions"
        >Contributions</router-link
      ><v-divider></v-divider>
      <router-link style="text-decoration:none; color:blue" to="/about/careers"
        >Careers at SALSA</router-link
        
      >
    </p>
  </h2>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss" scoped></style>
