<script setup>
import c_Navbar from "@/components/Navbar.vue";
import c_ImageText from "@/components/ImageText.vue";
import c_MostInfo from "@/components/MostInfo.vue";
import c_ImageShower from "@/components/ImageShower.vue";
import c_Graph from "@/components/Graph.vue";
import c_Recommend from "@/components/Recommendations.vue";
import c_SongPlaying from "@/components/SongPlaying.vue";
</script>

<template>
  <!-- NAVBAR -->
  <c_Navbar></c_Navbar>
  <!-- ALL -->
  <main
    class="grid grid-cols-1 . md:grid-cols-1 . 2xl:grid-cols-9 | min-h-[calc(100vh-64px)] mt-16 | p-c_pad gap-c_gap bg-c_bg"
  >
    <!-- COL 1 -->
    <div
      class="col-span-1 . md:col-span-1 . 2xl:col-span-5 | grid grid-cols-2 . md:grid-cols-3 . 2xl:grid-cols-3 | grid-rows-8 | gap-c_gap bg-c_bg"
    >
      <div
        class="col-span-1 . md:col-span-1 | row-span-2 | bg-c_primary p-c_pad rounded-c_br shadow-c_shadow"
      ></div>
      <div
        class="col-span-1 . md:col-span-1 | row-span-2 | bg-c_primary p-c_pad rounded-c_br shadow-c_shadow"
      ></div>
      <div
        class="col-span-2 . md:col-span-1 | row-span-2 | bg-c_primary p-c_pad rounded-c_br shadow-c_shadow"
      ></div>
      <!--  -->
      <div
        class="col-span-2 . md:col-span-3 | row-span-3 | flex flex-col justify-center items-center | bg-c_primary p-c_pad rounded-c_br shadow-c_shadow"
      ></div>
      <div
        class="col-span-2 . md:col-span-3 | row-span-3 | flex flex-col justify-center items-center | bg-c_primary p-c_pad rounded-c_br shadow-c_shadow"
      ></div>
    </div>
    <!-- COL 2 -->
    <div
      class="col-span-1 . md:col-span-1 . 2xl:col-span-4 | grid grid-cols-1 . md:grid-cols-3 . 2xl:grid-cols-3 | grid-rows-9 | gap-c_gap bg-c_bg rounded-c_br"
    >
      <div
        class="col-span-1 . md:col-span-3 .2xl:col-span-3 | row-span-4 . md:row-span-4 . 2xl:row-span-4 | flex flex-col justify-center items-center | bg-c_primary p-c_pad rounded-c_br shadow-c_shadow"
      ></div>
      <div
        class="col-span-1 . md:col-span-1 .2xl:col-span-1 | row-span-2 . md:row-span-3 . 2xl:row-span-3 | bg-c_primary p-c_pad rounded-c_br shadow-c_shadow"
      ></div>
      <div
        class="col-span-1 . md:col-span-2 .2xl:col-span-2 | row-span-3 . md:row-span-3 . 2xl:row-span-3 | bg-c_primary p-c_pad rounded-c_br shadow-c_shadow"
      ></div>
    </div>
  </main>
</template>
