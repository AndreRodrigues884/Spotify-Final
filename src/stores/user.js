export const useUsersStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        user: null,
        clientId: null,
    }),
    getters: {
        getIsUser: (state) => state.isLoggedIn,
        getUser: (state) => state.user,
    },
    actions: {
        login(username, password) {
            const success = "" // codigo de login através de Spotify API
            if (success) {
                this.isLoggedIn = true;
                this.user = "" // data.user (objeto)
            } else {
                throw Error('LOGIN FAILED')
            }
        },
    },
    logout() {
        this.isLoggedIn = false;
        this.user = null;
    },
    persist: true,
})