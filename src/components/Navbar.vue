<script>
import ChevronDown from "icons/ChevronDown.vue";
import ChevronUp from "icons/ChevronUp.vue";
import { useAuthStore } from '../stores/store';

export default {
  data() {
    return {
      authStore: useAuthStore(),
      openMenu: false,
      menuText: "6 MONTH",
      isSixSelected: true,
    };
  },
  components: {
    ChevronDown,
    ChevronUp,
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
      this.menuText = this.openMenu ? "Last Month" : "6 Month";
    },
    changeSelected(){
      this.isSixSelected = !this.isSixSelected;
      this.authStore.changeTimeline();
      this.authStore.getArtists();
    }
  },
  computed: {
    name() {
      return this.data 
    }
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
          >{{ this.isSixSelected ? '1 Month' : '6 Months' }}</span
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

    <span @click="authStore.changeTimeline() && authStore.getArtists()" v-if="openMenu" class="fixed top-20 right-c_bodyP">
      <ul class="bg-c_accent rounded-c_br">
        <li @click="changeSelected()" class="text-c_primary px-10 py-4 select-none">{{ this.isSixSelected ? '6 Months' : '1 Month' }}</li>
      </ul></span
    >
  </nav>
</template>