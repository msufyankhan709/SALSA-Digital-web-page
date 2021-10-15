<template>
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
    <h1
      style="margin-top:150px; margin-left:120px; margin-right:700px"
      class="font-weight-bold text-h3"
    >
      Starting with why
    </h1>
    <p
      style="margin-left:120px; margin-right:670px"
      class="font-weight-bold text-h5"
    >
      Fragmentation, silos and proprietary technologies provide an opportunity
      to consolidate, connect and open governments to ultimately become more
      efficient, engaged, transparent and innovative.
    </p>
    <button
      type="button"
      class="transition-swing v-btn v-btn--bottom v-btn--is-elevated v-btn--fab v-btn--fixed v-btn--has-bg v-btn--right v-btn--round theme--light v-size--large primary"
      aria-label="Scroll to top"
      title="Scroll to top"
      style="z-index: 6; margin-bottom: 0px; transform-origin: center center;"
    >
      <span class="v-btn__content"
        ><span aria-hidden="true" class="v-icon notranslate theme--light"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            class="v-icon__svg"
          >
            <path
              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
            ></path></svg></span
      ></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "purpose",
  data: () => ({
    items: [
      {
        text: "HOME",
        disabled: false,
        href: "/",
      },
      {
        text: "Purpose",
        disabled: false,
        href: "/purpose",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
