<template>
  <div class="w-full flex justify-between items-center">
    <p class="text-c_secondary font-semibold">
      {{ title }}
      <span class="text-c_secondary/50 font-semibold">({{ period }})</span>
    </p>
    <p class="text-c_secondary cursor-pointer">see more</p>
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
};
</script>

<style>
</style>