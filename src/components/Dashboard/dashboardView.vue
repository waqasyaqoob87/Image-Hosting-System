<!--  This is dashboard page which containe welcom messages and some tiles view that direct us to specific page -->
<template >
<v-app>
  <v-content>
      <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
        <router-link to="/dashboard" class="v-btn">
          <span>Home</span>
        </router-link>

        <router-link to="/imageUpload" class="v-btn">
          <span>Upload</span>
        </router-link>
         <router-link class="v-btn" to="/userProfile">
          <span>Profile</span>
         </router-link>
         <router-link class="v-btn" to="/allphotos">
          <span>Gallery</span>
         </router-link>
      </v-bottom-navigation>
    </v-content>
<div style="">
  <v-col cols="12" md="12" sm="12">
    <!---------------------------- Welcome Row ----------------------------->
    <!-- <v-row no-gutters class="text-center">
      <v-col cols="12" md="12" sm="12">
        <v-card elevation="0" class="mt-15">
          <h1 style="color:blue">Welcome to Image Hosting System</h1>
        </v-card>
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <v-card elevation="0" class="mt-4">
          <strong class="blue-grey--text text--darken-1">
            Upload Your Photos
          </strong>
        </v-card>
      </v-col>
    </v-row> -->
    <!--------------------- Tiles Views and Nevigations ------------------->
   <v-card class="mx-auto" width="1000">
   <div class="mx-auto">
      <img width="100%" height="480" src="@/assets/cam.jpg"/>
    </div>
    </v-card>
    <!------------------------------------------------------------------------->
  </v-col>
  </div>
  </v-app>
</template>
<script>
export default {
  data: () => ({

  }),
}
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
