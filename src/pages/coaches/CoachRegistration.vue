<template>
    <section name="registration">
        <base-card>
            <h2>Registra un nuovo Istruttore ora !!</h2>
            <form-coach @save-data="saveData"></form-coach>
        </base-card>
    </section>
</template>

<script>
import FormCoach from '../../components/coaches/coachForm.vue';

export default {
    components: {
        FormCoach,
    },
    methods: {
        saveData(formData) {
            this.$store.dispatch('coaches/addCoach', formData); //action presente nello store (VUEX) per salvare un coach (locale)
            this.$router.replace('/coaches');
        }
    },
    
}
</script>