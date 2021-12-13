<template>
<v-container class="justify-center" fluid>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form" width="475" class="mx-auto mt-8">
        <v-card-text>
            <div style="text-align:center; color:black">
              <h1 class="black--text">Image Hosting System</h1>
              <br>
              <br>
           <h2 class="font-weight-medium"> Reset Password</h2>
           <br>
           </div>
           <v-text-field
          class="ml-6 mr-6"
            ref="name"
            v-model="Email"
            :rules="emailRules"
            :error-messages="errorMessages"
            label="Email"
            required
            outlined
          ></v-text-field>
          <br>
        </v-card-text>
        <v-card-actions class="my-n13">
            <router-link to="/"><a class="blue--text font-weight-bold ml-8" href="">LogIn to Account  </a></router-link>
          <v-spacer></v-spacer>
          <v-btn
            class="mr-7 mb-2 white--text" 
            color="blue darken-1"
            @click="checkEmail"
          >
           Reset
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
</v-row>
</v-container>
</template>
<script>
  export default {
    data: () => ({
      errorMessages: '',
      name: null,

      emailRules: [
  v => !!v || 'E-mail is required',
  v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
 ],
    }),

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `Hey! I'm required`
          : ''

        return true
      },
      checkEmail () {
        alert("Your Password is: ");
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>
<style scoped>
a{
  text-decoration: none;
}
</style>