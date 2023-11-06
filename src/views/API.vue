<template>
  <div v-for="apiData in apiBody" :key="apiData.id">
    <h1 class="bg-c_accent">{{ apiData.title }}</h1>
    <p>{{ apiData.body }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiBody: [],
    };
  },
  beforeMount() {
    this.getPost().then((data) => {
      this.apiBody = data;
    });
  },
  methods: {
    async getPost() {
      const apiToken = import.meta.env.VUE_APP_API_TOKEN;

      const response = await fetch(
        "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl?market=ES",
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
      const data = await response.json();
      return data;
    },
  },
};
</script>
