import { defineStore } from "pinia";

export const useRefreshTokenStore = defineStore("useRefreshTokenStore", {
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
          const tokenExpirationTime = 3600000;
          setTimeout(() => this.getRefreshToken(), tokenExpirationTime);
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
    async fetchData() {
      await this.getRefreshToken();
    },
  },
});
