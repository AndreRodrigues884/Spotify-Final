<template>
  <div
    class="flex lg:flex-col h-full overflow-x-scroll lg:overflow-x-auto lg:overflow-y-scroll lg:max-h-80"
  >
    <div
      v-for="song in songs"
      :key="song.id"
      class="flex justify-center items-center mb-3"
    >
      <!-- put h-full after removing scrollbars -->
      <img
        class="h-16 aspect-square object-cover"
        :src="song.images[0].url"
        alt="song photo"
      />
      <div class="pl-[10px] pr-4 truncate w-[160px] text-c_secondary">
        <p class="truncate">{{ song.title }}</p>
        <p class="truncate">{{ song.artist }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    // Perform API call or data loading
    // Make sure the songs array is populated with data
  },
  data() {
    return {
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
          title: "Song 1 with a very long title that should get truncated",
          artist: "Joji",
          images: [
            {
              url: "https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png",
            },
          ],
        },
        {
          id: 4,
          title: "See you again",
          artist: "Tyler, the Creator",
          images: [
            {
              url: "https://i1.sndcdn.com/artworks-c7lzSKA5KpLx7Hes-E0ryNg-t500x500.jpg",
            },
          ],
        },
        {
          id: 5,
          title: "Redbone",
          artist: "Gambino",
          images: [
            {
              url: "https://i.ytimg.com/vi/Kp7eSUU9oy8/maxresdefault.jpg",
            },
          ],
        },
        {
          id: 6,
          title: "Blinding lights",
          artist: "The Weeknd",
          images: [
            {
              url: "https://i.ytimg.com/vi/fHI8X4OXluQ/maxresdefault.jpg",
            },
          ],
        },
        {
          id: 7,
          title: "See you again",
          artist: "Tyler, the Creator",
          images: [
            {
              url: "https://i1.sndcdn.com/artworks-c7lzSKA5KpLx7Hes-E0ryNg-t500x500.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>

