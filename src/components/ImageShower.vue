<script>
import Eye from "icons/Eye.vue";

export default {
  beforeMount() {
    /* API Call */
  },
  components: {
    Eye,
  },
  data() {
    return {
      amount: window.innerWidth >= 1280 ? 5 : window.innerWidth >= 768 ? 4 : 3,
      artists: [
        {
          id: 1,
          name: "Diogo",
          images: [
            {
              url: "https://hips.hearstapps.com/hmg-prod/images/shih-tzu-little-dog-royalty-free-image-1652927214.jpg?crop=0.447xw:1.00xh;0.248xw,0&resize=980:*",
            },
          ],
        },
        {
          id: 2,
          name: "Isa",
          images: [
            {
              url: "https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*",
            },
          ],
        },
        {
          id: 3,
          name: "Jonas",
          images: [
            {
              url: "https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*",
            },
          ],
        },
        {
          id: 4,
          name: "Isa",
          images: [
            {
              url: "https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*",
            },
          ],
        },
        {
          id: 5,
          name: "Jonas",
          images: [
            {
              url: "https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*",
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="flex gap-c_gap pt-c_pad">
    <div
      v-for="artist in artists.slice(0, amount)"
      :key="artist.id"
      class="flex flex-col justify-center items-center h-full"
    >
      <img
        class="aspect-square object-cover"
        :src="artist.images[0].url"
        alt="artist_pfp"
      />
      <div class="w-full flex justify-between items-center pt-3">
        <h5 class="text-c_secondary font-semibold">{{ artist.name }}</h5>
        <Eye :size="16" :class="['text-c_secondary', 'fill-current']"></Eye>
      </div>
    </div>
  </div>
</template>
