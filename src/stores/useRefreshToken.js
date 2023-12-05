import { defineStore } from "pinia";

export const useApiStore = defineStore("useRefreshTokenStore", {
  state: () => ({
    accessToken: "", // não está a ser usado
    artists: [],
  }),
  getters: {
    getAllArtists: (state) => state.artists,
  },
  actions: {
    async getRefreshToken() {
      const refreshToken = import.meta.env.VITE_API_REFRESH_TOKEN;
      const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
      const url = "https://accounts.spotify.com/api/token";
      const clientId = import.meta.env.VITE_API_CLIENT_ID;

      console.log(
        new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
          client_id: clientId,
          clientSecret: clientSecret,
        })
      );

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
          cache: "no-cache",
        }),
      };

      try {
        const response = await fetch(url, payload);
        if (response.ok) {
          const data = await response.json();
          // Atualizar o access_token e refresh_token no localStorage
          localStorage.setItem("access_token", data.access_token);
        } else {
          console.error(
            "Error while soliciting new token: ",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Erro ao renovar o token: ", error);
      }
    },

    async getArtists() {
      const apiToken = localStorage.getItem("access_token");
      const response = await fetch(
        "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
      const data = await response.json();
      this.artists = data.artists;
    },

    async fetchData() {
      console.log("tentei");
      await this.getRefreshToken();
    },
  },
});
