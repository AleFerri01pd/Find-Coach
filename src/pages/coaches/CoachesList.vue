<template>
    <section name="filter">
        FILTER
    </section>
    
    <section name="list">
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button link to="/register">Registra Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item v-for="coach in filteredCoaches" 
                :key="coach.id" 
                :id="coach.id"
                :firstName="coach.firstName"
                :lastName="coach.lastName"
                :rate="coach.hourlyRate"
                :areas="coach.areas"></coach-item>
            </ul>
            <h3 v-else>Nessun Allenatore Trovato...</h3>
        </base-card>
    </section>
</template>

<script>
import coachItem from '../../components/coaches/coachItem.vue';

export default {
    components: {
        coachItem,
},
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

<style scoped>
@import '../../../public/css/coaches-list.css';

</style>
