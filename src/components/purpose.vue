<template>
    <h2>
        <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
      <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">Starting with why</h1>
      <p style="margin-left:120px; margin-right:670px">Fragmentation, silos and proprietary technologies provide an opportunity to consolidate, connect 
          and open governments to ultimately become more efficient, engaged, transparent and innovative.</p>
    </h2>
</template>

<script>
    export default {
        name:'purpose',
        data: () => ({
      items: [
        {
          text: 'HOME',
          disabled: false,
          href: '/',
        },
         {
          text: 'Purpose',
          disabled: false,
          href: '/purpose',
        },
      ],
    }),
    }
</script>

<style lang="scss" scoped>

</style>