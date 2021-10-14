<template>
  <h2>
    <div class="mt-9">
      <div>
        <v-btn text>
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-btn>
      </div>
      <h1 style="margin-top:150px; margin-left:120px; margin-right:700px">
        Insights
      </h1>
      <p style="margin-left:120px; margin-right:670px">
        Publications on what's important to us, for our community, for our
        partners, for our industry and for our purpose.
      </p>
    </div>
  </h2>
</template>

<script>
export default {
  name: "insights",
  data: () => ({
    items: [
      {
        text: "HOME",
        disabled: false,
        href: "/",
      },
      {
        text: "Insights",
        disabled: false,
        href: "/insights",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
