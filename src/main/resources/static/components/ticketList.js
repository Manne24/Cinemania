/* import ticketItem from './ticketItem.js'
export default {
    componetns :{
        ticketItem
    },
    template: `
    <div>
        <ticketItem v-for="film of films" :key="film.id" :film="film"/>
    </div>
    `
,
computed: {
    films() {
        return this.$store.state.films
    },
    screenings() {
        return this.$store.state.screenings
    }
}
} */