
import { defineStore } from 'pinia';
import { get } from '../api/api';

const API_BASE_URL_TOKEN = 'https://accounts.spotify.com';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: null,
        refreshToken: null,
        spotifyData: null,
        isShortTerm: true,
        isLimit: true,
        term: "short_term",
        limit: "5",
        clientSecret: '600e6a69c04b4c01accf6b300bae6a96',
        clientId: 'cd0b84e985ef483bb3379e3e72b9484e',
        redirectUri: 'http://localhost:5173/home',
        landingUrl: 'http://localhost:5173',
        scope: 'user-top-read user-modify-playback-state user-read-currently-playing',
    }),
    getters: {
        getRefToken: (state) => state.refreshToken, // not in use
        getPopularityArtistsName: (state) => state.spotifyData.items.map(item => item.name),
        getPopularityNumber: (state) => state.spotifyData.items.map(item => item.popularity),
    },
    actions: {
        async init(forceNewCode) { //tokens validations
            const result = await this.redirectToSpotifyAuthorization(forceNewCode);
            if (result) {
                await this.postTokens();
                if (this.accessToken) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        async redirectToSpotifyAuthorization(forceNewCode) { //validate and force a new token   
            if (window.location.href.indexOf('code') == -1 || forceNewCode) {
                const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUri}&scope=${this.scope}`
                window.location.href = authorizationUrl;
                return false; //return false to force get a new token
            } else {
                return true;
            }
        },
        async postTokens() { //get new refresh token and access token
            const urlObj = new URL(window.location.href);
            const code = urlObj.searchParams.get('code');

            const payload = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
                },
                body: new URLSearchParams({
                    grant_type: 'authorization_code',
                    code: code,
                    redirect_uri: this.redirectUri,
                }),
            };
            try {
                const response = await fetch(`${API_BASE_URL_TOKEN}/api/token`, payload);
                const data = await response.json();
                console.log(data);

                if (response.status === 200) {
                    this.accessToken = data.access_token;
                    this.refreshToken = data.refresh_token;
                } else {
                    // if code expired redirect to get new token
                    this.redirectToSpotifyAuthorization(true);
                }
            } catch (error) {
                console.error('Error requesting a new token', error);
                throw error;
            }
        },
        async changeTimeline() {
            this.isShortTerm = !this.isShortTerm
            this.isShortTerm ? this.term = "short_term" : this.term = "medium_term"

            this.isLimit = !this.isLimit
            this.isLimit ? this.limit = "5" : this.limit = "4"

            console.log(this.limit);
            console.log(this.term);
        },
        async getArtists() {
            const url = `https://api.spotify.com/v1/me/top/artists?time_range=${this.term}&limit=${this.limit}`;
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const data = await get(url, headers, 'getArtists');
                this.spotifyData = data; // store in state
            } catch (error) {
                console.error('Error in getArtists:', error);
            }
        },
        async getUserTopTracks() { //get user top tracks
            const url = `https://api.spotify.com/v1/me/top/tracks?time_range=${this.term}&limit=${this.limit}`;
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const data = await get(url, headers, 'getUserTopTracks');
                this.spotifyData = data; // store in state
            } catch (error) {
                console.error('Error in getUserTopTracks:', error);
            }
        },
        async getUserSpotifyData() { // get user data
            const url = 'https://api.spotify.com/v1/me';
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const data = await get(url, headers, 'getUserTopTracks');
                this.spotifyData = data; // store in state
            } catch (error) {
                console.error('Error in getUserTopTracks:', error);
            }
        },
        async getRecommendations() { //get recommendations tracks
            const url = 'https://api.spotify.com/v1/recommendations?limit=6&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA';
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const data = await get(url, headers, 'getUserTopTracks');
                this.spotifyData = data; // store in state
            } catch (error) {
                console.error('Error in getUserTopTracks:', error);
            }
        },
        async getCurrentPlaying() { //get track current playing
            const url = 'https://api.spotify.com/v1/me/player/currently-playing?market=ES';
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const data = await get(url, headers, 'getUserTopTracks');
                this.spotifyData = data; // store in state
            } catch (error) {
                console.error('Error in getUserTopTracks:', error);
            }
        },
        async logout() {
            const scope = this;
            // spotify logout page
            const logoutPage = window.open('https://accounts.spotify.com/logout', '_blank');

            setTimeout(function () {
                logoutPage.close(); //close spotify logou tab after 0.2s
                window.location.href = scope.landingUrl;//redirect to landing page
            }, 200);
        },
    },
    persist: false,
});



