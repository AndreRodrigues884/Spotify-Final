<script>
import { useApiStore } from "@/stores/useRefreshToken";
export default {
  data() {
    return {
      store: useApiStore(),
    };
  },
  created() {
    try {
      this.store.getArtists();
    } catch (error) {
      alert(`Error: ${error}`);
    }
  },
  onMounted() {
    setInterval(() => {
      this.store.fetchData();
    }, 3600000);
  },
  computed: {
    artists() {
      return this.store.getAllArtists;
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



