  /* async getArtists() { //get user top artists
            const url = `https://api.spotify.com/v1/me/top/artists?time_range=${this.term}&limit=${this.limit}`;
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const response = await fetch(url, { headers });
                const data = await response.json();

                if (response.ok) {
                    this.spotifyData = data;
                    console.log(data);
                } else {
                    console.error('Falha na requisição ao Spotify. Detalhes:', data);

                }
            } catch (error) {
                console.error('Erro na requisição ao Spotify:', error);
            }
        },
         async getUserTopTracks() { //get user top tracks
            const url = `https://api.spotify.com/v1/me/top/tracks?time_range=${this.term}&limit=${this.limit}`;
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
         async getUserSpotifyData() { // get user data
            const url = 'https://api.spotify.com/v1/me';
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
        async getRecommendations() { //get recommendations tracks
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
        },
          async getCurrentPlaying() { //get track current playing
            const url = 'https://api.spotify.com/v1/me/player/currently-playing?market=ES';
            const headers = {
                'Authorization': `Bearer ${this.accessToken}`,
            };
            try {
                const response = await fetch(url, { headers });
                const data = await response.json();

                if (response.ok) {
                    this.spotifyData = data;
                    console.log(data);
                } else {
                    console.error('Falha na requisição ao Spotify. Detalhes:', data);
                }
            } catch (error) {
                console.error('Erro na requisição ao Spotify:', error);
            }
        },*/