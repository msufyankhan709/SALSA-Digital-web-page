<template>
    <h2>
         <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
        <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">Careers at Salsa</h1>
        <p style="margin-left:120px; margin-right:700px">Work in a collaborative, learning-rich environment</p>
    </h2>
</template>

<script>
    export default {
        name:'careers',
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
            text:'Careers',
            disabled:false,
            href:'/about/careers'
        }
      ],
    }),
    }
</script>

<style lang="scss" scoped>

</style>