<template>
  <div class="blacktext">
    <v-card>
      <div class="content">
        <v-row>
          <v-col cols="4"><h1>Produced Item</h1></v-col>
          <v-col cols="4"><h1>Quantity/Minute</h1></v-col>
          <v-col cols="4"><h1>Active</h1></v-col>
        </v-row>
        <v-divider></v-divider>
        <div
          v-bind:key="productionLine.id"
          v-for="productionLine in productionLines"
        >
          <v-row class="entry">
            <v-col cols="4">{{ productionLine.producedItem.name }}</v-col>
            <v-col cols="4">{{ productionLine.quantityPerMinute }}</v-col>
            <v-col v-if="productionLine.active" cols="4">Yes</v-col>
            <v-col v-if="!productionLine.active" cols="4">No</v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.blacktext {
  color: black;
  font-family: "PT Serif", serif !important;
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
  name: "ProductionOverview",

  data() {
    return {
      productionLines: [],
    };
  },

  async mounted() {
    await this.getProductionLines();
    console.log(this.productionLines)
  },

  methods: {
    async getProductionLines() {
      const token = await this.$auth.getTokenSilently();

      await axios
        .get("http://localhost:3000/getproductionlines", {
          headers: {
            Authorization: `Bearer ${token}`, // send the access token through the 'Authorization' header
          },
        })
        .then((res) => {
          this.productionLines = res.data;
        });
    },
  },
};
</script>