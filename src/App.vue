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
        ><v-icon color="white">mdi-magnify</v-icon></router-link
      >&nbsp;&nbsp;
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="mt-16 pl-16  pt-6 mx-4" dark>
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
          <p>
            <svg
              viewBox="0 0 16 13"
              aria-hidden="true"
              overflow="visible"
              class="rpl-icon rpl-icon--twitter rpl-icon--color_white"
              style="width:19.2px;height:15.6px;"
            >
              <path
                d="M14.355 3.19c.01.14.01.28.01.42 0 4.27-3.299 9.19-9.33 9.19A9.37 9.37 0 010 11.35c.264.03.518.04.792.04 1.533 0 2.944-.51 4.071-1.38-1.442-.03-2.65-.96-3.066-2.24.203.03.406.05.62.05.294 0 .588-.04.862-.11C1.777 7.41.65 6.11.65 4.54V4.5c.437.24.945.39 1.483.41A3.215 3.215 0 01.67 2.22c0-.6.162-1.15.447-1.63a9.369 9.369 0 006.761 3.38c-.05-.24-.081-.49-.081-.74 0-1.78 1.462-3.23 3.28-3.23.943 0 1.796.39 2.395 1.02a6.516 6.516 0 002.081-.78 3.23 3.23 0 01-1.441 1.78c.66-.07 1.3-.25 1.888-.5a6.992 6.992 0 01-1.645 1.67z"
              ></path></svg
            >&nbsp;Twitter
          </p>
          <p>
            <svg
              viewBox="0 0 14 14"
              aria-hidden="true"
              overflow="visible"
              class="rpl-icon rpl-icon--linkedin rpl-icon--color_white"
              style="width:16.8px;height:16.8px;"
            >
              <path
                d="M3.134 13.611H.23V4.524h2.903v9.087zM1.68 3.284C.753 3.284 0 2.537 0 1.634 0 .733.753 0 1.68 0c.929 0 1.682.732 1.682 1.635 0 .902-.753 1.65-1.681 1.65zm12.316 10.327H11.1V9.187c0-1.054-.022-2.406-1.51-2.406-1.508 0-1.74 1.146-1.74 2.33v4.5H4.952V4.524h2.784v1.24h.04c.388-.715 1.334-1.468 2.747-1.468C13.46 4.296 14 6.176 14 8.619v4.992h-.003z"
              ></path></svg
            >&nbsp;LinkedIn
          </p>
          <p>
            <svg
              viewBox="0 0 16 13"
              aria-hidden="true"
              overflow="visible"
              class="rpl-icon rpl-icon--twitter rpl-icon--color_white"
              style="width:19.2px;height:15.6px;"
            >
              <path
                d="M2.223 16V8.844H0V6h2.223V3.76C2.223 1.324 3.603 0 5.617 0 6.582 0 7.41.078 7.65.113v2.543H6.254c-1.095 0-1.307.563-1.307 1.385V6H7.42l-.34 2.844H4.947V16"
              ></path></svg
            >Facebook
          </p>
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
<style>
.rpl-icon--color_white {
  fill: #fff;
}
</style>
