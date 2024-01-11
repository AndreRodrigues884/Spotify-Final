/* // store/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: null,
        refreshToken: null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.accessToken,
    },
    actions: {
        async exchangeCodeForAccessToken(authorizationCode) {
            const clientId = 'cd0b84e985ef483bb3379e3e72b9484e'; // Substitua com o seu cliente ID
            const redirectUri = 'http://localhost:5174/';
            const clientSecret = '600e6a69c04b4c01accf6b300bae6a96';

            const authHeader = 'Basic ' + btoa(`${clientId}:${clientSecret}`);
           
            const payload = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': authHeader,
                },
                body: new URLSearchParams({
                    code: authorizationCode,
                    redirect_uri: redirectUri,
                    grant_type: 'authorization_code'
                }),
            };

            try {
                const response = await fetch('https://accounts.spotify.com/api/token', payload);
            
                if (response.status === 200) {
                    const data = await response.json();
                    console.log('Token de Acesso:', data.access_token);
                    console.log('Refresh Token:', data.refresh_token);
                } else {
                    const errorData = await response.json();
                    console.error('Erro ao trocar código por token. Detalhes:', errorData);
                }
            } catch (error) {
                console.error('Erro na solicitação para obter token de acesso:', error);
                throw error;
            }
            
        },
    },
}); */
