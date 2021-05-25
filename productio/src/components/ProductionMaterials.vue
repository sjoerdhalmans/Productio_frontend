<template>
  <div class="blacktext">
    <v-card>
      <div class="content">
          hello world
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
  name: "ProductionMaterials",

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>