<template>
  <div class="mx-9">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-container class="pa-6">
      <v-row>
        <v-col cols="8">
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
                <v-card-text>{{ card.title }}</v-card-text>
              </v-img>
              <v-card-text v-text="card.text"></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
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
          "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGF0dGVybnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
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
  }),
};
</script>

<style>
/* h3{
  margin-left:0px;
  margin-top:0px;
 }
 h1{
   margin-top:100px;
    margin-left:30px;
     margin-right:700px
 }
 p{
    margin-left:30px;
    margin-right:670px
 }
 h2{
    margin-top:100px;
     margin-left:10px;
     margin-right:700px;
 } */
</style>
