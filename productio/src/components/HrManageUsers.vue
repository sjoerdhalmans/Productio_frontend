<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto" max-width="400" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Single-line item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Three-line item</v-list-item-title>
            <v-list-item-subtitle>
              Secondary line text Lorem ipsum dolor sit amet,
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              consectetur adipiscing elit.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <v-card v-if="selectedUser.id != undefined" class="mx-auto" max-width="400" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Single-line item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Three-line item</v-list-item-title>
            <v-list-item-subtitle>
              Secondary line text Lorem ipsum dolor sit amet,
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              consectetur adipiscing elit.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <v-card v-if="selectedAction != ''" class="mx-auto" max-width="400" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Single-line item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Three-line item</v-list-item-title>
            <v-list-item-subtitle>
              Secondary line text Lorem ipsum dolor sit amet,
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              consectetur adipiscing elit.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>

<script>
export default {
  name: "HrManageUsers",

  data() {
    return {
      selectedUser: {},
      selectedAction: "",
    };
  },

  mounted() {
      console.log(this.selectedUser)
  }
};
</script>