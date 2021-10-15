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
    <v-container class="pa-6">
      <v-row>
        <v-col cols="6">
          <h1 class="font-weight-bold text-h2 mt-16 pt-16">
            Services
          </h1>
          <p class="pb-8 pt-4 mb-16 font-weight-medium text-h6">
            Salsa provides a range of services across the digital space, from
            strategy to implementation
          </p>
        </v-col>
        <v-col cols="4">
          <v-list>
            <v-list-item class="mt-16 pt-16">
              <v-list-item-title class="text-h5 font-weight-bold">
                Quick links
              </v-list-item-title>
            </v-list-item>
            <v-sheet elevation="5">
              <v-list-item>
                <v-list-item-title>
                  <span>Full service catalogue</span>
                  <v-icon color="red darken-4" small>mdi-arrow-right</v-icon>
                </v-list-item-title>
              </v-list-item>
            </v-sheet>
          </v-list>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-col cols="8">
        <h2 class="font-weight-bold text-h5 pb-4 mt-16">
          GovCMS Drupal 9 upgrade
        </h2>

        <p class="font-weight-medium text-subtitle-1">
          Drupal 9 is here! Get ready to take advantage of its intuitive tools,
          improved content editing experience and continued security and support
          by preparing for your GovCMS Drupal 9 upgrade now.
        </p>
        <a
          ><v-btn dark>
            Explore GovCMS D9 upgrade services
          </v-btn></a
        >
      </v-col>

      <div class="my-16">
        <v-divider></v-divider>
        <v-col cols="8">
          <h2 class="mt-16">
            Strategy and discovery services
          </h2>

          <h3 class="text-subtitle-2 py-4">
            Strategy and discovery services to help you quantify pain points,
            identify opportunities, explore viable options and pathways, and
            understand overall project risks, mitigations, costs and timelines.
          </h3>
        </v-col>
        <div>
          <v-row class="width:150px">
            <v-col cols="4" v-for="card in cards" :key="card.title">
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>
                <v-card-text v-text="card.text"></v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
      <v-col cols="8">
        <h2 class="pt-4">
          Design and user research services
        </h2>
        <h3 class="text-subtitle-2 py-4">
          Design and user research services adopting collaborative methods to
          co-create user experiences that are validated, engaging, intuitive,
          consistent and compliant with digital service standards.
        </h3>
      </v-col>
      <div>
        <v-row class="width:150px">
          <v-col cols="4" v-for="card in cardes" :key="card.title">
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
              >
                <v-card-title>{{ card.title }}</v-card-title>
              </v-img>
              <v-card-text v-text="card.text"></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-col cols="8">
        <h2 class="pt-8 mt-8">
          Website and application development services
        </h2>
        <h3 class="text-subtitle-2 py-4">
          Application build and migration services cover backend systems,
          decoupled API-first platforms, frontend and design system theming,
          module development, third-party integrations and test automation.
        </h3>
      </v-col>
      <div>
        <v-row class="width:150px">
          <v-col cols="4" v-for="image in images" :key="image.title">
            <v-card>
              <v-img
                :src="image.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
              >
                <v-card-title v-text="image.title"></v-card-title>
              </v-img>
              <v-card-text v-text="image.text"></v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-btn style="margin-left:1050px;height:45px;margin-top:100px;"
      >Back to top<v-icon color="red darken-4" small
        >mdi-arrow-up</v-icon
      ></v-btn
    >

    <v-footer class="mt-4" dark>
      <v-row>
        <v-col cols="4">
          <p class="ml-4">Purpose</p>
          <p class="ml-4">Exertise</p>
          <p class="ml-4">Case studies</p>
          <p class="ml-4">Contact</p>
        </v-col>
        <v-col cols="4">
          <p>About</p>
          <p>Insights</p>
          <p>Services</p>
        </v-col>
        <v-col cols="4">
          <p>Connect with us</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "services",
  data: () => ({
    items: [
      {
        text: "HOME",
        disabled: false,
        href: "/",
      },
      {
        text: "Services",
        disabled: false,
        href: "/services",
      },
    ],
    cards: [
      {
        title: "Think tank for government",
        src:
          "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGF0dGVybnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Digital strategy and transformarion ",
        src:
          "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGF0dGVybnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Rapid prototyping",
        src:
          "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGF0dGVybnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Site assessments",
        src:
          "https://cdn11.bigcommerce.com/s-b7a27/products/8685/images/138417/diamond_seamless_wallpanels__53376.1619075123.386.513.jpg?c=2",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Discovery and digital roadmap",
        src:
          "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGF0dGVybnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
    ],
    cardes: [
      {
        title: "User research",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Visual interactive prototyping",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Human centered design",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Design thinking",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
    ],
    images: [
      {
        title: "Website development",
        src:
          "https://cdn11.bigcommerce.com/s-b7a27/products/8685/images/138417/diamond_seamless_wallpanels__53376.1619075123.386.513.jpg?c=2",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Frontend theming",
        src:
          "https://cdn11.bigcommerce.com/s-b7a27/products/8685/images/138417/diamond_seamless_wallpanels__53376.1619075123.386.513.jpg?c=2",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Website and content migration",
        src:
          "https://cdn11.bigcommerce.com/s-b7a27/products/8685/images/138417/diamond_seamless_wallpanels__53376.1619075123.386.513.jpg?c=2",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Module development",
        src:
          "https://cdn11.bigcommerce.com/s-b7a27/products/8685/images/138417/diamond_seamless_wallpanels__53376.1619075123.386.513.jpg?c=2",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "Third party integration",
        src:
          "https://cdn11.bigcommerce.com/s-b7a27/products/8685/images/138417/diamond_seamless_wallpanels__53376.1619075123.386.513.jpg?c=2",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
      {
        title: "QA and automated testing",
        src:
          "https://cdn11.bigcommerce.com/s-b7a27/products/8685/images/138417/diamond_seamless_wallpanels__53376.1619075123.386.513.jpg?c=2",
        flex: 12,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque architecto amet odit quod, dignissimos tempore officiis libero aut. Quod ex vel nulla corrupti accusantium eveniet eligendi facilis vero aliquid?",
      },
    ],
  }),
};
</script>

<style></style>
