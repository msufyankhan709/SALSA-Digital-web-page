<template>
  <h2>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h1  style="margin-top:150px; margin-left:120px; margin-right:700px">Meet the Salsarians</h1>
    <p style="margin-left:120px; margin-right:700px">
      Digital enthusiasts with an open ethos and a genuine desire to deliver
      great work that is meaningful
    </p>
  </h2>
</template>

<script>
export default {
  name: "team",
   data: () => ({
      items: [
        {
          text: 'HOME',
          disabled: false,
          href: '/',
        },
         {
          text: 'About',
          disabled: false,
          href: '/about',
        },{
            text:'Team',
            disabled:false,
            href:'/about/team'
        }
      ],
    }),
};
</script>

<style lang="scss" scoped></style>
