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
      </v-bottom-navigation>
    </v-content>
    <v-container>
      <v-card
        max-width="500"
        class="pa-8 mb-2 rounded mx-auto elevation-15"
        outlined
      >
        <v-card-text>
          <v-layout row wrap justify-space-center>
            <v-flex xs12>
              <v-layout row wrap justify-space-between>
                <!--Main Heading-->
                <v-flex xs12 lg12>
                  <div style="text-align: center; color: black">
                    <!--SignUp Heading-->
                    <h2 class="font-weight-medium">Update Your Profile</h2>
                    <br />
                  </div>
                </v-flex>
                <!--Name TextField-->
                <v-flex xs12 lg8 class="mx-auto">
                  <v-file-input
                    class="photofield"
                    outlined
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Select Image"
                    prepend-icon="mdi-camera"
                    label="Profile_Picture"
                    v-model="img"
                  ></v-file-input>
                  <v-text-field
                    v-model="firstname"
                    label="Name"
                    type="text"
                    outlined
                    dense
                    :rules="[() => !!firstname || 'This field is required']"
                  ></v-text-field>

                  <!--Age TextField-->

                  <v-text-field
                    v-model="Age"
                    :rules="[() => !!Age || 'This field is required']"
                    type="number"
                    outlined
                    dense
                    label="Age"
                  ></v-text-field>

                  <!--Usert Type TextField-->
                  <v-text-field
                    v-model="Email"
                    label="Email"
                    type="text"
                    outlined
                    dense
                    required
                    :rules="emailRules"
                  ></v-text-field>
                  <!--Contact Number TextField-->
                  <v-text-field
                    v-model="pasword"
                    required
                    outlined
                    dense
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show3 ? 'text' : 'password'"
                    name="input-10-2"
                    label="Password"
                    @click:append="show3 = !show3"
                    :rules="passwordRules"
                  ></v-text-field>
                  <!--Confirm Password TextField-->
                  <v-text-field
                    v-model="cpasword"
                    required
                    outlined
                    dense
                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show4 ? 'text' : 'password'"
                    name="input-10-2"
                    label="Confirm Password"
                    class="input-group--focused"
                    @click:append="show4 = !show4"
                    :rules="passwordRules"
                  ></v-text-field>
                  <!-- Sign Up Button-->
                  <v-flex class="mt-6">
                    <v-btn
                      class="mt-n8 white--text"
                      width="100"
                      block
                      color="blue darken-1"
                      link
                      @click="updateprofile"
                    >
                      Update
                    </v-btn>
                  </v-flex>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      show3: false,
      show4: false,
      checkbox: false,
      firstname: "",
      Email: "",
      pasword: "",
      cpasword: "",
      Age: "",
      img: "",
      img_url: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Min 6 characters",
      ],
    };
  },
  methods: {
    convertImg() {},
    updateprofile() {
      var base64String = "";
      const reader = new FileReader();

      reader.onload = () => {
        base64String = reader.result;

        let imageBase64Stringsep = base64String;

        this.img = base64String;
        let token = localStorage.getItem("token");
        axios
          .post(
            "http://127.0.0.1:8000/api/user/updateCurrentUser",
            {
              name: this.firstname,
              email: this.Email,
              password: this.pasword,
              password_confirmation: this.cpasword,
              age: this.Age,
              profile_picture: this.img,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response) => {
            console.log(response.data);
            this.firstname = "";
            this.Email = "";
            this.pasword = "";
            this.cpasword = "";
            this.Age = "";
            this.img = "";
          })
          .catch(function (error) {});
      };
      reader.readAsDataURL(this.img);

      
    },
  },
};
</script>

