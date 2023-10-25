<script>
import ChevronDown from "icons/ChevronDown.vue";
import ChevronUp from "icons/ChevronUp.vue";

export default {
  data() {
    return {
      openMenu: false,
    };
  },
  components: {
    ChevronDown,
    ChevronUp,
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
  },
};
</script>

<template>
  <nav
    class="h-16 w-screen fixed top-0 px-c_bodyP bg-c_accent flex justify-between items-center"
  >
    <p class="text-c_primary">DASHBOARD</p>

    <div class="flex items-center">
      <p class="text-c_primary">
        <span class="text-c_primary/50">LAST </span>
        <span @click="toggleMenu()" class="cursor-pointer text-c_txt1"
          >MONTH</span
        >
      </p>
      <ChevronDown
        class="cursor-pointer"
        v-if="!openMenu"
        @click="toggleMenu()"
        :class="['text-c_primary', 'fill-current']"
      ></ChevronDown>
      <ChevronUp
        class="cursor-pointer"
        v-else
        @click="toggleMenu()"
        :class="['text-c_primary', 'fill-current']"
      ></ChevronUp>
    </div>

    <span v-if="openMenu" class="fixed top-20 right-c_bodyP">
      <ul class="bg-c_accent rounded-c_br">
        <li class="text-c_primary px-10 py-4">6 Months</li>
      </ul></span
    >
  </nav>
</template>