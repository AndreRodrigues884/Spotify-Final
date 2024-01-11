<!-- <template>
  <div>
    <h2>Informações do Usuário Spotify</h2>
    <div v-if="userSpotifyData">
      <p><strong>Username</strong> {{ userSpotifyData.display_name }}</p>
      <p><strong>Followers:</strong> {{ userSpotifyData.followers.total }}</p>
      <p><strong>Email:</strong> {{ userSpotifyData.email }}</p>
      <p><strong>Imagem:</strong><img :src="userSpotifyData.images[0].url" alt="User Image"></p>

      <hr />
    </div>
    <h2>Top Artistas do Spotify</h2>
    <div v-if="spotifyData && spotifyData.items">
      <ul>
        <li v-for="artist in spotifyData.items" :key="artist.id">
          <strong>Nome da artist:</strong> {{ artist.name }}
          <br />
          <strong>Imagem:</strong>
          <img v-if="artist.images && artist.images.length > 0" :src="artist.images[2].url"
            alt="Imagem da Playlist" />
          <br />
          <hr />
        </li>
      </ul>
    </div>
    <h2>Top Faixas do Spotify</h2>
    <div v-if="userSongSpotifyData && userSongSpotifyData.items">
      <ul>
        <li v-for="track in userSongSpotifyData.items" :key="track.id">
          <strong>Nome da track:</strong> {{ track.name }}
          <strong>Imagem:</strong><img :src="track.album.images[2].url" alt="Track Image">
        </li>
      </ul>
    </div>
    <h2>Recomendações</h2>
    <div v-if="getRecommendations && getRecommendations.tracks">
      <ul>
        <li v-for="recommendations in getRecommendations.tracks" :key="recommendations.id">
          <strong>Nome da Musica:</strong> {{ recommendations.name }}

          <span v-for="(artist, index) in recommendations.artists" :key="index">
            <strong>Artista:</strong>{{ artist.name }}
            <span v-if="index < recommendations.artists.length - 1">, </span>
          </span>
          <strong>Imagem:</strong><img :src="recommendations.album.images[2].url" alt="Recommendations Image">
          <br />
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/store';

export default {
  data() {
    return {
      authStore: useAuthStore(),
      spotifyData: null,
      userSpotifyData: null,
      userSongSpotifyData: null,
      getRecommendations: null,
      getCurrentPlayer: null,
    }
  },
  beforeMount() { 
    setInterval(() => this.authStore.init(), 3600000);
    console.log(this.authStore.init());

  },
  created() { 
    try {
      this.authStore.refreshToken();
      this.loadData();
    } catch (error) {
      alert(error.message);
    };

  },
  methods: {
    async loadData() {
      try {
        await this.authStore.getUserSpotifyData(); 
        this.userSpotifyData = this.authStore.spotifyData;
        await this.authStore.getArtists(); 
        this.spotifyData = this.authStore.spotifyData; 
        await this.authStore.getUserTopTracks(); 
        this.userSongSpotifyData = this.authStore.spotifyData;
        await this.authStore.getRecommendations(); 
        this.getRecommendations = this.authStore.spotifyData; 
        await this.authStore.getCurrentPlayer();
        this.getCurrentPlayer = this.authStore.spotifyData;
      } catch (error) {
        alert(error.message);
      }
    },
  },
}
</script>

<style lang="scss" scoped></style> -->