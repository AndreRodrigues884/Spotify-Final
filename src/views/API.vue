<template>
  <div v-for="artist in artists" :key="artist.id"><!-- ciclo for dos artistas -->
    <h1 class="bg-c_accent">{{ artist.name }}</h1><!-- vai buscar o nome dos artistas -->
    <div class="bg-c_accent">{{ artist.popularity }}</div><!-- vai buscar o nome dos artistas -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      artists: [],
    };
  },
  beforeMount() {
    this.getRefreshToken();
    this.getArtists().then((data) => {
      this.artists = data;
    });
  },
  methods: {
    async getRefreshToken() {
      const getRefreshToken = async () => {
        // refresh token that has been previously stored
        const refreshToken = import.meta.env.VITE_API_REFRESH_TOKEN;
        const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
        const url = "https://accounts.spotify.com/api/token";
        const clientId = import.meta.env.VITE_API_CLIENT_ID;


        console.log(new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          client_id: clientId,
          clientSecret: clientSecret
        }))

        const payload = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          },
          body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            cache: "no-cache"
          }),
        };


        try {
          const response = await fetch(url, payload);
          if (response.ok) {
            const data = await response.json();
            // Atualize o access_token e refresh_token no localStorage
            localStorage.setItem('access_token', data.access_token);
            const tokenExpirationTime = 3600000;
            setTimeout(getRefreshToken, tokenExpirationTime);
          } else {
            console.error("Erro na solicitação de renovação do token:", response.status, response.statusText);
          }
        } catch (error) {
          console.error("Erro ao renovar o token:", error);
        }
      }

      getRefreshToken();
      
    },
    async getArtists() {
      const apiToken = localStorage.getItem('access_token');
      const response = await fetch(
        "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
      const data = await response.json();
      return data.artists;
    },
  },
};
</script>

