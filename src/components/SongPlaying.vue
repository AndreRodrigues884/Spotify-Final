<script>
import Play from "icons/PlayCircle.vue";
import Pause from "icons/PauseCircle.vue";
import SkipNext from "icons/SkipNext.vue";
import SkipPrevious from "icons/SkipPrevious.vue";
import Shuffle from "icons/ShuffleVariant.vue";
import Heart from "icons/Heart.vue";
import HeartOutline from "icons/HeartOutline.vue";
import { useAuthStore } from '../stores/store.js';

export default {
  components: {
    Play,
    Pause,
    SkipNext,
    SkipPrevious,
    Shuffle,
    Heart,
    HeartOutline,
  },
  data() {
    return {
      authStore: useAuthStore(),
      spotifyData: null,
      isPlaying: false,
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
        await this.authStore.getCurrentPlaying();
        this.spotifyData = this.authStore.spotifyData;
      } catch (error) {
        alert(error.message);
      }
    },
  },
};

</script>
<template>
  <div class="flex justify-center flex-col mb-3 w-full h-full">
    <div class="flex items-center justify-center mb-c_pad">
      <img v-if="spotifyData && spotifyData.item && spotifyData.item.album.images[0]"
        class="h-20 aspect-square object-cover" :src="spotifyData.item.album.images[1].url" alt="song photo" />
      <div class="pl-3 w-40 truncate">
        <img class="h-6 aspect-square"
          src="https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw"
          alt="spotify logo" />
          <p class="truncate text-c_secondary">{{ spotifyData && spotifyData.item && spotifyData.item.album.artists[0].name }}</p>
          <p class="truncate text-c_secondary">{{ spotifyData && spotifyData.item && spotifyData.item.name }}</p>
      </div>
    </div>
    <div class="flex justify-between mb-c_pad">
      <Shuffle :class="['text-c_secondary', 'fill-current']" />
      <span class="flex gap-4">
        <SkipPrevious :class="['text-c_secondary', 'fill-current']" @click="previousSong()"></SkipPrevious>
        <Pause :class="['text-c_secondary', 'fill-current']" v-if="isPlaying" @click="songStatus()"></Pause>
        <Play :class="['text-c_secondary', 'fill-current']" v-else @click="songStatus()"></Play>
        <SkipNext :class="['text-c_secondary', 'fill-current']" @click="nextSong()"></SkipNext>
      </span>
      <Heart :class="['text-c_secondary', 'fill-current']" v-if="isLiked" @click="likeSong()"></Heart>
      <HeartOutline :class="['text-c_secondary', 'fill-current']" v-else @click="likeSong()"></HeartOutline>
    </div>
    <div class="w-full h-1 bg-c_bg">
      <div class="w-[calc(100%/2)] h-1 bg-c_accent"></div>
    </div>
  </div>
</template>

