<template>
   <h2>
        <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
       <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">Expertise</h1>
       <p style="margin-left:120px; margin-right:670px">Our expertise to help governments drive change, 
           become more efficient and better engage with citizens and industry</p>
   </h2>
</template>

<script>
    export default {
        name:'expertise',
         data: () => ({
      items: [
        {
          text: 'HOME',
          disabled: false,
          href: '/',
        },
         {
          text: 'Expertise',
          disabled: false,
          href: '/expertise',
        },
      ],
    }),
    }
</script>

<style lang="scss" scoped>

</style>