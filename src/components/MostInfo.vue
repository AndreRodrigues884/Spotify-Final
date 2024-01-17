<template>
  <div class="w-full flex justify-between items-center">
    <p class="text-c_secondary font-semibold">
      {{ title }}
      <span class="text-c_secondary/50 font-semibold">({{ period }})</span>
    </p>
     <span @click="redirectToArtists" class="text-c_secondary cursor-pointer">see more</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    period: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
  redirectToArtists() {
    console.log('aqui');
    this.$router.push('/artists');
  },
},
};
</script>

<style>
</style>