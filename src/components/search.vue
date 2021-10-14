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
      <v-container style="back-ground-color:black">
        <v-row>
          <v-col cols="6">
            <v-text-field
              style="margin-top:50px; margin-left:70px"
              placeholder="Start typing..."
              single-line
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </h2>
</template>

<script>
export default {
  name: "search",
  data: () => ({
    items: [
      {
        text: "HOME",
        disabled: false,
        href: "/",
      },
      {
        text: "Contact",
        disabled: false,
        href: "/contact",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
