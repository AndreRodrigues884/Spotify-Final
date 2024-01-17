<!-- <template>
    <div>
     
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../stores/store';
  
  export default {
    mounted() {
      this.refreshToken();
    },
    methods: {
      async refreshToken() {
        try {
          await this.authStore.startTokenRefresh();
          // Token foi atualizado com sucesso, faça o que for necessário
        } catch (error) {
          console.error('Erro ao atualizar token:', error);
        }
      },
    },
    computed: {
      authStore() {
        return useAuthStore();
      },
    },
  };
  </script> -->
  

<!-- 

<template>
  <div>
    <button @click="exchangeCodeForAccessToken">Trocar Código por Token de Acesso</button>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth_code'; // Substitua pelo caminho correto

export default {
  methods: {
    exchangeCodeForAccessToken() {
      const authorizationCode = 'AQBVxmsQBLGFw2vfzrJVhP3DL4edEH-ZQq6I17KcTYlOfYLRzHU01OMe8T_q-zgf2o3jmMN8FBV9D3W0VU8m_WY2yd6pJgWisSKvfZ_fHv64YZ2UHo-zAu2fMjS5GKA4DJwExSDGxuPk7OIQtD3BjF3dLFx_rBQgIEo'; // Substitua pelo código de autorização obtido
      useAuthStore().exchangeCodeForAccessToken(authorizationCode);

    },
  },
};
</script>

<template>
  <div>
    <button @click="redirectToSpotifyAuthorization">Autenticar no Spotify</button>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/auth'; // Substitua pelo caminho correto

export default {
  methods: {
    redirectToSpotifyAuthorization() {
      const clientId = 'SEU_CLIENT_ID'; // Substitua pelo seu Client ID
      const redirectUri = 'SUA_URI_DE_REDIRECIONAMENTO'; // Substitua pela sua URI de redirecionamento
      const scope = 'SEUS_ESCOPES'; // Substitua pelos escopos necessários

      // Construa a URL de autorização
      const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;

      // Redirecione o usuário para a página de autorização do Spotify
      window.location.href = authorizationUrl;
    },
  },
};
</script>

 -->