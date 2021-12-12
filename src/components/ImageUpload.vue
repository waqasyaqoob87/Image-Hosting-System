<template>
  <v-app>
    <div class="mt-14">
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
    </div>
    <v-card class="mx-auto mt-10" height="400" width="400">
      <div class="form-group mt-5 ml-5 mr-5">
        <v-text-field
          v-model="name"
          label="Name"
          name="name"
          type="text"
          prepend-icon="mdi-account"
          outlined
          dense
          :rules="[() => !!name || 'This field is required']"
        ></v-text-field>
        <v-file-input
          label="File input"
          filled
          name="image"
          v-model="image"
          prepend-icon="mdi-camera"
          @change="convertImg"
        ></v-file-input>
        <div class="text-center mt-4">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark v-bind="attrs" v-on="on"> Privacy </v-btn>
              <v-btn raised class="grey ml-2 mr-2" @click="userData()"
                >upload Image</v-btn
              >
            </template>
            <v-list>
              <v-list-item v-for="(btn, index) in btn" :key="index">
                <v-list-item-title
                  ><a class="grey--text text-decoraton-none">{{
                    btn.title
                  }}</a></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <input
          type="file"
          style="display: none"
          ref="fileInput"
          accept="image/*"
          class="form-control"
          placeholder="Choose photo"
          @change="onFilePicked"
        />
      </div>
      <br />
      <v-layout row>
        <v-flex xs12 sm6offset-sm3>
          <img :src="image" />
        </v-flex>
      </v-layout>
    </v-card>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: "ImageUpload",
  data: () => ({
    btn: [{ title: "Public" }, { title: "Private" }],
    getpost: "",
    return: {
      name: "",
      image: "",
    },
  }),
  methods: {
    userData() {
      let Name = this.name;
      console.log(this.name);
      let token = localStorage.getItem("token");
      var base64String = "";
      const reader = new FileReader();

      reader.onload = function () {
        base64String = reader.result;

        let imageBase64Stringsep = base64String;

        let data = {
          name: Name,
          privacy: 1,
          hidden: 0,
          image: base64String,
        };
        let newData = JSON.stringify(data);

        axios
          .post("http://127.0.0.1:8000/api/image/imageUpload", data, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            alert(error);
          });
      };
      reader.readAsDataURL(this.image);
    },
    onFilePicked(event) {
      alert("photo");
      const files = event.target.files;
      var selectImage = files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid File!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.image = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.profileImage = files[0];
    },
  },
};
</script>