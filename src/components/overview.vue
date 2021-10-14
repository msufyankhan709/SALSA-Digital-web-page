<template>
  <h2>
    <div class="mt-9">
      <v-btn text>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-btn>
    </div>
    <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">
      About
    </h1>
    <p style="margin-left:120px; margin-right:700px">
      Salsa is an open source company made of digital engineers from across the
      globe delivering technology and innovation to open governments.
    </p>
  </h2>
</template>

<script>
export default {
  name: "overview",
  data: () => ({
    items: [
      {
        text: "HOME",
        disabled: false,
        href: "/",
      },
      {
        text: "About",
        disabled: false,
        href: "/about",
      },
      {
        text: "Overview",
        disabled: false,
        href: "/about/overview",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
