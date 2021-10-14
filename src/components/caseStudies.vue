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
        Case studies
      </h1>
      <p style="margin-left:120px; margin-right:670px">
        Partnering with federal and state agencies to deliver consolidated
        platforms and services that are easier, better and clearer for industry
        and citizens.
      </p>
    </div>
  </h2>
</template>

<script>
export default {
  name: "caseStudies",
  data: () => ({
    items: [
      {
        text: "HOME",
        disabled: false,
        href: "/",
      },
      {
        text: "Case studies",
        disabled: false,
        href: "/caseStudies",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
