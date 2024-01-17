<template>
  <div v-if="getRecommendations && getRecommendations.tracks"
    class="flex lg:flex-col h-full overflow-x-scroll lg:overflow-x-auto lg:overflow-y-scroll lg:max-h-96"
  >
    <div
    v-for="recommendations in getRecommendations.tracks" :key="recommendations.id"
      class="flex justify-center items-center mb-3 w-52"
    >
      <!-- put h-full after removing scrollbars -->
      <img
        class="h-16 aspect-square object-cover"
        :src="recommendations.album.images[2].url" alt="Recommendations Image"
      />
      <div class="pl-[10px] pr-4 truncate w-[160px] text-c_secondary">
        {{ recommendations.name }}
      </div>
      <br>
      <div v-for="(artist, index) in recommendations.artists" :key="index" class="pl-[10px] pr-4 truncate w-[160px] text-c_secondary">
        <p>{{ artist.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/store';
export default {
  data() {
    return {
      authStore: useAuthStore(),
      getRecommendations: null,
    };
  },
  created() { //call the method loadData to get requests from api
    try {
      this.loadData();
    } catch (error) {
      alert(error.message);
    };
  },
  methods: {
    async loadData() {
      try {
          await this.authStore.getRecommendations();   
          this.getRecommendations = this.authStore.spotifyData; 
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

