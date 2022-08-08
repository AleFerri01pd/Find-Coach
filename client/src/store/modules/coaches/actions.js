import axios from 'axios';

export default{
    async addCoach(context, data) {
        const coachData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.description,
            areas: data.areas,
            hourlyRate: data.rate,
        }

        await axios.post('http://localhost:4001/coaches', coachData)
            .catch((error) => {
                console.log(error);
                this.error = 'Qualcosa è andato storto nell inserimento dei dati';
            })

        context.commit('addCoach', coachData)
    },
    async loadCoaches() {
        await axios.get('http://localhost:4001/coaches').then((response) => {
            if (response.status == 200) {
              console.log(response.data);
            }
          }).catch((error) => {
            console.log(error);
            this.error = 'Fallimento nel caricamento dei dati'
          })
    }
}