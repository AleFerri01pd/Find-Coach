import axios from 'axios';

export default{
    addCoach(context, data) {
        const coachData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.description,
            areas: data.areas,
            hourlyRate: data.rate,
        }

        axios.post('http://localhost:4001/coaches', coachData)
            .catch((error) => {
                console.log(error);
                this.error = 'Qualcosa è andato storto nell inserimento dei dati';
            })

        context.commit('addCoach', coachData)
    }
}