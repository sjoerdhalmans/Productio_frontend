<template>
  <div class="blacktext">
    <v-card>

    </v-card>
  </div>
</template>

<style scoped>
.text {
  margin: auto;
}

.edit {
  cursor: pointer;
}

.buttonstyle {
  width: auto;
  text-align: center;
  padding-top: 3.6%;
}

.blacktext {
  color: black;
  font-family: "PT Serif", serif !important;
  padding: 1%;
  height: 100%;
}

.entry {
  padding-top: 10px;
  padding-bottom: 10px;
}

.content {
  padding: 1%;
  height: 100%;
}

.v-card {
  height: 100%;
}

.items {
  height: 55vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

.v-btn {
  align-items: center;
  margin: auto;
  color: black;
  font-family: "PT Serif", serif;
  width: auto;
}
</style>

<script>
import axios from "axios";
export default {
  name: "ProductionStatistics",

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>