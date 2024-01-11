<template>
  <div>
    <div v-if="authStore.isAuthenticated">
      <!-- Conteúdo para usuários autenticados -->
    </div>
    <div v-else>
      <!-- Conteúdo para usuários não autenticados -->
      <button @click="refreshToken">Atualizar Token</button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/store';

export default {
  data() {
    return {
      AuthStore: useAuthStore()
    }
  },
  methods: {
    async refreshToken() {
      try {
        await this.AuthStore.refreshAccessToken();
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
</script>