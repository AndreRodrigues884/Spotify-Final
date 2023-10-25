<script>
import Play from "icons/PlayCircle.vue";
import Pause from "icons/PauseCircle.vue";
import SkipNext from "icons/SkipNext.vue";
import SkipPrevious from "icons/SkipPrevious.vue";
import Shuffle from "icons/ShuffleVariant.vue";
import Heart from "icons/Heart.vue";
import HeartOutline from "icons/HeartOutline.vue";

export default {
  beforeMount() {
    // Perform API call or data loading
    // Make sure the songs array is populated with data
  },
  components: {
    Play,
    Pause,
    SkipNext,
    SkipPrevious,
    Shuffle,
    Heart,
    HeartOutline,
  },
  methods: {
    nextSong() {
      this.currentSong++;
    },
    previousSong() {
      if (this.currentSong > 0) {
        this.currentSong--;
      }
    },
    songStatus() {
      this.isPlaying = !this.isPlaying;
    },
    likeSong() {
      this.isLiked = !this.isLiked;
    },
  },
  data() {
    return {
      currentSong: 0,
      isLiked: false,
      isPlaying: false,
      songs: [
        {
          id: 1,
          title: "Glimpse of us",
          artist: "Joji",
          images: [
            {
              url: "https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png",
            },
          ],
        },
        {
          id: 2,
          title: "See you again",
          artist: "Tyler, the Creator",
          images: [
            {
              url: "https://i1.sndcdn.com/artworks-c7lzSKA5KpLx7Hes-E0ryNg-t500x500.jpg",
            },
          ],
        },
        {
          id: 3,
          title: "Redbone",
          artist: "Gambino",
          images: [
            {
              url: "https://i.ytimg.com/vi/Kp7eSUU9oy8/maxresdefault.jpg",
            },
          ],
        },
        {
          id: 4,
          title: "Blinding lights",
          artist: "The Weeknd",
          images: [
            {
              url: "https://i.ytimg.com/vi/fHI8X4OXluQ/maxresdefault.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>



<template>
  <div class="flex justify-center flex-col mb-3 w-full h-full">
    <div class="flex items-center justify-center mb-c_pad">
      <img
        class="h-20 aspect-square object-cover"
        :src="songs[currentSong].images[0].url"
        alt="song photo"
      />
      <div class="pl-3 w-40 truncate">
        <img
          class="h-6 aspect-square"
          src="https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw"
          alt="spotify logo"
        />
        <p class="truncate text-c_secondary">{{ songs[currentSong].title }}</p>
        <p class="truncate text-c_secondary">{{ songs[currentSong].artist }}</p>
      </div>
    </div>
    <div class="flex justify-between mb-c_pad">
      <Shuffle :class="['text-c_secondary', 'fill-current']" />
      <span class="flex gap-4">
        <SkipPrevious
          :class="['text-c_secondary', 'fill-current']"
          @click="previousSong()"
        ></SkipPrevious>
        <Pause
          :class="['text-c_secondary', 'fill-current']"
          v-if="isPlaying"
          @click="songStatus()"
        ></Pause>
        <Play
          :class="['text-c_secondary', 'fill-current']"
          v-else
          @click="songStatus()"
        ></Play>
        <SkipNext
          :class="['text-c_secondary', 'fill-current']"
          @click="nextSong()"
        ></SkipNext>
      </span>
      <Heart
        :class="['text-c_secondary', 'fill-current']"
        v-if="isLiked"
        @click="likeSong()"
      ></Heart>
      <HeartOutline
        :class="['text-c_secondary', 'fill-current']"
        v-else
        @click="likeSong()"
      ></HeartOutline>
    </div>
    <div class="w-full h-1 bg-c_bg">
      <div class="w-[calc(100%/2)] h-1 bg-c_accent"></div>
    </div>
  </div>
</template>

