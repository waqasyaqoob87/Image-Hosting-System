<template>
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
         <router-link class="v-btn" to="/privateimages">
          <span>Private</span>
        </router-link>
      </v-bottom-navigation>
    </v-content>
    <h2 class="text-center mt-4"><b class="blue--text">Public Images</b></h2>
    <br />
    <v-card class="mx-auto" width="1000" elevation="10">
      <div>
        <v-row>
          <v-col
            v-for="item in userimage"
            :key="item.id"
            class="d-flex child-flex pl-10 pr-5 pt-12 pb-12"
            cols="6"
          >
            <v-img
              :src="item.url"
              width="400"
              aspect-ratio="1"
              class="grey lighten-2 pl-5 pr-5"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div></div>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-app>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      userimage: "",
    };
  },
  mounted: function () {
    let token = localStorage.getItem("token");
    axios
      .get("http://127.0.0.1:8000/api/image/getAllPublicImage", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data.message.image);
        this.userimage = response.data.message.image;
        alert("User Updated Successfully")
      })
      .catch(function (error) {
        alert(error);
      });
  },
};
</script>
