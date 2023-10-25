<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Rihanna", "Snoop Dog", "Anitta", "Pop Smoke", "FKJ"],
        datasets: [
          {
            label: "Percentage",
            backgroundColor: "#1DB954",
            data: [86, 71, 43, 40, 21],
            borderRadius: 16,
          },
        ],
      },
      chartOptions: {
        scales: {
          y: {
            ticks: {
              color: "white" /* mudar depois */,
              suggestedMax: 100,
            },
          },
          x: {
            ticks: {
              color: "white",
            },
          },
        },
      },
    };
  },
};
</script>