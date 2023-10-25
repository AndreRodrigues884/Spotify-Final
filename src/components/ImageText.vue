<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <span class="flex flex-col justify-center items-center aspect-square">
      <img
        v-if="shouldShowImage"
        class="h-20 aspect-square object-cover rounded-full"
        src="https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <p v-else class="text-c_secondary text-[36px] font-bold">
        {{ text }}
      </p>
      <p class="text-c_secondary pt-[6px] font-semibold">{{ info }}</p>
    </span>
  </div>
</template>


<script>
export default {
  beforeMount() {
    /* API Call */
  },
  props: {
    image: String,
    text: String,
    info: { type: String, required: true },
  },
  computed: {
    shouldShowImage() {
      return !this.text;
    },
  },
};
</script>

<style>
</style>