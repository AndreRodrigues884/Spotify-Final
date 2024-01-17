<script>
import { Bar } from "vue-chartjs";
import { useAuthStore } from '../stores/store';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import emitter from "../router/eventBus";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      authStore: useAuthStore(),
      spotifyData: null,
      ready: false,
      chartData: {
        labels: [],
        datasets: [{
          label: "Popularity",
          backgroundColor: "#1DB954",
          data: [],
          borderRadius: 16,
        }],
      },
      chartOptions: {
        scales: {
          y: { ticks: { color: "white", suggestedMax: 100 } },
          x: { ticks: { color: "white" } },
        },
      },
    };
  },
  created() {
      this.loadData();
      emitter.on('changeData', this.loadData);
  },
  unmounted () {
    emitter.off('changeData', this.loadData);
  },
  methods: {
    async loadData() {
      await this.authStore.getArtists();
      this.spotifyData = this.authStore.spotifyData;
      this.updateChartData();
    },
    updateChartData() {
      this.chartData.labels = this.authStore.getPopularityArtistsName;
      this.chartData.datasets[0].data = this.authStore.getPopularityNumber;
      this.ready = true
    },
    handleError(error) {
      alert(error.message);
    },
  },
};
</script>

<template>
  <Bar v-if="ready" :options="chartOptions" :data="chartData" />
</template>
