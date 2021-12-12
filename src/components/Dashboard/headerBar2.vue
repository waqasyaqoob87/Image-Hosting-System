// main page of the website which contains the layout( navbar, footer and bottom navigation)
<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="black-0.5"
      dark
    >
      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none"
          ><v-icon>mdi-curtains</v-icon>&nbsp;Photoshop</a
        >
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn icon href="/1" @click.prevent="profile">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge color="green" overlap>
          <a class="white--text" href="/login" @click.prevent="logout"
            ><v-icon>mdi-exit-to-app</v-icon></a
          >
        </v-badge>
      </v-btn>
      <!-- <v-btn v-on="on" href="/carts" icon>
        <v-badge content="messages++" value="messages++" color="green" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn> -->
    </v-app-bar>
    <!-- bottom navigation that contains home and Products button -->
    <v-content>
      <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
        <a href="/1" class="v-btn">
          <span>Home</span>
        </a>

        <a href="/productlist" class="v-btn">
          <span>Products</span>
        </a>
      </v-bottom-navigation>
    </v-content>
    <router-view />
    <v-footer :padless="true">
      <v-card flat tile width="100%" class="secondary white--text text-center">
        <v-card-text class="white--text">
           <strong>PHOTOSHOP</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      activeBtn: 1,
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
      window.location.reload();
    },
    profile() {
      this.$router.push("/Profile");
      window.location.reload();
    },
  },
};
</script>
