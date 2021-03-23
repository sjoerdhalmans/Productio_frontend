<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Productio Logo"
          class="shrink mr-2"
          contain
          src="./assets/productio.png"
          transition="scale-transition"
          width="40"
        />

        <h1 class="blacktext">Productio</h1>
      </div>

      <div class="ml-5" v-if="!$auth.loading">
        <!-- show login when not authenticated -->
        <v-btn v-if="$auth.isAuthenticated" @click="$router.push('profile')">Dashboard</v-btn>
      </div>

      <v-spacer></v-spacer>

      <div v-if="!$auth.loading">
        <!-- show login when not authenticated -->
        <v-btn v-if="!$auth.isAuthenticated" @click="login">Log in</v-btn>
        <!-- show logout when authenticated -->
        <v-btn v-if="$auth.isAuthenticated" @click="logout">Log out</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");

.blacktext {
  color: black;
  font-family: "PT Serif", serif;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  }),

  methods: {
    login() {
      this.$auth.loginWithRedirect({});
    },

    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
});
</script>
