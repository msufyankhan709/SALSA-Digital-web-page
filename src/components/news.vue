<template>
    <h2>
         <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
        <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">News and Events</h1>
    </h2>
</template>

<script>
    export default {
        name:'news',
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
            text:'News',
            disabled:false,
            href:'/about/news'
        }
      ],
    }),
    }
</script>

<style lang="scss" scoped>

</style>