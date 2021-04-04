<template>
  <div>
    <div>
      <img :src="$auth.user.picture" />
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
      <p>{{ $auth.user }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  
  name: "Profile",

  async mounted() {
          // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();
      console.log(token)
      // Use Axios to make a call to the API
      const { data } = await axios.get("http://localhost:3000/tests", {
        headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
      });


  }
};
</script>
