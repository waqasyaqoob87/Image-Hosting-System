<template>
  <v-card
    max-width="500"
    class="pa-8 mt-8 mb-8 rounded mx-auto elevation-15"
    outlined
  >
    <v-card-text>
      <v-layout row class="mb-n6" wrap justify-space-center>
        <v-flex xs12>
          <v-layout row wrap justify-space-between>
            <!--Main Heading-->
            <v-flex xs12 lg12 class="mb-2">
              <div style="text-align: center; color: black">
                <h1 class="black--text">Image Hosting System</h1>
                <br />
                <!--SignUp Heading-->
                <h2 class="font-weight-medium">Sign Up</h2>
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
                name="profile_picture"
                v-model="img"
                @change="convertImg"
              ></v-file-input>
              <v-text-field
                v-model="firstname"
                label="Name"
                name="name"
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
                name="age"
                label="Age"
              ></v-text-field>

              <v-text-field
                v-model="Email"
                label="Email"
                name="email"
                type="text"
                outlined
                dense
                required
                :rules="emailRules"
              ></v-text-field>

              <v-text-field
                v-model="pasword"
                required
                outlined
                dense
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                name="password"
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
                name="password_confirmation"
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
                  @click="newRegister"
                >
                  SIGN UP
                </v-btn>
              </v-flex>
              <v-flex lg12 class="mt-5 mb-5">
                <h4 class="d-flex">
                  <!--Sign In Link-->
                  <div>Already have an Account?</div>
                  <router-link to="/" class="text-decoration-none">
                    <a class="blue--text">LogIn to Account</a>
                  </router-link>
                </h4>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["getRegistrations"]),
  },
  methods: {
    convertImg(event) {
      console.log(event);

      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.img = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
    ...mapActions(["Registrations"]),
    newRegister() {
      this.signupLoader = true;
      this.Registrations({
        name: this.firstname,
        email: this.Email,
        password: this.pasword,
        password_confirmation: this.cpasword,
        age: this.Age,
        profile_picture: this.img,
      }).then(
        (response) => {
          console.log(response.data);
          this.signupLoader = false;
          alert("Sign Up Sucessfully");
          this.$router.push("/");
        },
        (error) => {
          console.log("error:::", error);
          this.signupLoader = false;
          this.snackbar = true;
          this.text = "Something Went Wrong";
          this.color = "error";
        }
      );
    },
  },
};
</script>
