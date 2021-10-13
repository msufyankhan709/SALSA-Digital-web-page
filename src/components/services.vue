<template>
    <h2>
         <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
      <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">Services</h1>
      <p style="margin-left:120px; margin-right:670px">Salsa provides a range of services across the
           digital space, from strategy to implementation</p>
    </h2>
</template>

<script>
    export default {
        name:'services',
        data: () => ({
      items: [
        {
          text: 'HOME',
          disabled: false,
          href: '/',
        },
         {
          text: 'Services',
          disabled: false,
          href: '/services',
        },
      ],
    }),
    }
</script>

<style lang="scss" scoped>

</style>