<template>
  <div>
    <v-row class="ml-5 mr-5 departmentrow justify-center">
      <v-col
        v-bind:key="department"
        v-for="department in departments"
        sm="12"
        lg="2"
        class="departmentcol"
      >
        <div class="departmentdiv">
          <div class="departmentcontent">
            <h1>{{ department.name }}</h1>

            <div></div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.departmentdiv {
  background-color: white;
  height: 600px;
  border-style: solid;
  border-width: 1px;
  text-align: center;
}

.departmentrow {
  margin-top: 5%;
}

.departmentcontent {
  margin: 5%;
  height: 100%;
}
</style>

<script>
export default {
  name: "DepartmentOverview",
  data: () => ({
    departments: [
      { name: "HR", permittedroles: ["HR", "Management"] },
      { name: "Logistics", permittedroles: ["Logistics", "Management"] },
      { name: "Production", permittedroles: ["Production", "Management"] },
      { name: "Requisitions", permittedroles: ["Requisitions", "Management"] },
      { name: "Sales", permittedroles: ["Sales", "Management"] },
    ],
  }),
};
</script>
