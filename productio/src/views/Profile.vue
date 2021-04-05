<template>
  <!-- <div>
      <img :src="$auth.user.picture" />
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
      <p>{{ $auth.user }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div> -->
  <v-row>
    <v-col class="content">
      <v-row class="cardrow">
        <v-col class="card">
          <v-card class="card" elevation="2" tile>
            <div class="cardcontent">
              <h1>Welcome {{ $auth.user.nickname }} !</h1>
              <h2 class="pt-10">Quote of the session</h2>
              <p class="pt-5">"{{ this.randomQuote.text }}"</p>
              <p>- {{ this.randomQuote.author }}</p>
            </div></v-card
          >
        </v-col>
      </v-row>
      <div class="clearancecontainer pb-10">
        <h1 style="text-align: center">Your clearance cards</h1>
        <v-carousel class="clearancelist">
          <v-carousel-item v-for="role in roles" :key="role">
            <v-img
              alt=" Logo"
              class="shrink mr-2 logo"
              contain
              src="../assets/productio.png"
              transition="scale-transition"
              width="40"
            />
            <h1 style="color: black; text-align: center; padding-top: 27%">
              {{ role }}
            </h1>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-col>
    <v-col class="content">
      <v-row class="cardrow">
        <v-col class="card">
          <v-card class="card" elevation="2" tile>
            <div class="cardcontent">
              <h1>Your information</h1>
            </div></v-card
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.clearancecontainer {
  width: 100%;
  height: 30%;
  align-items: center;
}

.logo {
  padding-top: 5%;
  margin-left: 46%;
  display: block;
}

.clearancelist {
  height: 200px;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}

.content {
  width: 50%;
  font-family: "PT Serif", serif;
}

.cardcontent {
  text-align: center;
  padding: 5%;
}

.card {
  height: 100%;
}

.cardrow {
  height: 50%;
  width: 100%;
  padding: 4%;
}
</style>

<script>
export default {
  name: "Profile",

  data() {
    return {
      randomQuote: {},
      quotes: [
        {
          text: "A clever person solves a problem, A wise person AVOIDS it.",
          author: "Albert Einstein",
        },
        {
          text: "Before software can be reusable it first has to be usable.",
          author: "Ralph Johnson",
        },
        {
          text: "9 women CANNOT make a baby in ONE MONTH.",
          author: "Fred Brooks",
        },
        {
          text: "Don’t let yesterday take up too much of today.",
          author: "Will Rogers",
        },
        {
          text:
            "Failure is simply the opportunity to begin again, this time more intelligently.",
          author: "Henry Ford",
        },
        {
          text: "Today’s accomplishments were yesterday’s impossibilities.",
          author: "Robert H. Schuller",
        },
      ],

      roles: [],
    };
  },

  mounted() {
    this.randomQuote = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];

    this.roles = this.$auth.user["http://Productio.net/roles"];

    console.log(this.roles);
  },
};
</script>
