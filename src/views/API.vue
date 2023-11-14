<script>
import { useRefreshTokenStore } from "@/stores/useRefreshToken";
export default {
  data() {
    return {
      store: useRefreshTokenStore(),
      artists: [],
    };
  },
  onMounted() {
    this.refreshTokenStore.fetchData();
  },
  methods: {
    async getArtists() {
      const apiToken = localStorage.getItem("access_token");
      const response = await fetch(
        "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
      const data = await response.json();
      return data.artists;
    },
  },
};
</script>

<template>
  <div>oi</div>
  <div v-for="artist in artists" :key="artist.id">
    <h1 class="bg-c_accent">{{ artist.name }}</h1>
    <div class="bg-c_accent">{{ artist.popularity }}</div>
  </div>
</template>



