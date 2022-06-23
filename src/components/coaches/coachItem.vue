<template>
    <li>
        <h3> {{ fullName }} </h3>
        <h4> ${{ rate }}/hour </h4>
        <div>
            <span v-for="area in areas" :key="area">{{ area }}</span>
        </div>
        <div class="actions">
            <router-link :to="coachContatcLink">Contatti</router-link>
            <router-link :to="coachDetailsLink">Guarda dettagli</router-link>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        coachContatcLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        coachDetailsLink() {
            return this.$route.path + '/' + this.id + '/contact';
        }
    }
}
</script>

<style scoped>

@import '../../../public/css/coach-item.css';

</style>