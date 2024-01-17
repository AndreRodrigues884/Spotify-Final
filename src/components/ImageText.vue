<script>

export default {
  props: {
    image: String,
    text: String,
    info: { type: String, required: true },
  },
};
</script>

<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <span class="flex flex-col justify-center items-center aspect-square">
      <img v-if="this.image" class="rounded-full w-16" :src="this.image" alt="User Image"/> 
      <p class="text-c_secondary pt-[6px] font-semibold">{{  this.text  }}</p>
      <p class="text-c_secondary pt-[6px] font-semibold">{{  this.info  }}</p>
    </span>
  </div>
</template>




<style>
</style>