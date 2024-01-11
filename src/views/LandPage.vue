<template>
  <!-- BG Images -->
  <img class="absolute top-0 right-0 w-1/2 z-0" src="../assets/images/circle_1.png" />
  <img class="absolute top-96 left-0 w-1/2 z-0" src="../assets/images/circle_2.png" />

  <!-- Content -->

  <main class="bg-c_bg_landing">
    <header class="grid grid-cols-1 w-screen p-c_bodyP">
      <span class="flex flex-col col-span-2 w-full z-10">
        <img class="w-10 h-10" :src="images[modeActive].imgLogo" />
        <span class="gap-c_gap w-full flex flex-col items-center pt-16">
          <p class="text-[24px] font-semibold text-c_secondary | md:text-[32px]">
            Listen while watching
          </p>
         <button @click="goToDashboard"
              class="text-[12px] hover:scale-110 transition-transform font-semibold bg-c_accent p-4 rounded-full text-c_secondary | md:text-[16px]">
              Go To Dashboard
            </button>
        </span>
        <span class="flex justify-center w-full">
          <img class="pt-16 p-0 w-[80vw] | sm_p-8" :src="images[modeActive].imgDashboard" />
        </span>
      </span>
    </header>

    <div class="grid grid-cols-1 grid-rows-4 justify-items-start items-center p-12 gap-4 | sm:grid-cols-2 sm:gap-8">
      <span
        class="text-[16px] font-semibold text-c_secondary order-2 z-10 | sm:order-1 | lg:text-[24px] lg:p-20 | md:text-[18px] md:p-10">Visualize
        os seus artistas e as suas músicas favoritas!!
        <div class="text-[16px] font-light">
          Com acesso em tempo real aos dados mais ouvidos de artistas e músicas
          de cada utilizador, oferecemos uma experiência única e envolvente.
        </div>
      </span>
      <img class="order-1 z-10 | sm:order-2 | md:p-s10" :src="images[modeActive].img1" />
      <img class="order-3 z-10 | sm:order-3 | md:p-10" :src="images[modeActive].img2" />
      <span
        class="text-[16px] font-semibold text-c_secondary order-4 z-10 | sm:order-4 | md:text-[18px] md:p-10 | lg:text-[24px] lg:p-20">Vê
        a popularidade dos teus artistas favoritos!
        <div class="text-[16px] font-light">
          Com acesso em tempo real aos dados mais ouvidos de artistas e músicas
          de cada utilizador, oferecemos uma experiência única e envolvente.
        </div>
      </span>
      <span
        class="text-[16px] font-semibold text-c_secondary order-6 z-10 | sm:order-5 | md:text-[18px] md:p-10 | lg:text-[24px] lg:p-20">Vê
        a popularidade dos teus artistas favoritos!
        <div class="text-[16px] font-light">
          Com acesso em tempo real aos dados mais ouvidos de artistas e músicas
          de cada utilizador, oferecemos uma experiência única e envolvente.
        </div>
      </span><!-- padding: 1rem 0rem 1rem 0rem; -->
      <img class="order-5 z-10 | sm:order-6 | md:p-10" :src="images[modeActive].img3" />
      <img class="order-7 z-10 | sm:order-7 | md:p-10" :src="images[modeActive].img4" />
      <span
        class="text-[16px] font-semibold text-c_secondary order-8 z-10 | sm:order-8 | md:text-[18px] md:p-10 | lg:text-[24px] lg:p-20">Vê
        a popularidade dos teus artistas favoritos!
        <div class="text-[16px] font-light">
          Com acesso em tempo real aos dados mais ouvidos de artistas e músicas
          de cada utilizador, oferecemos uma experiência única e envolvente.
        </div>
      </span>
    </div>

    <footer class="flex items-center justify-center p-4 h-32 text-c_secondary">
      <a target="_blank" href="https://github.com/">github</a>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      modeActive: "light",
      images: {
        light: {
          imgLogo: "/src/assets/images/logo_light.png",
          imgDashboard: "/src/assets/images/img_dashboard_mobile.png",
          img1: "/src/assets/images/img1.png",
          img2: "/src/assets/images/img2.png",
          img3: "/src/assets/images/img3.png",
          img4: "/src/assets/images/img4.png",
        },
        dark: {
          imgLogo: "/src/assets/images/logo_light.png",
          imgDashboard: "src/assets/images/img_dashboard_dark.png",
          img1: "/src/assets/images/img1_dark.png",
          img2: "/src/assets/images/img2_dark.png",
          img3: "/src/assets/images/img3_dark.png",
          img4: "/src/assets/images/img4_dark.png",
        },
      },
    };
  },
  methods: {
    goToDashboard() {
      this.$router.push('/home')
    }
  }
};
</script>

<style></style>