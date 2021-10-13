<template>
    <h2>
         <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
       <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">Contact us</h1>
       <p style="margin-left:120px; margin-right:670px">Have a question about your next tender or a
            general enquiry? Get in touch with us today.</p>
    </h2>
</template>

<script>
    export default {
        name:'contact',
           data: () => ({
      items: [
        {
          text: 'HOME',
          disabled: false,
          href: '/',
        },
         {
          text: 'Contact',
          disabled: false,
          href: '/contact',
        },
      ],
    }),
    }
</script>

<style lang="scss" scoped>

</style>