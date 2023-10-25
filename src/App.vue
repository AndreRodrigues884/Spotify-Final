<script setup>
</script>

<template>
  <!-- ALL -->
  <div
    class="grid grid-cols-1 . md:grid-cols-1 . 2xl:grid-cols-9 | gap-4 p-4 h-screen"
  >
    <!-- COL 1 -->
    <div
      class="col-span-1 . md:col-span-1 . 2xl:col-span-5 | bg-red-500 | grid grid-cols-2 . md:grid-cols-3 . 2xl:grid-cols-3 | grid-rows-8 | gap-4"
    >
      <div class="col-span-1 . md:col-span-1 | row-span-2 | bg-pink-500">1</div>
      <div class="col-span-1 . md:col-span-1 | row-span-2 | bg-orange-500">
        2
      </div>
      <div class="col-span-2 . md:col-span-1 | row-span-2 | bg-yellow-500">
        3
      </div>
      <!--  -->
      <div class="col-span-2 . md:col-span-3 | row-span-3 | bg-green-500">
        4
      </div>
      <div class="col-span-2 . md:col-span-3 | row-span-3 | bg-teal-500">5</div>
    </div>
    <!-- COL 2 -->
    <div
      class="col-span-1 . md:col-span-1 . 2xl:col-span-4 | bg-red-500 | grid grid-cols-1 . md:grid-cols-3 . 2xl:grid-cols-3 | grid-rows-9 | gap-4"
    >
      <div
        class="col-span-1 . md:col-span-3 .2xl:col-span-3 | row-span-4 . md:row-span-4 . 2xl:row-span-4 | bg-yellow-500"
      >
        1
      </div>
      <div
        class="col-span-1 . md:col-span-1 .2xl:col-span-1 | row-span-2 . md:row-span-3 . 2xl:row-span-3 | bg-pink-500"
      >
        2
      </div>
      <div
        class="col-span-1 . md:col-span-2 .2xl:col-span-2 | row-span-3 . md:row-span-3 . 2xl:row-span-3 | bg-teal-500"
      >
        3
      </div>
    </div>
  </div>
</template>
