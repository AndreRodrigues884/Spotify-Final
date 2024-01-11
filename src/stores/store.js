
import { defineStore } from 'pinia';

const API_BASE_URL_TOKEN = 'https://accounts.spotify.com';


export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: null,
        refreshToken: null,
        userSpotifyData: null,
        artistsPopularity: [],
        //
        isShortTerm: true,
        term: "short_term"
    }),
    getters: {
        getRefToken: (state) => state.refreshToken, // not in use
        getPopularityArtistsName: (state) => state.userSpotifyData.items.map(item => item.name),
        getPopularityNumber: (state) => state.userSpotifyData.items.map(item => item.popularity),
        getUserFollowers: (state) => state.userSpotifyData?.followers?.total,
    },
    actions: {
        async init() {
            const result = await this.redirectToSpotifyAuthorization();
            if (result) {
                this.refreshToken();   
            }
        },
        async redirectToSpotifyAuthorization() { //melhorar o codigo aqui dentro
            const clientId = 'cd0b84e985ef483bb3379e3e72b9484e';
            const redirectUri = 'http://localhost:5173/';
            const scope = 'user-top-read user-modify-playback-state'; // Substitua pelos escopos necessários

            const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;
            
            if (window.location.href.indexOf('code') == -1) {
                window.location.href = authorizationUrl;
                return false;
            } else {
                return true;
            }
        },
        async refreshToken() { //obter access token
            const clientId = 'cd0b84e985ef483bb3379e3e72b9484e';
            const clientSecret = '600e6a69c04b4c01accf6b300bae6a96';
            const refreshToken = 'AQAa2ddi68iJ2VknMAnNvX20U6xneYxSZ1gxh08HxUyXz6UHSanlycu5-RHL29u-4ifzs_xEECVeqChC5yk2q6ZsDZ11fLfszQEzQYjwdgpqKOFXdlbtM6cPIRYiqwE4v1I';

            const payload = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
                },
                body: new URLSearchParams({
                    grant_type: 'refresh_token',
                    refresh_token: refreshToken,
                    client_id: clientId,

                }),
            };
            try {
                const response = await fetch(`${API_BASE_URL_TOKEN}/api/token`, payload);
                const data = await response.json();

                if (response.status === 200) this.accessToken = data.access_token;
                /* console.log('Novo Access Token:', this.accessToken); */

            } catch (error) {
                console.error('Error requesting a new token', error);
                throw error;
            }
        },
        changeTimeline() {
            this.isShortTerm = !this.isShortTerm
            this.isShortTerm ? this.term = "short_term" : this.term = "medium_term"
           
        },
       /*  async fetchData(url, successCallback, errorCallback) {
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
        
            try {
                const response = await fetch(url, { headers });
                const data = await response.json();
        
                if (response.ok) {
                    successCallback(data);
                } else {
                    errorCallback(data);
                }
            } catch (error) {
                console.error('Erro na requisição ao Spotify:', error);
            }
        }, */
        async getArtists() { //obter playlists do user
            const url = `https://api.spotify.com/v1/me/top/artists?time_range=${this.term}&limit=5`;
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const response = await fetch(url, { headers });
                const data = await response.json();

                if (response.ok) {
                    this.spotifyData = data;
                } else {
                    console.error('Falha na requisição ao Spotify. Detalhes:', data);

                }
            } catch (error) {
                console.error('Erro na requisição ao Spotify:', error);
            }
        },
       
        async getUserTopTracks() { //obter top musicas do user();
           
            const url = `https://api.spotify.com/v1/me/top/tracks?time_range=${this.term}&limit=5`;
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const response = await fetch(url, { headers });
                const data = await response.json();

                if (response.ok) {
                    this.spotifyData = data;
                    /* console.log('Data:', data);  */
                } else {
                    console.error('Falha na requisição ao Spotify. Detalhes:', data);
                }
            } catch (error) {
                console.error('Erro na requisição ao Spotify:', error);
            }
        },

        async getUserSpotifyData() { // obter dados do user
            const url = 'https://api.spotify.com/v1/me';
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const response = await fetch(url, { headers });
                const data = await response.json();

                if (response.ok) {
                    this.spotifyData = data;
                     console.log('Data:', data);

                } else {
                    console.error('Falha na requisição ao Spotify. Detalhes:', data);

                }
            } catch (error) {
                console.error('Erro na requisição ao Spotify:', error);
            }
        },
        /*      async getRecommendations() {
                 const url = 'https://api.spotify.com/v1/recommendations?limit=6&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA';
                 const headers = {
                     'Authorization': `Bearer ${this.accessToken}`,
                 };
                 try {
                     const response = await fetch(url, { headers });
                     const data = await response.json();
     
                     if (response.ok) {
                         this.spotifyData = data;
                     } else {
                         console.error('Falha na requisição ao Spotify. Detalhes:', data);
     
                     }
                 } catch (error) {
                     console.error('Erro na requisição ao Spotify:', error);
                 }
             }, */
        async startRandomPlayback() {
            const url = 'https://api.spotify.com/v1/me/player/play';
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json',
            };
            const data = {
                "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                "offset": {
                    "position": 5
                },
                "position_ms": 0
            };
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers,
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    this.spotifyData = data;
                    console.log(data);

                } else {
                    console.error('Falha na requisição ao Spotify. Detalhes:', data);

                }
            } catch (error) {
                console.error('Erro na requisição ao Spotify:', error);
            }
        }
    },
    persist: true,
});



