<template>
  <div class="blacktext">
    <v-card>
      <div class="content">
        <v-row>
          <v-col cols="5"><h1>Creation date</h1></v-col>
          <v-col cols="3"><h1>Material name</h1></v-col>
          <v-col cols="3"><h1>Material quantity in kg</h1></v-col>
        </v-row>
        <v-divider></v-divider>
        <div v-bind:key="order.id" v-for="order in orders">
          <v-btn depressed>
            <v-row class="entry">
              <v-col cols="5">{{ order.created }}</v-col>
              <v-col cols="3">{{ order.materialName }}</v-col>
              <v-col cols="3">{{ order.quantity }}</v-col>
            </v-row>
          </v-btn>
          <v-divider></v-divider>
        </div>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.blacktext {
  color: black;
  font-family: "PT Serif", serif;
  padding: 1%;
}

.entry {
  padding-top: 10px;
  padding-bottom: 10px;
}

.content {
  padding: 1%;
}

.v-btn {
  text-align: left;
  color: black;
  font-family: "PT Serif", serif;
  background-color: white !important;
  width: 100%;
}
</style>

<script>
import axios from "axios";
export default {
  name: "LogisticsManageOrders",

  data() {
    return {
      orders: [],
    };
  },

  async mounted() {
    this.getOrders();
  },

  methods: {
    async getOrders() {
      const token = await this.$auth.getTokenSilently();

      await axios
        .get("http://localhost:3000/getorders", {
          headers: {
            Authorization: `Bearer ${token}`, // send the access token through the 'Authorization' header
          },
        })
        .then((res) => {
          this.orders = res.data;
        });
    },
  },
};
</script>