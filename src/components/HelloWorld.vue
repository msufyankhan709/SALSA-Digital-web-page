<template>
  <div class="mt-4">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">
      Building a more open government
    </h1>
    <p style="margin-left:120px; margin-right:700px">
      We help governments become more open, more connected and more
      consolidated.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    items: [
      {
        text: "",
        disabled: false,
        href: "/",
      },
    ],
  }),
};
</script>
