<template>
    <section name="registration">
        <base-card>
            <h2>Registra un nuovo Istruttore ora !!</h2>
            <form-coach></form-coach>
        </base-card>
    </section>
</template>

<script>
import FormCoach from '../../components/coaches/coachForm.vue';

export default {
    components: {
        FormCoach,
    }
}
</script>