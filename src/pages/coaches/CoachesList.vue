<template>
    <section name="filter">
        FILTER
    </section>
    <section name="list">
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Registra Coach</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="coach in filteredCoaches" :key="coach.id">
            {{ coach.firstName }}
            </li>
        </ul>
        <h3 v-else>Nessun Allenatore Trovato...</h3>
    </section>
</template>

<script>
export default {
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>
