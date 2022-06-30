<template>
<div>
    <section name="filter">
        <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section name="list">
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button v-if="!isCoach" link to="/register">Registra Coach</base-button>
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
    </div>
</template>

<script>
import coachItem from '../../components/coaches/coachItem.vue';
import coachFilter from '../../components/coaches/coachFilter.vue';

export default {
    components: {
        coachItem,
        coachFilter,
    },
    data() {
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                career: true,
            }
        }
    },
    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(item =>
            {
                if(this.activeFilters.frontend && item.areas.includes('frontend')) {
                    return true;
                }

                if(this.activeFilters.backend && item.areas.includes('backend')) {
                    return true;
                }

                if(this.activeFilters.career && item.areas.includes('career')) {
                    return true;
                }

                return false;
            })
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        }
    
    },
    methods: {
        setFilter(updatedFilters) {
            this.activeFilters = updatedFilters;
        }
    }
}
</script>

<style scoped>
@import '../../../public/css/coaches-list.css';

</style>
