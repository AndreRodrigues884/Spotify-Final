<script>
import { useAuthStore } from '../stores/store';
import Eye from "icons/Eye.vue";
import Navbar from './Navbar.vue';
import emitter from "../router/eventBus";

export default {
  components: {
    Eye,
    Navbar,
  },
  data() {
    return {
      authStore: useAuthStore(),
      spotifyData: null,
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
        await this.authStore.getArtists();
        this.spotifyData = this.authStore.spotifyData;
      } catch (error) {
        alert(error.message);
      }
    },
  },
};

</script>

<template>
  <div v-if="spotifyData && spotifyData.items" class="flex gap-c_gap pt-c_pad">
    <div v-for="artist in spotifyData.items" :key="artist.id">
      <img class="aspect-square object-cover rounded-xl" :src="artist.images[2].url" alt="artist_pfp" />
      <div class="w-full flex justify-between items-center pt-3">
        <h5 class="text-c_secondary font-semibold">{{ artist.name }}</h5>
        <Eye :size="16" :class="['text-c_secondary', 'fill-current']"></Eye>
      </div>
    </div>
  </div>
</template>
