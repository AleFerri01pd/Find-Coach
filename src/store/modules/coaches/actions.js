export default{
    addCoach(context, data) {
        const coachData = {
            id: new Date().toISOString(),
            firstName: data.first,
            lastName: data.last,
            description: data.description,
            areas: data.areas,
            hourlyRate: data.rate,
        }

        context.commit('addCoach', coachData)
    }
}