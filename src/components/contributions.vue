<template>
    <h2>
         <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
        <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">Contributions to open source</h1>
    </h2>
</template>

<script>
    export default {
        name:'contributions',
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
            text:'Contributions',
            disabled:false,
            href:'/about/contributions'
        }
      ],
    }),
    }
</script>

<style lang="scss" scoped>

</style>