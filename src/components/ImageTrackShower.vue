<script>
import { useAuthStore } from '../stores/store';
import Eye from "icons/Eye.vue";
import emitter from "../router/eventBus";

export default {
  components: {
    Eye,
  },
  data() {
    return {
      authStore: useAuthStore(),
      userSongSpotifyData: null,
      amount: window.innerWidth >= 1280 ? 5 : window.innerWidth >= 768 ? 4 : 3,
    };
  },
  created() { //call the method loadData to get requests from api
      this.loadData();
      emitter.on('changeData', this.loadData);
  },
  unmounted () {
    emitter.off('changeData', this.loadData);
  },
  methods: {
    async loadData() {
      try {
        await this.authStore.getUserTopTracks(); //obter dados das musicas pelas actions da store
        this.userSongSpotifyData = this.authStore.spotifyData; //obter dados das musicas pelas actions da store
      } catch (error) {
        alert(error.message);
      }
    },
  },
};

</script>

<template>
  <div v-if="userSongSpotifyData && userSongSpotifyData.items" class="flex gap-c_gap pt-c_pad">
    <div v-for="track in userSongSpotifyData.items" :key="track.id">
      <img
        class="aspect-square object-cover rounded-xl"
        :src="track.album.images[1].url"
        alt="artist_pfp"
      />
      <div class="w-full flex justify-between items-center pt-3">
        <h6 class="text-c_secondary font-semibold">{{ track.name }}</h6>
        <Eye :size="16" :class="['text-c_secondary', 'fill-current']"></Eye>
      </div>
    </div>
  </div>
</template>
