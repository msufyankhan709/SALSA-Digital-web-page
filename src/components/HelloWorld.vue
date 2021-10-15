<template>
  <div class="mt-4">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-container class="py-12 my-12">
      <v-row>
        <v-col cols="6">
          <h1 class="mt-8 ml-8">
            Building a more open government
          </h1>
          <p class="ml-8">
            We help governments become more open, more connected and more
            consolidated.
          </p>
        </v-col>
        <v-col class="ml-16 pl-16" cols="4">
          <v-list>
            <v-list-item>
              <v-list-item-title class="text-h5 font-weight-bold">
                Quick links
              </v-list-item-title>
            </v-list-item>
            <v-sheet>
              <v-list-item>
                <span class="text-subtitle-1 text-weight-medium"
                  >Who we are</span
                >
                <v-icon color="red darken-4" small>mdi-arrow-right</v-icon>
              </v-list-item>
              <v-list-item>
                <span class="text-subtitle-1">Our work</span>
                <v-icon color="red darken-4" small>mdi-arrow-right</v-icon>
              </v-list-item>
              <v-list-item>
                <span class="text-subtitle-1">Our services</span>
                <v-icon color="red darken-4" small>mdi-arrow-right</v-icon>
              </v-list-item>
              <v-list-item>
                <span class="text-subtitle-1">GovCMS training videos</span>
                <v-icon color="red darken-4" small>mdi-arrow-right</v-icon>
              </v-list-item>
            </v-sheet>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-col class="ml-12 pl-12" cols="4">
      <h2 class="font-weight-bold text-h5 ml-8 pb-4 mt-16">
        Is your GovCMS site ready for Drupal 9?
      </h2>

      <p class="font-weight-medium text-subtitle-1 ml-8">
        Drupal 9 is here! Take advantage of GovCMS D9’s intuitive features and
        ensure your website remains current and secure. Register for a D9
        readiness assessment or explore our D9 upgrade services.
      </p>
      <a
        ><v-btn dark class="ml-8 mb-12">
          Explore Salsa`s GovCMS D9 services
        </v-btn></a
      >
    </v-col>
    <v-divider></v-divider>
    <div class="mx-16 px-16 py-16">
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="4">
              <div class="rpl-card-content__image-wrapper my-4 ml-4">
                <img
                  alt=""
                  src="https://content.salsadigital.com.au/sites/default/files/2020-09/Contributing%20to%20a%20movement.png"
                  srcset="
                    https://content.salsadigital.com.au/sites/default/files/2020-09/Contributing%20to%20a%20movement.png?strategy=auto&amp;height=534&amp;width=764 764w,
                    https://content.salsadigital.com.au/sites/default/files/2020-09/Contributing%20to%20a%20movement.png?strategy=auto&amp;height=200&amp;width=764 764w,
                    https://content.salsadigital.com.au/sites/default/files/2020-09/Contributing%20to%20a%20movement.png?strategy=auto&amp;height=232&amp;width=448 448w,
                    https://content.salsadigital.com.au/sites/default/files/2020-09/Contributing%20to%20a%20movement.png?strategy=auto&amp;height=232&amp;width=333 333w
                  "
                  height="200px"
                  width="300px"
                />
              </div>
            </v-col>
            <v-col cols="8" class="my-4">
              <h2 class="font-weight-bold text-h5">
                Contributing to a movement
              </h2>

              <p class="font-weight-medium text-subtitle-2 mr-16 pr-16">
                GovTech,CivicTech and open data are helping governments around
                the world drive innovation, consolidate and optimise, become
                more transparent and ultimately better engage with citizens.
              </p>
              <v-col class=" mt-8 pt-8">
                <span class="text-subtitle-1 font-weight-bold"
                  >More about the movement</span
                >
                <v-icon color="red darken-4" small>mdi-arrow-right</v-icon>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
    <v-col class="ml-12 pl-12" cols="6">
      <h2 class="font-weight-bold text-h5 ml-8 pb-4 mt-16">
        Building together
      </h2>

      <p class="font-weight-medium text-subtitle-1 ml-8">
        Farming genuine partnerships with change-makers to build more open
        governments, together.
      </p>
    </v-col>

    <div class="mx-16 px-16">
      <v-row class="">
        <v-col cols="4" v-for="image in images" :key="image.title">
          <v-card height="400px">
            <div class="ml-12 pl-12">
              <v-img
                :src="image.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="130px"
                width="150px"
              >
              </v-img>
            </div>
            <v-card-title
              class="ml-12 pl-12"
              v-text="image.title"
            ></v-card-title>
            <v-card-text v-text="image.text"></v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
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
    images: [
      {
        title: "The innovator",
        src:
          "https://content.salsadigital.com.au/sites/default/files/2020-04/services-innovators.png",
        text:
          "co-creating with innovators to consolidate, create efficiencies, and drive meaningful change to ultimately digitally transform.",
      },
      {
        title: "The communicator",
        src:
          "https://content.salsadigital.com.au/sites/default/files/2020-04/services-marketers.png",
        text:
          "Teaming up with communicators to better connect and engage with industry and citizens.It is meaningful",
      },
      {
        title: "The technologist",
        src:
          "https://content.salsadigital.com.au/sites/default/files/2020-04/services-technologist.png",
        text:
          "Geeking out with technologists to consolidate fragmented platforms that are secure, efficient fast and can scale.",
      },
    ],
  }),
};
</script>
<style>
rpl-card-cta__image {
  border-radius: 100%;
  margin: -0.375rem 0 1.5rem;
  width: 9.25rem;
  height: 9.25rem;
}
</style>
