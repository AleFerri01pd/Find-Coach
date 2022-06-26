<template>
    <section name="coach">
        <base-card>
        <h2> {{ fullName }} </h2>
        <h3>${{ rate }}/hour</h3>
        </base-card>
    </section>
    <section name="interessato">
        <base-card>
            <header>
                <h2>Interessato?? Contatta ora!!</h2>
                <base-button link :to="contactLink">Contatta</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>
    <section name="area">
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            <p> {{ description }} </p>
        </base-card>
    </section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        }
    },
    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        areas() {
            return this.selectedCoach.areas;
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        description() {
            return this.selectedCoach.description;
        },
        contactLink() {
            return this.$route.path + '/contact';
        },
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(
            (item) => item.id === this.id
        );
    }
}
</script>
