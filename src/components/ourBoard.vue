<template>
    <h2>
        <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
        <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">Our board</h1>
        <p style="margin-left:120px; margin-right:700px">Helping set Salsa’s strategic direction</p>
    </h2>
</template>

<script>
    export default {
        name:'ourBoard',
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
            text:'Our board',
            disabled:false,
            href:'/about/ourBoard'
        }
      ],
    }),
    }
</script>

<style lang="scss" scoped>

</style>