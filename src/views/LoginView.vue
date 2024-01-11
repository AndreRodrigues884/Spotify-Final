<template>
    <div>
        <button @change="method">go to spotify login</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            store: ""
        }
    },
    methods: {
        goToURI() {
            this.store.WHATEVER
        }
    },

}
</script>

<style scoped>

</style>