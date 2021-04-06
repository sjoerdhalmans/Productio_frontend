<template>
  <div>
    <v-navigation-drawer expand-on-hover app clipped>
      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Manage Users</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content> test </v-content>
  </div>
</template>

<style scoped>
.content {
  height: 100%;
}

.sidebar {
  height: 100%;
}
</style>

<script>
export default {
  name: "sales",
};
</script>